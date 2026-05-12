import { NextResponse } from "next/server";
import {
  openStreetMapEmbedFromCoordinates,
  parseCoordinatePair,
} from "@/app/[templeId]/profile/utils/format";

const NOMINATIM_SEARCH = "https://nominatim.openstreetmap.org/search";
const MAX_QUERY_LEN = 280;

type NominatimHit = {
  lat?: string;
  lon?: string;
  boundingbox?: [string, string, string, string];
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const coords = parseCoordinatePair(
    Number.parseFloat(searchParams.get("lat") ?? ""),
    Number.parseFloat(searchParams.get("lon") ?? "")
  );
  if (coords) {
    const embedUrl = openStreetMapEmbedFromCoordinates(coords.lat, coords.lon);
    return NextResponse.json(
      { embedUrl },
      {
        headers: {
          "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
        },
      }
    );
  }

  const raw = searchParams.get("q")?.trim() ?? "";
  if (!raw || raw.length > MAX_QUERY_LEN) {
    return NextResponse.json({ error: "invalid_query" }, { status: 400 });
  }

  const nominatimUrl = new URL(NOMINATIM_SEARCH);
  nominatimUrl.searchParams.set("q", raw);
  nominatimUrl.searchParams.set("format", "json");
  nominatimUrl.searchParams.set("limit", "1");

  let upstream: Response;
  try {
    upstream = await fetch(nominatimUrl.toString(), {
      headers: {
        Accept: "application/json",
        "User-Agent": "aikyam-website/1.0 (+https://www.aikyam.com)",
      },
      next: { revalidate: 86_400 },
    });
  } catch {
    return NextResponse.json({ error: "upstream_failed" }, { status: 502 });
  }

  if (!upstream.ok) {
    return NextResponse.json({ error: "geocode_failed" }, { status: 502 });
  }

  let hits: NominatimHit[];
  try {
    hits = (await upstream.json()) as NominatimHit[];
  } catch {
    return NextResponse.json({ error: "invalid_upstream" }, { status: 502 });
  }

  const first = hits[0];
  if (!first?.lat || !first?.lon) {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }

  const lat = Number.parseFloat(first.lat);
  const lon = Number.parseFloat(first.lon);
  if (Number.isNaN(lat) || Number.isNaN(lon)) {
    return NextResponse.json({ error: "invalid_coords" }, { status: 502 });
  }

  let bboxNums: [number, number, number, number] | undefined;
  const bb = first.boundingbox;
  if (bb?.length === 4) {
    const minLat = Number.parseFloat(bb[0]);
    const maxLat = Number.parseFloat(bb[1]);
    const minLon = Number.parseFloat(bb[2]);
    const maxLon = Number.parseFloat(bb[3]);
    if (![minLat, maxLat, minLon, maxLon].some(Number.isNaN)) {
      bboxNums = [minLat, maxLat, minLon, maxLon];
    }
  }

  const embedUrl = openStreetMapEmbedFromCoordinates(lat, lon, bboxNums);

  return NextResponse.json(
    { embedUrl },
    {
      headers: {
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
      },
    }
  );
}

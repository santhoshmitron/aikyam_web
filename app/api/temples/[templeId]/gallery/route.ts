import { NextResponse } from "next/server";
import { getTempleAuthHeaders, TEMPLE_API_BASE_URL } from "@/lib/temple-api";

export async function GET(
  request: Request,
  context: { params: Promise<{ templeId: string }> }
) {
  const { templeId } = await context.params;
  const { searchParams } = new URL(request.url);
  const page = Math.max(0, Number.parseInt(searchParams.get("page") ?? "0", 10) || 0);
  const size = Math.min(50, Math.max(1, Number.parseInt(searchParams.get("size") ?? "12", 10) || 12));

  const url = `${TEMPLE_API_BASE_URL}/core/api/v1/temples/${encodeURIComponent(templeId)}/gallery?page=${page}&size=${size}`;

  const response = await fetch(url, {
    method: "GET",
    headers: getTempleAuthHeaders(),
    cache: "no-store",
  });

  const text = await response.text();
  if (!response.ok) {
    return NextResponse.json(
      { success: false, message: text || "Gallery request failed" },
      { status: response.status }
    );
  }

  try {
    return NextResponse.json(JSON.parse(text));
  } catch {
    return NextResponse.json({ success: false, message: "Invalid JSON" }, { status: 502 });
  }
}

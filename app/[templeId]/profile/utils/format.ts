import type { DarshanWindow, TempleProfile } from "../types";

function parseTimeToMinutes(hhmm?: string): number | null {
  if (!hhmm || typeof hhmm !== "string") return null;
  const m = hhmm.trim().match(/^(\d{1,2}):(\d{2})$/);
  if (!m) return null;
  const h = Number.parseInt(m[1], 10);
  const min = Number.parseInt(m[2], 10);
  if (Number.isNaN(h) || Number.isNaN(min) || h > 23 || min > 59) return null;
  return h * 60 + min;
}

function formatMinutes12h(totalMinutes: number): string {
  const h24 = Math.floor(totalMinutes / 60) % 24;
  const m = totalMinutes % 60;
  const period = h24 >= 12 ? "PM" : "AM";
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  const mm = m.toString().padStart(2, "0");
  return `${h12}:${mm} ${period}`;
}

/** Single time like "06:00" → "6:00 AM" */
export function formatSingleTime12h(hhmm?: string): string {
  const mins = parseTimeToMinutes(hhmm);
  if (mins === null) return hhmm ?? "";
  return formatMinutes12h(mins);
}

/** Window "06:00"–"11:00" → human readable range */
export function formatTimeWindow12h(slot?: DarshanWindow): string {
  if (!slot?.open && !slot?.close) return "";
  const o = slot?.open ? formatSingleTime12h(slot.open) : "";
  const c = slot?.close ? formatSingleTime12h(slot.close) : "";
  if (o && c) return `${o} – ${c}`;
  return o || c || "";
}

const STATE_NAMES: Record<string, string> = {
  KA: "Karnataka",
  TN: "Tamil Nadu",
  MH: "Maharashtra",
  UP: "Uttar Pradesh",
  DL: "Delhi",
  TG: "Telangana",
  AP: "Andhra Pradesh",
  KL: "Kerala",
  GJ: "Gujarat",
  RJ: "Rajasthan",
  WB: "West Bengal",
};

/** Pretty deity names — never expose raw deity_* IDs in UI */
export function prettifyDeity(deityId?: string): string {
  if (!deityId) return "Sacred deity";

  let slug = deityId.replace(/^deity_/, "");
  slug = slug.replace(/_(shaiv|shai|vaishnav|shakt|smart|shaivic)$/i, "");
  const tokens = slug.split("_").filter(Boolean);
  const joined = tokens.join("_").toLowerCase();
  const first = tokens[0]?.toLowerCase() ?? "";

  const overrides: Record<string, string> = {
    shiva: "Lord Shiva",
    vishnu: "Lord Vishnu",
    krishna: "Lord Krishna",
    rama: "Lord Rama",
    hanuman: "Lord Hanuman",
    ganesh: "Lord Ganesha",
    ganesha: "Lord Ganesha",
    durga: "Goddess Durga",
    lakshmi: "Goddess Lakshmi",
    saraswati: "Goddess Saraswati",
    parvati: "Goddess Parvati",
    devi: "The Divine Mother",
    amma: "Divine Mother",
    jagannath: "Lord Jagannath",
    murugan: "Lord Murugan",
    ayyappa: "Lord Ayyappa",
    venkateswara: "Lord Venkateswara",
    balaji: "Lord Balaji",
    channakeshava: "Lord Channakeshava",
    channakeshava_swamy: "Lord Channakeshava Swamy",
    banashankari: "Goddess Banashankari",
    malleshwara: "Lord Malleshwara",
  };

  if (overrides[joined]) return overrides[joined];
  if (overrides[first]) return overrides[first];

  const readable = tokens
    .map((t) => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase())
    .join(" ");

  const isFeminine = /amma|devi|durga|lakshmi|saraswati|parvati|banashankari|kali|meenakshi/i.test(
    joined
  );
  if (isFeminine) {
    return readable.toLowerCase().startsWith("goddess ") ? readable : `Goddess ${readable}`;
  }
  return readable.toLowerCase().startsWith("lord ") ? readable : `Lord ${readable}`;
}

/** Convert place_point_malleswaram → friendly area label (no raw IDs) */
export function prettifyPlace(placeId?: string): string | null {
  if (!placeId) return null;
  const raw = placeId.replace(/^place_(point|area)_/i, "").replace(/^place_/i, "");
  if (!raw) return null;
  const words = raw.split("_").filter(Boolean);
  if (words.length === 0) return null;
  return words.map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ");
}

export function formatAddressClean(
  address?: TempleProfile["address"],
  fallbackName?: string
): string {
  const area = address?.area?.trim();
  const city = address?.city?.trim();
  const district = address?.district?.trim();
  const stateCode = address?.stateCode?.trim();
  const pincode = address?.pincode?.trim();
  const country = address?.countryCode?.trim();

  const stateName = stateCode ? STATE_NAMES[stateCode] ?? stateCode : "";

  const parts: string[] = [];
  if (area) parts.push(area);
  if (city && city !== area) parts.push(city);
  if (district && district !== city && district !== area) parts.push(district);
  if (stateName) parts.push(stateName);
  if (pincode) parts.push(pincode);
  if (country && country !== "IN") parts.push(country === "IN" ? "India" : country);

  if (parts.length > 0) return parts.join(", ");

  if (fallbackName) return fallbackName;
  return "";
}

/** ISO date → relative label e.g. "Updated 3 days ago" */
export function formatRelativeDate(iso?: string): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  const now = Date.now();
  const diff = now - d.getTime();
  const sec = Math.floor(diff / 1000);
  const min = Math.floor(sec / 60);
  const hr = Math.floor(min / 60);
  const day = Math.floor(hr / 24);
  if (day >= 30) return d.toLocaleDateString("en-IN", { dateStyle: "medium" });
  if (day >= 1) return `${day} day${day === 1 ? "" : "s"} ago`;
  if (hr >= 1) return `${hr} hour${hr === 1 ? "" : "s"} ago`;
  if (min >= 1) return `${min} minute${min === 1 ? "" : "s"} ago`;
  return "Just now";
}

export type OpenNowResult =
  | { status: "open"; label: string }
  | { status: "closed"; label: string; nextOpen?: string }
  | { status: "unknown" };

/** Client-safe: pass Date or omit for "now" */
export function isOpenNow(
  timings: TempleProfile["timings"],
  now: Date = new Date()
): OpenNowResult {
  const morning = timings?.darshan?.morning;
  const evening = timings?.darshan?.evening;
  const mo = parseTimeToMinutes(morning?.open);
  const mc = parseTimeToMinutes(morning?.close);
  const eo = parseTimeToMinutes(evening?.open);
  const ec = parseTimeToMinutes(evening?.close);

  if (mo === null && mc === null && eo === null && ec === null) {
    return { status: "unknown" };
  }

  const cur = now.getHours() * 60 + now.getMinutes();

  const inMorning = mo !== null && mc !== null && cur >= mo && cur <= mc;
  const inEvening = eo !== null && ec !== null && cur >= eo && cur <= ec;

  if (inMorning || inEvening) {
    return { status: "open", label: "Darshan open now" };
  }

  const candidates: { start: number; label: string }[] = [];
  if (mo !== null) candidates.push({ start: mo, label: formatSingleTime12h(morning?.open) });
  if (eo !== null) candidates.push({ start: eo, label: formatSingleTime12h(evening?.open) });

  let next: string | undefined;
  for (const c of candidates.sort((a, b) => a.start - b.start)) {
    if (cur < c.start) {
      next = c.label;
      break;
    }
  }
  if (!next && candidates.length > 0) {
    next = formatSingleTime12h(morning?.open === undefined ? evening?.open : morning?.open);
  }

  return {
    status: "closed",
    label: next ? `Opens at ${next}` : "Check timings",
    nextOpen: next,
  };
}

export function mapsSearchUrl(query: string): string {
  const q = encodeURIComponent(query);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

export function mapsDirectionsUrl(query: string): string {
  const dest = encodeURIComponent(query);
  return `https://www.google.com/maps?q=${dest}`;
}

export function mapsEmbedUrl(query: string): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

/** Role label for pills e.g. primary → Primary deity */
export function prettifyRole(role?: string): string {
  if (!role) return "";
  return role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();
}

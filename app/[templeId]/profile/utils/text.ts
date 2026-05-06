import type { LocalizedFields } from "../types";

export function pickLocalizedText(
  value?: LocalizedFields,
  preferred: string[] = ["en", "official", "local", "kn", "hi"]
) {
  if (!value) return "";
  for (const key of preferred) {
    if (value[key]) return value[key];
  }
  const fallback = Object.values(value).find(Boolean);
  return fallback ?? "";
}

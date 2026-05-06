export const TEMPLE_API_BASE_URL = "https://api.shriaikyam.com";

export function getTempleAuthHeaders(): HeadersInit {
  const headers: HeadersInit = {};

  const token = process.env.TEMPLE_PROFILE_API_TOKEN;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  if (process.env.TEMPLE_PROFILE_COOKIE) {
    headers.Cookie = process.env.TEMPLE_PROFILE_COOKIE;
  }

  return headers;
}

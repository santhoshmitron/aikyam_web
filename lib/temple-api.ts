export const TEMPLE_API_BASE_URL = "https://api.shriaikyam.com";

const HARDCODED_FALLBACK_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyXzAwMDAwNSIsInByb3ZpZGVyIjoicGhvbmUiLCJwcm92aWRlclZhbHVlIjoiOTg4MDAyMDIyNCIsInJvbGVzIjpbIkRFVk9URUUiXSwiaWF0IjoxNzc2NzQ4MjExLCJleHAiOjE3NzY4MzQ2MTEsImlzcyI6IkFJS1lBTS1BVVRIIiwiYXVkIjoiQUlLWUFNLVNFUlZJQ0VTIiwicGhvbmVOdW1iZXIiOiI5ODgwMDIwMjI0IiwidXNlcm5hbWUiOiJpdHNfbWVfaGFwcHkifQ.3TYUD_mmfUup9KOVNbDuICIUGB3eEPI_24BuFhSczFo";

export function getTempleAuthHeaders(): HeadersInit {
  const headers: HeadersInit = {};
  const token = process.env.TEMPLE_PROFILE_API_TOKEN || HARDCODED_FALLBACK_TOKEN;
  headers.Authorization = `Bearer ${token}`;

  if (process.env.TEMPLE_PROFILE_COOKIE) {
    headers.Cookie = process.env.TEMPLE_PROFILE_COOKIE;
  }

  return headers;
}

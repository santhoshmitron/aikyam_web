import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://aikyam.in';

  const robots = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /.next
Disallow: /api

Sitemap: ${baseUrl}/sitemap.xml

# Google specific
User-agent: Googlebot
Allow: /
Crawl-delay: 1

# Bing specific
User-agent: Bingbot
Allow: /
Crawl-delay: 1
`;

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}

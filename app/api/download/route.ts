import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const fallbackUrl = 'https://github.com/LochanJangid/zero_sql/releases/download/v0.1.5/zero-sql-Setup.exe';

  try {
    const res = await fetch('https://api.github.com/repos/LochanJangid/zero_sql/releases', {
      headers: {
        'User-Agent': 'zero-sql-website',
      },
      next: { revalidate: 60 },
    });

    if (res.ok) {
      const releases = await res.json();
      if (Array.isArray(releases)) {
        for (const rel of releases) {
          if (rel?.assets && Array.isArray(rel.assets)) {
            const exeAsset = rel.assets.find((a: any) => typeof a.name === 'string' && a.name.endsWith('.exe'));
            if (exeAsset?.browser_download_url) {
              return NextResponse.redirect(exeAsset.browser_download_url, { status: 302 });
            }
          }
        }
      }
    }
  } catch (err) {
    console.error('Failed to query releases:', err);
  }

  return NextResponse.redirect(fallbackUrl, { status: 302 });
}

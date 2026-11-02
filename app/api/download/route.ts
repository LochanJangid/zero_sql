import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const fallbackUrl = 'https://github.com/LochanJangid/zero_sql/releases/download/v0.1.3/zero-sql-Setup.exe';

  try {
    const res = await fetch('https://api.github.com/repos/LochanJangid/zero_sql/releases/latest', {
      headers: {
        'User-Agent': 'zero-sql-website',
      },
      next: { revalidate: 60 },
    });

    if (res.ok) {
      const data = await res.json();
      if (data?.assets && Array.isArray(data.assets) && data.assets.length > 0) {
        const exeAsset = data.assets.find((a: any) => typeof a.name === 'string' && a.name.endsWith('.exe'));
        if (exeAsset?.browser_download_url) {
          return NextResponse.redirect(exeAsset.browser_download_url, { status: 302 });
        }
      }
    }
  } catch (err) {
    console.error('Failed to query latest release:', err);
  }

  return NextResponse.redirect(fallbackUrl, { status: 302 });
}

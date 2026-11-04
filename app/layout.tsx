import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://zero-sql.vercel.app'),
  title: 'zero-sql — Enterprise-Grade Desktop Database Studio & AI SQL Engine',
  description: 'Fast, privacy-first desktop database client for SQLite, PostgreSQL, MySQL, DuckDB, and SQL Server with local AI SQL synthesis. Zero cloud leakage, 100% offline-ready.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/icon.png',
  },
  openGraph: {
    title: 'zero-sql — Enterprise-Grade Desktop Database Studio',
    description: 'Blazing fast, 100% offline-capable desktop SQL IDE with built-in AI repair, ERD visualization, and multi-dialect acceleration.',
    url: 'https://zero-sql.vercel.app',
    siteName: 'zero-sql',
    images: [
      {
        url: '/logo-full.png',
        width: 1200,
        height: 630,
        alt: 'zero-sql Desktop Client',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'zero-sql — Desktop Database Studio & AI SQL Engine',
    description: 'Privacy-first database client with zero cloud leakage, multi-engine execution, and instant schema synthesis.',
    images: ['/logo-full.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="theme-color" content="#0d0e11" />
      </head>
      <body className="antialiased min-h-screen bg-[#0d0e11] text-[#ededed] selection:bg-[#4f46e5]/30 selection:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

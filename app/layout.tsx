import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'zero-sql — Desktop Database Client with Local RAG',
  description: 'Fast, privacy-first desktop database client for SQLite, PostgreSQL, MySQL, DuckDB, and SQL Server with local AI SQL synthesis.',
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[#0d0e11] text-[#ededed]">
        {children}
      </body>
    </html>
  );
}

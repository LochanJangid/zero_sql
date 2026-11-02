import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CreatorSection from '../../components/CreatorSection';
import { 
  Activity, 
  Tag, 
  CheckCircle2, 
  Download, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const metadata = {
  title: 'Changelog & Release Notes — zero-sql Desktop Database Studio',
  description: 'Version-by-version release history, bug fixes, performance improvements, and new capabilities in zero-sql.',
};

const RELEASES = [
  {
    version: 'v0.1.3',
    date: 'November 2, 2026',
    badge: 'Latest Release',
    highlights: [
      'Auto-Updater Resilience: Gracefully detects when the user is already on the latest version without surfacing 404 manifest errors.',
      'Release Manifest Guarantee: Automated pipeline verification that uploads latest.yml and differential blockmaps to the release channel.',
      'Installer Polish: Customized NSIS wizard with folder selection, desktop shortcut creation, and run-after-finish options.',
      'Process Teardown Hardening: Enhanced taskkill process tree termination ensuring zero orphaned Python child processes.',
    ],
    downloadUrl: '/api/download',
  },
  {
    version: 'v0.1.2',
    date: 'November 2, 2026',
    badge: 'Major Stability Release',
    highlights: [
      'SQLite Locking Fix: Added 30.0s busy_timeout, WAL journal mode, and read-only URI handling preventing database lock errors.',
      'Native File Loading: Fixed file-not-found issues with CSV/Excel/JSON using Electron webUtils.getPathForFile and temp buffer IPC.',
      'Embedded Sample Database: Automatic generator creates 5,000+ realistic e-commerce records in userData/shop.db on first launch.',
      'Embedded AI Engine: Default Groq high-throughput key embedded so AI repair, explain, and SQL synthesis work out-of-the-box.',
      'Active Settings Wiring: Fully connected Monaco settings (word wrap, line numbers, cursor, ligatures, minimap) and table settings (null display, striped rows, screen-share mode).',
      'Multi-Resolution Icon: Generated crisp Windows ICO containing 16, 32, 48, 64, 128, and 256px mipmaps.',
    ],
    downloadUrl: '/download',
  },
  {
    version: 'v0.1.1',
    date: 'November 1, 2026',
    badge: 'Patch Release',
    highlights: [
      'CI/CD alignment for automated Windows build pipeline.',
      'Dependency updates across Vite, Monaco Editor, and PyInstaller spec.',
    ],
    downloadUrl: '/download',
  },
  {
    version: 'v0.1.0',
    date: 'October 31, 2026',
    badge: 'Initial Release',
    highlights: [
      'First public release of zero-sql desktop database studio.',
      'Support for SQLite, DuckDB, PostgreSQL, MySQL, and Microsoft SQL Server.',
      'Monaco SQL Editor with execution timing and live syntax highlighting.',
      'Local schema RAG engine with conversational SQL generation.',
      'Virtualized data table with TanStack Virtual supporting high-throughput query inspection.',
    ],
    downloadUrl: '/download',
  },
];

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-[#0d0e11] text-slate-100 selection:bg-emerald-500/30 selection:text-white">
      <Navbar currentPath="/changelog" />

      {/* Header */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-wide uppercase">
          <Activity className="w-3.5 h-3.5" />
          Product Evolution
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Changelog & Release Notes
        </h1>
        <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-400">
          Track every release, improvement, security patch, and performance optimization made to zero-sql.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
        {RELEASES.map((rel, idx) => (
          <div 
            key={idx}
            className="rounded-2xl bg-[#141720] border border-white/10 p-6 sm:p-8 space-y-6 shadow-xl relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold text-white font-mono">{rel.version}</h2>
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                    idx === 0
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 font-semibold'
                      : 'bg-white/5 text-slate-400 border-white/10'
                  }`}>
                    {rel.badge}
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-sans">{rel.date}</div>
              </div>

              <a
                href={rel.downloadUrl}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/10 transition-colors w-fit"
              >
                <Download className="w-3.5 h-3.5 text-emerald-400" />
                <span>Download Assets</span>
              </a>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              {rel.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <CreatorSection />
      <Footer />
    </div>
  );
}

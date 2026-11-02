import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DesktopWindow from '../../components/DesktopWindow';
import CreatorSection from '../../components/CreatorSection';
import { 
  Terminal, 
  Database, 
  ShieldCheck, 
  Sparkles, 
  Cpu, 
  Workflow, 
  Download, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  HardDrive, 
  Lock,
  Code2,
  FileSpreadsheet
} from 'lucide-react';

export const metadata = {
  title: 'Product Overview — zero-sql Desktop Database Studio',
  description: 'Learn how zero-sql combines local AI synthesis, Monaco SQL editing, and offline database execution into a fast, privacy-first desktop application.',
};

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-[#0d0e11] text-slate-100 selection:bg-emerald-500/30 selection:text-white">
      <Navbar currentPath="/product" />

      {/* Hero Header */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
          <Terminal className="w-3.5 h-3.5" />
          The Desktop Database Workspace
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
          A Modern Database Studio Crafted for <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Developers</span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed">
          Zero-SQL brings the speed and ergonomics of a native desktop developer IDE to your database workflow. 
          Connect to any database, ask questions in plain English, inspect query plans, and explore schemas — 100% locally with zero cloud dependencies.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/download"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            Download for Windows (x64)
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/10 transition-colors"
          >
            Explore All Features <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Interactive Desktop Showcase Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <DesktopWindow />
      </section>

      {/* The 7-Step Product Workflow */}
      <section className="py-24 border-t border-white/5 bg-[#0b0c0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              End-to-End Workflow
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              From Plain Question to Production-Grade Query in Seconds
            </h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Zero-SQL is designed to eliminate tedious manual boilerplate without stripping away transparency or developer control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#141720] border border-white/5 space-y-3 relative group hover:border-emerald-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold font-mono text-sm">
                01
              </div>
              <h4 className="text-base font-bold text-white">Instant Connection</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Open local SQLite or DuckDB files directly, connect to PostgreSQL, MySQL, or SQL Server via URI, or drop flat CSV/Excel files into the studio.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#141720] border border-white/5 space-y-3 relative group hover:border-emerald-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold font-mono text-sm">
                02
              </div>
              <h4 className="text-base font-bold text-white">Local Schema RAG</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Zero-SQL introspects your tables, columns, data types, and foreign key relations locally. No database passwords or sensitive row values are ever shared.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#141720] border border-white/5 space-y-3 relative group hover:border-emerald-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold font-mono text-sm">
                03
              </div>
              <h4 className="text-base font-bold text-white">Natural Language AI</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ask analytical questions in conversational language. Zero-SQL synthesizes dialect-precise, optimized SQL tailored to your schema and database engine.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#141720] border border-white/5 space-y-3 relative group hover:border-emerald-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold font-mono text-sm">
                04
              </div>
              <h4 className="text-base font-bold text-white">Monaco Review & Run</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Review the generated SQL in Monaco with full syntax highlighting. Format on run, inspect EXPLAIN plans, and execute with safety guards and transaction rollback.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Architecture Deep Dive */}
      <section className="py-24 border-t border-white/5 bg-[#0d0e11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              System Architecture
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Engineered for Zero Host Dependencies & Total Security
            </h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Unlike web-based database clients that proxy your traffic through remote servers, Zero-SQL runs 100% on your local machine.
            </p>
          </div>

          <div className="bg-[#13161f] border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              
              <div className="p-5 rounded-xl bg-[#0e1015] border border-white/5 space-y-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Terminal className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white">Electron 45 Desktop Shell</h4>
                <p className="text-slate-400 leading-relaxed">
                  Fast native GUI running Chromium with secure IPC boundaries, OS keychain credential encryption (`safeStorage`), single-instance locking, and differential updater.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#0e1015] border border-white/5 space-y-3">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white">Frozen PyInstaller Backend</h4>
                <p className="text-slate-400 leading-relaxed">
                  A compiled onedir Python 3.12 service bundled inside the installer. Starts programmatically on a random loopback port (`127.0.0.1`) with zero Python or pip required on the user PC.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#0e1015] border border-white/5 space-y-3">
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Lock className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white">Private Loopback Execution</h4>
                <p className="text-slate-400 leading-relaxed">
                  All queries execute directly from your workstation to your database target. No query results, credentials, or schema definitions pass through any cloud proxy.
                </p>
              </div>

            </div>

            {/* Architecture Flow Diagram */}
            <div className="p-6 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-slate-300 overflow-x-auto space-y-2">
              <div className="text-emerald-400 font-bold mb-3 flex items-center gap-2">
                <Workflow className="w-4 h-4" />
                <span>Zero-SQL Process Isolation & Execution Flow:</span>
              </div>
              <div className="text-[11px] text-slate-400 leading-relaxed space-y-1">
                <div>[User Machine] Electron GUI (React + Monaco Editor + Virtual Table)</div>
                <div className="pl-6 text-slate-400">↓ (Secure IPC + Dynamic Auth Token)</div>
                <div>[Loopback 127.0.0.1] Local FastAPI Core (Frozen PyInstaller Executable)</div>
                <div className="pl-6 text-slate-400">├─ RAG Context Engine (Introspects schema & caches column hints in userData)</div>
                <div className="pl-6 text-slate-400">├─ Dialect Adapters: SQLite (WAL Mode) • DuckDB • PostgreSQL • MySQL • MSSQL</div>
                <div className="pl-6 text-slate-400">└─ File Query Engine (Streams CSV, Excel .xlsx, and JSON into in-memory SQL tables)</div>
                <div className="pl-6 text-emerald-400 font-semibold">↓ Direct Network / Disk Connection (100% Private, Zero Cloud Proxy)</div>
                <div>[Your Data Target] SQLite / DuckDB File / Postgres / MySQL / SQL Server Instance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <CreatorSection />

      <Footer />
    </div>
  );
}

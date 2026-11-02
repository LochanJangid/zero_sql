import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DesktopWindow from '../components/DesktopWindow';
import CreatorSection from '../components/CreatorSection';
import { 
  Download, 
  Terminal, 
  Database, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  HardDrive, 
  Server, 
  FileSpreadsheet, 
  Play, 
  Check, 
  Copy, 
  EyeOff, 
  Cpu, 
  Zap, 
  Lock, 
  Code2, 
  Sliders, 
  HelpCircle,
  AlertTriangle,
  Table,
  Workflow
} from 'lucide-react';

export const metadata = {
  title: 'zero-sql — The Modern Database Studio with Local AI',
  description: 'Fast, privacy-first desktop database client for SQLite, DuckDB, PostgreSQL, MySQL, and SQL Server. Write natural language questions, synthesize safe SQL, and explore schemas 100% offline.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0d0e11] text-slate-100 selection:bg-emerald-500/30 selection:text-white">
      {/* Section 1: Navigation */}
      <Navbar currentPath="/" />

      {/* Section 2: Hero */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-8 overflow-hidden">
        {/* Soft background ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-emerald-500/10 via-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-6 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Modern Database Studio with Local AI</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            The SQL Editor and Database Manager You&apos;ll <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">Actually Enjoy</span> Using.
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed">
            Connect to SQLite, DuckDB, PostgreSQL, MySQL, SQL Server, and CSV files. 
            Ask questions in plain English, synthesize safe SQL, inspect execution plans, and explore schemas — 100% offline on your desktop.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/download"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download Free for Windows</span>
            </Link>

            <Link
              href="/product"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/10 transition-colors"
            >
              <span>Explore Product Tour</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>

          {/* Specs & Trust Stats */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Windows 10/11 x64</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Zero Host Python/Node Needed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              <span>100% Offline & Private</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>Open Source (ISC)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Product Showcase (Centerpiece Desktop Studio) */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <DesktopWindow />
      </section>

      {/* Section 4: Supported Databases */}
      <section className="py-24 border-t border-white/5 bg-[#0b0c0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Compatibility</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              One Studio for All Your Data Engines
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Native drivers and dialect adapters tuned for high-throughput introspection and execution.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            
            <div className="p-5 rounded-2xl bg-[#141720] border border-white/5 text-center space-y-3 hover:border-emerald-500/30 transition-all group">
              <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <HardDrive className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">SQLite</h3>
                <div className="text-[11px] font-mono text-slate-400">.db • WAL Mode</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#141720] border border-white/5 text-center space-y-3 hover:border-amber-500/30 transition-all group">
              <div className="w-12 h-12 mx-auto rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">DuckDB</h3>
                <div className="text-[11px] font-mono text-slate-400">.duckdb • Vectorized</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#141720] border border-white/5 text-center space-y-3 hover:border-blue-500/30 transition-all group">
              <div className="w-12 h-12 mx-auto rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <Server className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">PostgreSQL</h3>
                <div className="text-[11px] font-mono text-slate-400">v12 to 16+ • SSL</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#141720] border border-white/5 text-center space-y-3 hover:border-purple-500/30 transition-all group">
              <div className="w-12 h-12 mx-auto rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">MySQL</h3>
                <div className="text-[11px] font-mono text-slate-400">8.0+ & MariaDB</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#141720] border border-white/5 text-center space-y-3 hover:border-cyan-500/30 transition-all group">
              <div className="w-12 h-12 mx-auto rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Server className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">SQL Server</h3>
                <div className="text-[11px] font-mono text-slate-400">T-SQL • Azure SQL</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#141720] border border-white/5 text-center space-y-3 hover:border-emerald-500/30 transition-all group">
              <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Flat Files</h3>
                <div className="text-[11px] font-mono text-slate-400">CSV • XLSX • JSON</div>
              </div>
            </div>

          </div>

          <div className="text-center">
            <Link 
              href="/databases" 
              className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1 hover:underline"
            >
              View detailed connection guide & driver specifications <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* Section 5: Natural Language to SQL Storytelling */}
      <section className="py-24 border-t border-white/5 bg-[#0d0e11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-wider text-purple-400">Visual Workflow</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              How Natural Language to SQL Actually Works
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              No black boxes. A 5-step transparent workflow giving you full visibility from plain prompt to verified query result.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            
            <div className="p-5 rounded-2xl bg-[#141720] border border-white/5 space-y-2.5">
              <span className="text-emerald-400 font-mono text-xs font-bold">Step 1</span>
              <h3 className="font-bold text-white text-sm">Ask a Question</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Type in plain English: &ldquo;Show customer churn rate by region in 2026&rdquo;.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#141720] border border-white/5 space-y-2.5">
              <span className="text-blue-400 font-mono text-xs font-bold">Step 2</span>
              <h3 className="font-bold text-white text-sm">Local Schema RAG</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Matches prompt against local table DDL, foreign keys, and column hints.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#141720] border border-white/5 space-y-2.5">
              <span className="text-purple-400 font-mono text-xs font-bold">Step 3</span>
              <h3 className="font-bold text-white text-sm">Generate & Review</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                View synthesized, beautified SQL in Monaco with syntax highlights.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#141720] border border-white/5 space-y-2.5">
              <span className="text-amber-400 font-mono text-xs font-bold">Step 4</span>
              <h3 className="font-bold text-white text-sm">Guarded Execution</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Inspect EXPLAIN plans and run safely with mutation warnings.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#141720] border border-white/5 space-y-2.5">
              <span className="text-emerald-400 font-mono text-xs font-bold">Step 5</span>
              <h3 className="font-bold text-white text-sm">Inspect & Export</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Scroll through millions of rows smoothly and export to Excel (.xlsx) or CSV.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Section 6: Feature Showcase (Alternating Rhythm) */}
      <section className="py-24 border-t border-white/5 bg-[#0e1016] space-y-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Feature 1: Monaco Editor */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">Pro SQL Editor</div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Monaco Editor Engine with Format-On-Run
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Equipped with the same editor technology powering VS Code. Instant autocomplete, bracket matching, 
                minimap navigation, and automatic SQL beautification on <code className="text-emerald-300 font-mono text-xs">Ctrl+Enter</code>.
              </p>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Configurable font ligatures, line numbers, and cursor animations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Saved query buffers and automatic multi-tab session restoration</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-2xl bg-[#141720] border border-white/10 p-5 font-mono text-xs text-slate-300 shadow-xl">
              <div className="text-slate-400 pb-2 border-b border-white/5 flex justify-between text-[11px]">
                <span className="text-emerald-400 font-semibold">orders_summary.sql</span>
                <span>Ctrl+Enter to Execute</span>
              </div>
              <pre className="pt-3 text-[11px] leading-relaxed text-emerald-300">
                SELECT customer_id, COUNT(*) AS orders,<br />
                &nbsp;&nbsp;ROUND(SUM(amount), 2) AS total_spent<br />
                FROM orders<br />
                WHERE status = &apos;completed&apos;<br />
                GROUP BY customer_id HAVING total_spent &gt; 1000<br />
                ORDER BY total_spent DESC LIMIT 10;
              </pre>
            </div>
          </div>

          {/* Feature 2: High Performance Virtual Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 rounded-2xl bg-[#141720] border border-white/10 p-5 font-mono text-xs text-slate-300 shadow-xl space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/5 text-[11px]">
                <span className="text-white font-sans font-semibold">Results Grid</span>
                <span className="text-emerald-400">100,000 rows • 2.4ms render</span>
              </div>
              <div className="text-[11px] space-y-1">
                <div className="grid grid-cols-3 bg-white/5 p-1.5 rounded font-bold text-slate-200">
                  <span>Customer</span>
                  <span>Region</span>
                  <span className="text-right">Spend</span>
                </div>
                <div className="grid grid-cols-3 p-1.5 rounded hover:bg-white/[0.03]">
                  <span>Sophia Martinez</span>
                  <span>North America</span>
                  <span className="text-right text-emerald-400">$4,820.50</span>
                </div>
                <div className="grid grid-cols-3 p-1.5 rounded hover:bg-white/[0.03]">
                  <span>Alexander Wright</span>
                  <span>Europe (UK)</span>
                  <span className="text-right text-emerald-400">$3,940.00</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-400">Instant Performance</div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Virtualized Results That Never Drop a Frame
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Render hundreds of thousands of query rows with zero sluggishness. 
                Built with TanStack Virtual for instant scrolling, sortable columns, distinct NULL highlighting, and fast Excel exports.
              </p>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Screen-share privacy shield masks sensitive emails and tokens</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>One-click export to native Excel (.xlsx) or RFC-4180 CSV</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 7: Why Zero-SQL (Comparison Matrix) */}
      <section className="py-24 border-t border-white/5 bg-[#0b0c0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Comparison</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Developers Choose zero-sql
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Designed from first principles to fix the bloat, sluggishness, and privacy risks of legacy database clients.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#141720]">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="bg-[#101218] border-b border-white/10 text-slate-300">
                  <th className="py-3.5 px-4 font-semibold font-sans">Feature Capability</th>
                  <th className="py-3.5 px-4 font-semibold text-emerald-400 font-sans text-center bg-emerald-500/10">zero-sql</th>
                  <th className="py-3.5 px-4 font-semibold text-slate-400 font-sans text-center">Legacy Clients (DBeaver / pgAdmin)</th>
                  <th className="py-3.5 px-4 font-semibold text-slate-400 font-sans text-center">Cloud AI SaaS Tools</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr>
                  <td className="py-3 px-4 font-sans font-medium text-white">Startup Latency</td>
                  <td className="py-3 px-4 text-center text-emerald-400 font-bold bg-emerald-500/5">Sub-second (~800ms)</td>
                  <td className="py-3 px-4 text-center text-slate-400">Slow (10s - 30s JVM startup)</td>
                  <td className="py-3 px-4 text-center text-slate-400">Depends on web browser</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-sans font-medium text-white">Data Privacy & Proxying</td>
                  <td className="py-3 px-4 text-center text-emerald-400 font-bold bg-emerald-500/5">100% Local (Zero Cloud Proxy)</td>
                  <td className="py-3 px-4 text-center text-slate-300">Local</td>
                  <td className="py-3 px-4 text-center text-red-400">Proxies DB data through cloud</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-sans font-medium text-white">Natural Language SQL</td>
                  <td className="py-3 px-4 text-center text-emerald-400 font-bold bg-emerald-500/5">Built-in Local RAG Synthesis</td>
                  <td className="py-3 px-4 text-center text-slate-400">None / Paid plugin</td>
                  <td className="py-3 px-4 text-center text-slate-300">Supported (Trains cloud models)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-sans font-medium text-white">Flat File SQL Queries</td>
                  <td className="py-3 px-4 text-center text-emerald-400 font-bold bg-emerald-500/5">Native CSV, XLSX & JSON</td>
                  <td className="py-3 px-4 text-center text-slate-400">Requires import into server</td>
                  <td className="py-3 px-4 text-center text-slate-400">Upload to third-party cloud</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-sans font-medium text-white">Screen-Share Privacy Mode</td>
                  <td className="py-3 px-4 text-center text-emerald-400 font-bold bg-emerald-500/5">1-Click Live Masking</td>
                  <td className="py-3 px-4 text-center text-slate-400">None</td>
                  <td className="py-3 px-4 text-center text-slate-400">None</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-sans font-medium text-white">Installation Overhead</td>
                  <td className="py-3 px-4 text-center text-emerald-400 font-bold bg-emerald-500/5">Standalone Exe (0 Python/Java)</td>
                  <td className="py-3 px-4 text-center text-slate-400">Requires Java JRE / Python</td>
                  <td className="py-3 px-4 text-center text-slate-300">Web Account Registration</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* Section 8: Privacy and Security */}
      <section className="py-24 border-t border-white/5 bg-[#0d0e11]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Security Architecture</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Your Data Never Touches Our Servers
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Unlike cloud-hosted AI database assistants, Zero-SQL runs completely on your machine. 
              Credentials stay in your OS keychain, and query rows are processed exclusively in your workstation memory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-5 rounded-2xl bg-[#141720] border border-white/10 space-y-2.5">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h3 className="font-bold text-white text-sm">Direct Loopback IPC</h3>
              <p className="text-slate-400 leading-relaxed">
                FastAPI Python backend listens exclusively on loopback (127.0.0.1) with cryptographic token validation on every request.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#141720] border border-white/10 space-y-2.5">
              <Lock className="w-6 h-6 text-blue-400" />
              <h3 className="font-bold text-white text-sm">OS Keychain Vault</h3>
              <p className="text-slate-400 leading-relaxed">
                Credentials and connection strings are encrypted on disk via Electron safeStorage (Windows DPAPI) and never stored in plaintext.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#141720] border border-white/10 space-y-2.5">
              <AlertTriangle className="w-6 h-6 text-amber-400" />
              <h3 className="font-bold text-white text-sm">Transaction Safety</h3>
              <p className="text-slate-400 leading-relaxed">
                Destructive queries (DROP, DELETE, TRUNCATE) trigger instant warning modals before execution, with read-only connection locks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Complete Product Workflow */}
      <section className="py-24 border-t border-white/5 bg-[#0b0c0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Complete Journey</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Connect. Explore. Ask. Execute.
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center text-xs font-mono">
            {['Connect', 'Explore', 'Ask AI', 'Generate', 'Review', 'Execute', 'Export'].map((step, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#141720] border border-white/5 space-y-1.5">
                <span className="text-[10px] text-emerald-400 font-bold block">0{i + 1}</span>
                <span className="font-semibold text-white block">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Developer-Focused Section */}
      <section className="py-20 border-t border-white/5 bg-[#0e1016]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase">
            <Terminal className="w-3.5 h-3.5" />
            Built for Serious Developers
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Lightweight Footprint. Heavyweight Performance.
          </h2>
          <p className="max-w-2xl mx-auto text-sm text-slate-400 leading-relaxed">
            Zero-SQL compiles into a standalone, portable desktop binary. 
            No background licensing daemons, no mandatory account sign-in, and zero analytics telemetry tracking your queries.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/docs"
              className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/10 transition-colors"
            >
              Read the Documentation
            </Link>
            <Link
              href="/open-source"
              className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/10 transition-colors"
            >
              Explore Open Source Code
            </Link>
          </div>
        </div>
      </section>

      {/* Section 11: Download Section */}
      <section className="py-24 border-t border-white/5 bg-[#0b0c0f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Get Started</div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Download zero-sql Free
            </h2>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">
              Get the standalone installer for Windows 10 & 11 (x64). Standalone executable with zero external runtime requirements.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#141720] border border-white/10 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left space-y-1">
                <div className="text-lg font-bold text-white flex items-center gap-2">
                  <span>zero-sql for Windows (x64)</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    v0.1.3
                  </span>
                </div>
                <div className="text-xs text-slate-400">
                  NSIS Installer • ~219 MB • Bundled Python 3.12 Core
                </div>
              </div>

              <Link
                href="/download"
                className="px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/20 transition-all hover:scale-[1.02]"
              >
                Download Installer (.exe)
              </Link>
            </div>

            <div className="pt-4 border-t border-white/5 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-3 font-mono">
              <span>SHA-256 Verified Release</span>
              <Link href="/download" className="text-emerald-400 hover:underline">
                View Checksums & SmartScreen Instructions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Categorized FAQ */}
      <section className="py-24 border-t border-white/5 bg-[#0d0e11]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">FAQ</div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-400">Everything you need to know about Zero-SQL.</p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            
            <div className="p-5 rounded-xl bg-[#141720] border border-white/5 space-y-2">
              <h3 className="font-bold text-white text-base">Does zero-sql require Python or Node.js on my computer?</h3>
              <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
                No. Zero-SQL compiles the complete Python 3.12 backend and all dependencies into a standalone executable using PyInstaller. It runs on clean Windows 10/11 machines with zero prerequisites installed.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#141720] border border-white/5 space-y-2">
              <h3 className="font-bold text-white text-base">Does zero-sql send my database rows to the cloud?</h3>
              <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
                Never. Query execution happens directly on your machine via direct loopback communication. Only column names and table DDL are sent for AI synthesis when you explicitly request SQL generation. No database passwords or row contents are ever transmitted.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#141720] border border-white/5 space-y-2">
              <h3 className="font-bold text-white text-base">Which databases are currently supported?</h3>
              <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
                Zero-SQL supports SQLite (.db), DuckDB (.duckdb), PostgreSQL, MySQL, Microsoft SQL Server (T-SQL), and queryable flat data files (.csv, .xlsx, and .json).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#141720] border border-white/5 space-y-2">
              <h3 className="font-bold text-white text-base">Why does Windows SmartScreen show a prompt during install?</h3>
              <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
                As an independent open-source project without a multi-thousand-dollar enterprise EV code signing certificate, new releases trigger SmartScreen until they accumulate trust. Simply click &ldquo;More info&rdquo; and &ldquo;Run anyway&rdquo;. You can verify the SHA-256 hash on our Download page.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Section 13: Creator Section & Footer */}
      <CreatorSection />
      <Footer />
    </div>
  );
}

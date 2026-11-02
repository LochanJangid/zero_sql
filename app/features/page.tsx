import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CreatorSection from '../../components/CreatorSection';
import { 
  Sparkles, 
  Terminal, 
  Database, 
  ShieldCheck, 
  Table, 
  Workflow, 
  FileSpreadsheet, 
  Download, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Lock, 
  EyeOff, 
  Clock, 
  Layers, 
  Activity,
  Sliders,
  Code2,
  HardDrive
} from 'lucide-react';

export const metadata = {
  title: 'Features — zero-sql Desktop Database Studio',
  description: 'Explore the full feature suite of zero-sql: Monaco editor, local schema RAG, multi-engine execution, virtualized data tables, and safety guardrails.',
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#0d0e11] text-slate-100 selection:bg-emerald-500/30 selection:text-white">
      <Navbar currentPath="/features" />

      {/* Header */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          Feature Capabilities
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Everything You Need to Query, Explore & Understand Your Data
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed">
          From conversational SQL generation to microsecond execution and virtualized table rendering, 
          Zero-SQL is packed with capabilities built specifically for developers and data professionals.
        </p>
      </section>

      {/* Feature Deep Dive 1: Monaco SQL Editor */}
      <section className="py-20 border-t border-white/5 bg-[#0e1016]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <Terminal className="w-3.5 h-3.5" />
              SQL Workspace
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Monaco Editor with Intelligent SQL Autocomplete
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Powered by the same industry-standard editor behind VS Code. Zero-SQL delivers instant syntax highlighting, 
              bracket matching, multi-tab execution, parameter binding, and formatted SQL.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Format on Run:</strong> Automatically beautifies queries on execution (<code className="text-emerald-300 font-mono text-xs">Ctrl+Enter</code>).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Dialect Precision:</strong> Native support for SQLite, PostgreSQL, DuckDB, MySQL, and Microsoft SQL Server T-SQL syntax.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Multi-Tab Sessions:</strong> Keep multiple query files open with automatic session persistence across restarts.</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#141720] border border-white/10 p-5 shadow-2xl font-mono text-xs space-y-3">
              <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[11px] text-slate-400">
                <span className="text-emerald-400 font-semibold">revenue_analysis.sql</span>
                <span>Monaco Engine • UTF-8</span>
              </div>
              <pre className="text-slate-300 leading-relaxed overflow-x-auto text-[11px]">
                <span className="text-emerald-400 font-bold">WITH</span> monthly_cohorts <span className="text-emerald-400 font-bold">AS</span> (<br />
                &nbsp;&nbsp;<span className="text-blue-400 font-bold">SELECT</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;date_trunc(<span className="text-amber-300">&apos;month&apos;</span>, created_at) <span className="text-emerald-400 font-bold">AS</span> signup_month,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;customer_id,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;SUM(total_amount) <span className="text-emerald-400 font-bold">AS</span> total_revenue<br />
                &nbsp;&nbsp;<span className="text-blue-400 font-bold">FROM</span> orders<br />
                &nbsp;&nbsp;<span className="text-blue-400 font-bold">WHERE</span> status = <span className="text-amber-300">&apos;paid&apos;</span><br />
                &nbsp;&nbsp;<span className="text-blue-400 font-bold">GROUP BY</span> 1, 2<br />
                )<br />
                <span className="text-blue-400 font-bold">SELECT</span> * <span className="text-blue-400 font-bold">FROM</span> monthly_cohorts <span className="text-blue-400 font-bold">LIMIT</span> 50;
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive 2: Natural Language to SQL RAG */}
      <section className="py-20 border-t border-white/5 bg-[#0b0c0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-2xl bg-[#141720] border border-white/10 p-6 shadow-2xl space-y-4">
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Natural Language Prompt:
                </div>
                <div className="text-xs text-white font-sans bg-white/5 p-2.5 rounded-lg border border-white/5">
                  &ldquo;Show me top 5 customer cohorts by retention with average spend above $500&rdquo;
                </div>
              </div>

              <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>RAG Synthesizer: 14 tables introspected • 42ms synthesis time</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0d0e12] border border-white/5 font-mono text-[11px] text-slate-300">
                <div className="text-slate-400 text-[10px] mb-1 font-sans">Synthesized Dialect-Specific Query:</div>
                <div className="text-emerald-300">
                  SELECT cohort, retention_rate, avg_spend<br />
                  FROM customer_metrics<br />
                  WHERE avg_spend &gt; 500<br />
                  ORDER BY retention_rate DESC LIMIT 5;
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Local AI Engine
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Schema-Aware Local RAG without Cloud Leakage
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Zero-SQL reads your database table schemas, primary keys, and foreign relationships directly on your machine. 
              When you ask a question, the local engine matches your query to exact column names and constructs valid SQL without training remote models on your data.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Embedded AI Engine:</strong> Works out-of-the-box with default high-throughput inference; no API keys forced on user.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Instant Query Repair:</strong> If a syntax error occurs, one click analyzes the database dialect error and suggests the correct SQL.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Natural Language Explanations:</strong> Break down complex legacy queries into plain English steps with the Explain Query button.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Feature Deep Dive 3: Flat Files as Databases */}
      <section className="py-20 border-t border-white/5 bg-[#0e1016]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
              <FileSpreadsheet className="w-3.5 h-3.5" />
              File Ingestion
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Query CSV, Excel & JSON Files as First-Class SQL Tables
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              No need to spin up a database server just to analyze a spreadsheet or log dump. 
              Drag and drop any <code className="text-amber-300 font-mono text-xs">.csv</code>, <code className="text-amber-300 font-mono text-xs">.xlsx</code>, or <code className="text-amber-300 font-mono text-xs">.json</code> file into Zero-SQL and query it instantly with complete SQL semantics.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Zero Server Setup:</strong> Auto-infers column data types and creates fast in-memory structures without database overhead.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Cross-Format Joins:</strong> Join a CSV export with an Excel budget sheet in a single SQL query.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Export Anywhere:</strong> Export results back to Excel (.xlsx) with formatting preserved or stream to CSV.</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#141720] border border-white/10 p-6 shadow-2xl space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/5">
                <FileSpreadsheet className="w-8 h-8 text-emerald-400" />
                <div>
                  <div className="text-xs font-bold text-white font-mono">q4_sales_report.xlsx</div>
                  <div className="text-[11px] text-slate-400">Sheet: &ldquo;Regional Data&rdquo; • 48,200 rows • 12 columns</div>
                </div>
              </div>
              <div className="p-3 bg-[#0d0e12] rounded-xl border border-white/5 font-mono text-[11px] text-slate-300">
                <div className="text-emerald-400 font-bold mb-1">-- SQL Query on Excel Spreadsheet:</div>
                SELECT region, SUM(revenue) AS total_rev<br />
                FROM &ldquo;q4_sales_report.xlsx&rdquo;<br />
                WHERE quarter = &apos;Q4&apos;<br />
                GROUP BY region ORDER BY total_rev DESC;
              </div>
              <div className="text-[11px] text-slate-400 font-mono text-right">
                Direct Memory Pipeline • Zero Database Required
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive 4: Virtualized Results Table & Screen-Share Mode */}
      <section className="py-20 border-t border-white/5 bg-[#0b0c0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-2xl bg-[#141720] border border-white/10 p-5 shadow-2xl space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[11px]">
                <span className="text-slate-300 font-semibold font-sans">Virtualized Table View</span>
                <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px]">
                  Screen-Share Mode Active
                </span>
              </div>
              <div className="space-y-1.5 text-[11px]">
                <div className="grid grid-cols-3 gap-2 bg-white/5 p-2 rounded text-slate-300 font-bold">
                  <span>Customer</span>
                  <span>Email</span>
                  <span className="text-right">Balance</span>
                </div>
                <div className="grid grid-cols-3 gap-2 p-2 rounded hover:bg-white/[0.03]">
                  <span>Alexander Wright</span>
                  <span className="filter blur-[3px] select-none text-slate-400">alex****@****.uk</span>
                  <span className="text-right text-emerald-400 font-semibold">$3,940.00</span>
                </div>
                <div className="grid grid-cols-3 gap-2 p-2 rounded hover:bg-white/[0.03]">
                  <span>Sophia Martinez</span>
                  <span className="filter blur-[3px] select-none text-slate-400">soph****@****.io</span>
                  <span className="text-right text-emerald-400 font-semibold">$4,820.50</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
              <Table className="w-3.5 h-3.5" />
              High Performance Data Grid
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              A Virtualized Table That Never Lags
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Built with TanStack Virtual to handle hundreds of thousands of rows without dropping a single frame. 
              Featuring inline cell inspection, JSON drawer previews, column sorting, and built-in privacy protection.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Screen-Share Privacy Mode:</strong> Automatically masks emails, tokens, and PII on screen during demos or livestreams.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Instant Column Sorting & Null Highlights:</strong> Visually distinguish between empty strings and actual database NULLs.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>One-Click JSON Formatter:</strong> Open complex nested JSON payloads in a structured lateral inspector.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6 border-t border-white/5">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Ready to Upgrade Your Database Workflow?
        </h2>
        <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-400">
          Get the standalone desktop installer for Windows. No Python, pip, or database servers required.
        </p>
        <div className="pt-2">
          <Link
            href="/download"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/20 transition-all hover:scale-[1.02]"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            Download zero-sql Free
          </Link>
        </div>
      </section>

      <CreatorSection />
      <Footer />
    </div>
  );
}

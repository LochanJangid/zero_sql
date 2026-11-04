'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Sparkles, 
  ShieldCheck, 
  BarChart2, 
  Workflow, 
  Layers, 
  Check, 
  ArrowRight,
  Database,
  Lock,
  Zap,
  HardDrive
} from 'lucide-react';

export default function FeatureStorytelling() {
  return (
    <section id="features" className="py-24 border-t border-white/[0.08] bg-[#0a0b0e] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-500/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineered for Modern Engineering Teams
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Every feature in zero-sql prioritizes local developer speed, complete schema transparency, and zero telemetry.
          </p>
        </div>

        {/* Feature 1: AI-Powered SQL (Natural Language to SQL) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI-Powered SQL</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              From Natural Language to SQL.
            </h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Describe what you want to retrieve, aggregate, or filter. Zero-SQL translates your natural intent into syntactically precise SQL queries while showing you the exact prompt context sent to the model.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>Schema-Aware Local RAG:</strong> Introspects table structures, primary keys, and foreign relationships automatically.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>100% Query Transparency:</strong> Inspect the full prompt tokens before execution. Never guess what the LLM received.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>Instant Clarification Popups:</strong> If a query request is ambiguous, a clean card pops up to confirm your intent before execution.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#12151e] border border-white/[0.1] shadow-2xl overflow-hidden group">
              <div className="h-9 px-4 bg-[#161a24] border-b border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400 select-none">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  <span className="ml-2 text-slate-300 font-semibold">Natural Language Query Synthesis</span>
                </div>
                <span className="text-emerald-400 text-[11px]">Real zero-sql screen</span>
              </div>
              <div className="relative aspect-[16/10] w-full bg-[#0a0b0e]">
                <Image
                  src="/screenshots/run_your_own_query_and_see_result.png"
                  alt="Natural Language to SQL in Zero-SQL"
                  fill
                  className="object-contain object-top group-hover:scale-[1.01] transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Local Execution & Absolute Privacy (Reversed) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="rounded-2xl bg-[#12151e] border border-white/[0.1] shadow-2xl overflow-hidden group">
              <div className="h-9 px-4 bg-[#161a24] border-b border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400 select-none">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  <span className="ml-2 text-slate-300 font-semibold">Safe Read-Only Guardrails</span>
                </div>
                <span className="text-emerald-400 text-[11px]">Production Safety</span>
              </div>
              <div className="relative aspect-[16/10] w-full bg-[#0a0b0e]">
                <Image
                  src="/screenshots/choose_modes_of_writing_or_only_reading.png"
                  alt="Safe Read-Only Mode and Zero Telemetry"
                  fill
                  className="object-contain object-top group-hover:scale-[1.01] transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono font-bold uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Zero Cloud Telemetry</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Local Execution. Absolute Privacy.
            </h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Your database credentials, schemas, and query records never leave your local workstation. Zero-SQL operates completely offline with standalone drivers and sandboxed execution.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>No Remote Telemetry:</strong> No tracking pixels, analytics beacons, or remote query logging.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>Safe Read-Only Guardrails:</strong> Protect production systems against accidental UPDATE, DELETE, or DROP operations.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>Air-Gapped Compatibility:</strong> Works seamlessly on air-gapped workstations and regulated defense/banking environments.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Visual Analytics & Real-Time Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-mono font-bold uppercase">
              <BarChart2 className="w-3.5 h-3.5" />
              <span>Visual Analytics</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Turn Rows of Numbers into Instant Visual Insights.
            </h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Skip exporting to external spreadsheets. Turn any query result set into glowing Area, Bar, Donut, and Line charts directly inside your query workspace.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <div className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>Automatic Statistical KPI Strip:</strong> Instant calculation of Total Sum, Mean/Average, Peak value & contributor %, and Minimums.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <div className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>Designer Palettes:</strong> Choose from Zero Neon, Ocean Tech, Emerald Matrix, or Sunset Glow palettes.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <div className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>High-Resolution PNG Export:</strong> Download 2x scaled charts ready for executive presentations and technical reports.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#12151e] border border-white/[0.1] shadow-2xl overflow-hidden group">
              <div className="h-9 px-4 bg-[#161a24] border-b border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400 select-none">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  <span className="ml-2 text-slate-300 font-semibold">Visual Analytics & KPI Strip</span>
                </div>
                <span className="text-purple-400 text-[11px]">Instant Charts</span>
              </div>
              <div className="relative aspect-[16/10] w-full bg-[#0a0b0e]">
                <Image
                  src="/screenshots/see_charts_on_your_data.png"
                  alt="Visual Charts on Query Data in Zero-SQL"
                  fill
                  className="object-contain object-top group-hover:scale-[1.01] transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Feature 4: Interactive Schema & ERD Architecture (Reversed) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="rounded-2xl bg-[#12151e] border border-white/[0.1] shadow-2xl overflow-hidden group">
              <div className="h-9 px-4 bg-[#161a24] border-b border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400 select-none">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  <span className="ml-2 text-slate-300 font-semibold">Interactive Entity Relationship Diagram</span>
                </div>
                <span className="text-amber-400 text-[11px]">Automated ERD</span>
              </div>
              <div className="relative aspect-[16/10] w-full bg-[#0a0b0e]">
                <Image
                  src="/screenshots/erd_diagram.png"
                  alt="Interactive ERD Diagram in Zero-SQL"
                  fill
                  className="object-contain object-top group-hover:scale-[1.01] transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono font-bold uppercase">
              <Workflow className="w-3.5 h-3.5" />
              <span>Visual Schema</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Map Your Relationships Without Leaving the Studio.
            </h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Understand foreign key constraints, table linkages, and index distributions across complex relational schemas with interactive visual graphs.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>Instant Graph Synthesis:</strong> Generated automatically from database catalogs without manual configuration.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>Relation Tracing:</strong> Hover over any primary key to highlight related foreign keys across parent and child tables.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>Zero Overhead:</strong> Cached locally for instantaneous navigation across multi-thousand column databases.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

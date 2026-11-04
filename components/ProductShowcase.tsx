'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Terminal, 
  Sparkles, 
  BarChart2, 
  Database, 
  Activity, 
  Workflow, 
  Maximize2, 
  Check, 
  ExternalLink,
  ChevronRight,
  Shield,
  Layers
} from 'lucide-react';

interface ShowcaseTab {
  id: string;
  name: string;
  badge: string;
  title: string;
  description: string;
  filename: string;
  highlights: string[];
}

const SHOWCASE_TABS: ShowcaseTab[] = [
  {
    id: 'editor',
    name: 'SQL Editor',
    badge: 'Pro Monaco Core',
    title: 'Monaco-Powered Editor with Colourful Queries & Instant Results',
    description: 'Write raw SQL or generated queries with intelligent auto-formatting. JOINs and WHERE clauses break onto separate lines with colourful syntax highlighting and responsive tabular output.',
    filename: 'run_your_own_query_and_see_result.png',
    highlights: [
      'Automatic clause formatting on clean new lines',
      'IntelliSense schema and table autocomplete',
      'Elapsed millisecond execution timer & row counters',
      'Export results directly to CSV or Excel (.xlsx)',
    ],
  },
  {
    id: 'ai-generation',
    name: 'AI Query Generation',
    badge: 'Local RAG Engine',
    title: 'From Natural Intent to Exact SQL with Full Prompt Transparency',
    description: 'Ask questions in conversational English. Zero-SQL matches your prompt against local table schemas and generates syntactically sound SQL without leaking table values to external clouds.',
    filename: 'inspect_prompt_or_schema.png',
    highlights: [
      'Schema DDL & foreign keys introspection',
      'Inspect exact prompt tokens before inference',
      'BYO-LLM support (Groq Llama 3.3, OpenAI, or local Ollama)',
      'Clarification popup cards for ambiguous requests',
    ],
  },
  {
    id: 'charts',
    name: 'Query Results & Charts',
    badge: 'Visual Analytics',
    title: 'Turn Data Rows into Glowing Charts & Statistical Summaries',
    description: 'Convert query results into glowing Bar, Area, Donut, and Line charts in one click. Instant KPI banner calculates Total Sum, Average, and Peak contributors automatically.',
    filename: 'see_charts_on_your_data.png',
    highlights: [
      'Automated statistical insights (Sum, Mean, Peak %)',
      'Multiple palettes: Zero Neon, Ocean Tech, Emerald Matrix',
      'Average benchmark reference lines & value sorting',
      'High-resolution PNG export for presentations',
    ],
  },
  {
    id: 'connections',
    name: 'Database Connections',
    badge: 'Universal Driver',
    title: 'One-Click Setup for PostgreSQL, MySQL, SQLite, and Files',
    description: 'Connect to existing production servers or open local database files in seconds. Connect via individual parameters or by pasting standard connection strings and URIs.',
    filename: 'choose_database_page.png',
    highlights: [
      'Native PostgreSQL (v12-16+), MySQL 8.x, and SQLite support',
      'Direct connection query / URI autofill support',
      'Read-only safety switch guards production records',
      'Drag-and-drop CSV, TSV, and XLSX spreadsheet querying',
    ],
  },
  {
    id: 'explain',
    name: 'Explain & Optimize',
    badge: 'Performance Studio',
    title: 'Visual Execution Plans & AI Query Cost Optimization',
    description: 'Identify slow queries before they hit production. Inspect index scans, estimated cost trees, and receive AI-suggested query rewrites with indexing tips.',
    filename: 'explain_query.png',
    highlights: [
      'Node-by-node plan tree and cost estimates',
      'Full table scan and sequential read warnings',
      'AI optimization assistant for faster execution',
      'Side-by-side SQL diff comparisons',
    ],
  },
  {
    id: 'erd',
    name: 'ERD Visualizer',
    badge: 'Schema Architecture',
    title: 'Interactive Entity Relationship Diagrams in Real-Time',
    description: 'Explore multi-table schemas visually. Zero-SQL maps primary keys to foreign keys, draws connected relation lines, and provides instant column type reference.',
    filename: 'erd_diagram.png',
    highlights: [
      'Draggable and zoomable schema canvas',
      'Foreign key edge tracing across tables',
      'Primary key and data type markers',
      'Direct navigation from ERD to query editor',
    ],
  },
];

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<ShowcaseTab>(SHOWCASE_TABS[0]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <section id="showcase" className="py-24 border-t border-white/[0.08] bg-[#0c0d12] relative overflow-hidden">
      {/* Background atmospheric gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-emerald-500/[0.08] via-blue-500/[0.04] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Product Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Everything You Need. One Intelligent Workspace.
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Designed for developer speed, schema transparency, and reliable execution. Switch between workflows below to see the actual desktop client in action.
          </p>
        </div>

        {/* Showcase Interactive Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#141722] rounded-2xl border border-white/[0.08] max-w-4xl mx-auto shadow-xl">
          {SHOWCASE_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab.id === tab.id
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20 font-bold scale-[1.02]'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Editorial Showcase Card */}
        <div className="rounded-3xl bg-[#12151e] border border-white/[0.1] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left / Info Column (4 cols) */}
          <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.08] bg-[#141722]/80 space-y-6">
            <div className="space-y-4">
              <span className="inline-block px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold tracking-wide uppercase">
                {activeTab.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                {activeTab.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeTab.description}
              </p>

              {/* Feature Highlights List */}
              <div className="space-y-2.5 pt-2">
                {activeTab.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="leading-tight">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
              <span className="text-slate-400 font-mono">Actual zero-sql desktop screen</span>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 cursor-pointer hover:underline"
              >
                <span>Enlarge</span>
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right / Screenshot Column (8 cols) */}
          <div className="lg:col-span-8 bg-[#0a0b0e] flex flex-col justify-center relative overflow-hidden group">
            {/* Window Chrome Title */}
            <div className="h-9 px-4 bg-[#141720] border-b border-white/[0.08] flex items-center justify-between select-none text-[11px] font-mono text-slate-400">
              <div className="flex items-center space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80" />
              </div>
              <span className="text-slate-300 font-semibold truncate max-w-xs">{activeTab.name} — zero-sql</span>
              <span className="text-slate-500">100% Native</span>
            </div>

            {/* Actual Screenshot */}
            <div 
              onClick={() => setIsLightboxOpen(true)}
              className="relative aspect-[16/10] w-full cursor-pointer overflow-hidden"
            >
              <Image
                src={`/screenshots/${activeTab.filename}`}
                alt={activeTab.title}
                fill
                className="object-contain object-top group-hover:scale-[1.01] transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <div className="px-4 py-2 rounded-xl bg-slate-900/90 text-white text-xs font-semibold flex items-center gap-2 border border-white/20 shadow-2xl backdrop-blur-md">
                  <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Click to Expand Full Resolution</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl max-h-[92vh] bg-[#12151e] border border-white/20 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
          >
            <div className="px-6 py-4 bg-[#161a24] border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase font-semibold">
                  {activeTab.badge}
                </span>
                <h3 className="text-lg font-bold text-white">{activeTab.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold cursor-pointer"
              >
                Close (ESC)
              </button>
            </div>

            <div className="relative flex-1 min-h-[400px] sm:min-h-[600px] bg-slate-950 p-2 sm:p-4 flex items-center justify-center">
              <div className="relative w-full h-[65vh] max-h-[750px]">
                <Image
                  src={`/screenshots/${activeTab.filename}`}
                  alt={activeTab.title}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </div>
            </div>

            <div className="px-6 py-3 bg-[#161a24] border-t border-white/10 text-xs text-slate-400 flex items-center justify-between">
              <span>{activeTab.description}</span>
              <a
                href={`/screenshots/${activeTab.filename}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline shrink-0 ml-4 font-semibold"
              >
                Open in new tab →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

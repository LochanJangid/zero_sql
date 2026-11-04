'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Sparkles, 
  Database, 
  BarChart2, 
  Code2, 
  Settings, 
  Workflow, 
  Maximize2, 
  X, 
  Check, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export interface ScreenshotItem {
  id: string;
  filename: string;
  title: string;
  category: 'starting' | 'editor' | 'charts' | 'schema' | 'customization';
  categoryLabel: string;
  badge: string;
  description: string;
  details: string[];
}

export const SCREENSHOTS: ScreenshotItem[] = [
  {
    id: 'choose-database',
    filename: 'choose_database_page.png',
    title: 'Choose Database Page',
    category: 'starting',
    categoryLabel: 'Starting & Setup',
    badge: 'Starting Screen',
    description: 'Clean, distraction-free entry point to connect MySQL, PostgreSQL, SQLite, or spreadsheet files with a single click.',
    details: ['One-click connection cards', 'Recent connection history with secure token isolation', 'Sample shop.db e-commerce database included'],
  },
  {
    id: 'run-query-results',
    filename: 'run_your_own_query_and_see_result.png',
    title: 'Run Your Own Query and See Result',
    category: 'editor',
    categoryLabel: 'SQL Editor & Querying',
    badge: 'Core IDE',
    description: 'Monaco-powered SQL editor with vivid syntax highlighting, auto-formatted clauses on new lines, and instant tabular results.',
    details: ['IntelliSense & schema autocomplete', 'Pagination up to 10,000+ rows', 'Execution timing and elapsed milliseconds'],
  },
  {
    id: 'see-charts',
    filename: 'see_charts_on_your_data.png',
    title: 'See Charts on Your Data',
    category: 'charts',
    categoryLabel: 'Visual Charts & Analytics',
    badge: 'Interactive Visuals',
    description: 'Turn SQL result sets into glowing Bar, Area, Donut, and Line charts with automated KPI statistical takeaways.',
    details: ['Total sum, average, and peak metrics', 'Zero Neon and Cyber color palettes', 'One-click high-res PNG export'],
  },
  {
    id: 'explain-query',
    filename: 'explain_query.png',
    title: 'Explain Query Execution Plan',
    category: 'editor',
    categoryLabel: 'SQL Editor & Querying',
    badge: 'Performance',
    description: 'Visual breakdown of query execution cost, scan types, joined indexes, and performance bottlenecks.',
    details: ['Node-by-node plan inspection', 'Full index scan warnings', 'Timing breakdown across execution phases'],
  },
  {
    id: 'optimize-query',
    filename: 'optimize_query.png',
    title: 'Optimize Query with AI',
    category: 'editor',
    categoryLabel: 'SQL Editor & Querying',
    badge: 'AI Acceleration',
    description: 'Local AI analyzes query semantics, suggesting faster rewrites, composite index recommendations, and cost reductions.',
    details: ['Side-by-side SQL diff view', 'Actionable indexing recommendations', 'One-click query replacement'],
  },
  {
    id: 'erd-diagram',
    filename: 'erd_diagram.png',
    title: 'Interactive ERD Diagram',
    category: 'schema',
    categoryLabel: 'Schema & Relationships',
    badge: 'Visual Schema',
    description: 'Automated entity-relationship diagram displaying tables, primary/foreign key relationships, and data types.',
    details: ['Zoomable, draggable canvas', 'Foreign key edge highlighting', 'Quick table schema inspector'],
  },
  {
    id: 'direct-file-select',
    filename: 'direct_data_file_selet_like_csv.png',
    title: 'Direct Data File Selection (CSV, TSV, XLSX)',
    category: 'starting',
    categoryLabel: 'Starting & Setup',
    badge: 'File Ingestion',
    description: 'Query spreadsheets and raw data files as SQL tables instantly without spinning up a database server.',
    details: ['Drag & drop CSV, TSV, XLSX, JSON', 'Automatic column type inference', 'Fast DuckDB/SQLite virtualization'],
  },
  {
    id: 'load-csv-database',
    filename: 'load_csv_into_database.png',
    title: 'Load CSV into Database',
    category: 'schema',
    categoryLabel: 'Schema & Relationships',
    badge: 'Data Pipeline',
    description: 'Import external datasets directly into existing tables with automatic type casting and schema validation.',
    details: ['Preview first 50 rows before import', 'Custom delimiter and header mapping', 'Batch insert transaction safety'],
  },
  {
    id: 'connect-postgresql',
    filename: 'connect_postgresql.png',
    title: 'Connect PostgreSQL Server',
    category: 'starting',
    categoryLabel: 'Starting & Setup',
    badge: 'Database Driver',
    description: 'Connect securely to local or cloud PostgreSQL databases (Neon, Supabase, AWS RDS, Railway) via host or URI.',
    details: ['SSL encryption parameters', 'Safe read-only toggle', 'Paste URI quick-fill feature'],
  },
  {
    id: 'connect-mysql',
    filename: 'connect_mysql.png',
    title: 'Connect MySQL Server',
    category: 'starting',
    categoryLabel: 'Starting & Setup',
    badge: 'Database Driver',
    description: 'Full compatibility with MySQL 8.x and MariaDB with lightning-fast metadata introspection.',
    details: ['Custom port support', 'Connection query URI autofill', 'Zero password caching on disk'],
  },
  {
    id: 'open-sqlite',
    filename: 'open_sqlite.png',
    title: 'Open SQLite Database File',
    category: 'starting',
    categoryLabel: 'Starting & Setup',
    badge: 'Embedded Database',
    description: 'Open, browse, and edit local SQLite databases, WAL files, and embedded application stores.',
    details: ['Native file picker integration', 'Read-only protection option', 'Instant table count and size report'],
  },
  {
    id: 'read-only-guardrails',
    filename: 'choose_modes_of_writing_or_only_reading.png',
    title: 'Choose Modes: Read-Only Guardrails',
    category: 'editor',
    categoryLabel: 'SQL Editor & Querying',
    badge: 'Safety & Control',
    description: 'Toggle between Safe Read-Only mode and Read-Write mode to prevent accidental UPDATE or DELETE statements.',
    details: ['Syntax-level write rejection', 'Transaction rollback safety', 'Guards against drop table disasters'],
  },
  {
    id: 'inspect-prompt',
    filename: 'inspect_prompt_or_schema.png',
    title: 'Inspect AI Prompt & Schema Context',
    category: 'customization',
    categoryLabel: 'AI & Customization',
    badge: 'Transparency',
    description: 'Complete transparency into the exact schema tokens and context sent to the AI synthesis engine.',
    details: ['Token count monitor', 'Selective table masking', 'Zero data value leakage'],
  },
  {
    id: 'set-own-llm',
    filename: 'set_your_own_llm.png',
    title: 'Set Your Own LLM Provider',
    category: 'customization',
    categoryLabel: 'AI & Customization',
    badge: 'BYO-Model',
    description: 'Connect Groq (Llama 3.3 70B, Qwen), OpenAI, or local offline LLMs running via Ollama/vLLM.',
    details: ['Fast inference with Groq Cloud', 'Custom API endpoint & base URL', '100% offline local model option'],
  },
  {
    id: 'set-own-rules',
    filename: 'set_your_own_rules.png',
    title: 'Set Your Own SQL Rules',
    category: 'customization',
    categoryLabel: 'AI & Customization',
    badge: 'Governance',
    description: 'Define custom dialect conventions, business glossary definitions, and required query filters.',
    details: ['Tenant filter enforcement', 'Column naming guidelines', 'Persistent rule manager'],
  },
  {
    id: 'change-theme',
    filename: 'change_theme_as_u_like.png',
    title: 'Change Theme As You Like',
    category: 'customization',
    categoryLabel: 'AI & Customization',
    badge: 'Personalization',
    description: 'Choose between Dark Studio, Cyber Neon, High Contrast, and Light appearance themes.',
    details: ['Accent color customizer', 'Editor font sizing', 'Custom zoom factor support'],
  },
];

export default function ScreenshotsShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedScreenshot, setSelectedScreenshot] = useState<ScreenshotItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Screenshots', count: SCREENSHOTS.length },
    { id: 'starting', label: 'Starting & Setup', count: SCREENSHOTS.filter(s => s.category === 'starting').length },
    { id: 'editor', label: 'SQL Editor & Querying', count: SCREENSHOTS.filter(s => s.category === 'editor').length },
    { id: 'charts', label: 'Charts & Analytics', count: SCREENSHOTS.filter(s => s.category === 'charts').length },
    { id: 'schema', label: 'Schema & ERD', count: SCREENSHOTS.filter(s => s.category === 'schema').length },
    { id: 'customization', label: 'AI & Settings', count: SCREENSHOTS.filter(s => s.category === 'customization').length },
  ];

  const filteredScreenshots = activeCategory === 'all'
    ? SCREENSHOTS
    : SCREENSHOTS.filter(s => s.category === activeCategory);

  return (
    <section id="screenshots" className="py-24 border-t border-white/5 bg-[#0a0b0e] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Visual Tour</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            See the App Before You Download
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Every feature in zero-sql is designed for speed, safety, and visual clarity. 
            Explore actual desktop screenshots of every inner workflow.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 scale-105'
                  : 'bg-[#141720] hover:bg-[#1b202c] text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                activeCategory === cat.id ? 'bg-slate-950/20 text-slate-950' : 'bg-white/10 text-slate-300'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Screenshot Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filteredScreenshots.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedScreenshot(item)}
              className="group rounded-2xl bg-[#12151e] border border-white/10 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 border-b border-white/10">
                <Image
                  src={`/screenshots/${item.filename}`}
                  alt={item.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md text-[11px] font-mono text-emerald-400 border border-white/10 shadow-sm font-semibold">
                    {item.badge}
                  </span>
                </div>

                {/* Hover Quick Zoom Icon */}
                <div className="absolute inset-0 bg-emerald-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-3.5 py-2 rounded-xl bg-slate-900/90 text-white text-xs font-semibold flex items-center gap-2 border border-white/20 shadow-2xl backdrop-blur-md">
                    <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Click to Expand</span>
                  </div>
                </div>
              </div>

              {/* Text Context */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono text-emerald-400/90 uppercase tracking-wider font-semibold">
                    {item.categoryLabel}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-2 border-t border-white/5 space-y-1">
                  {item.details.slice(0, 2).map((det, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                      <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="truncate">{det}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal on Screenshot Click */}
      {selectedScreenshot && (
        <div 
          onClick={() => setSelectedScreenshot(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl max-h-[92vh] bg-[#12151e] border border-white/20 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-[#161a24] border-b border-white/10 flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    {selectedScreenshot.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {selectedScreenshot.categoryLabel}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {selectedScreenshot.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedScreenshot(null)}
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Close preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[500px] bg-slate-950 overflow-auto p-2 sm:p-4 flex items-center justify-center">
              <div className="relative w-full h-[60vh] max-h-[700px]">
                <Image
                  src={`/screenshots/${selectedScreenshot.filename}`}
                  alt={selectedScreenshot.title}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </div>
            </div>

            {/* Modal Footer Description */}
            <div className="px-6 py-4 bg-[#161a24] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                {selectedScreenshot.description}
              </p>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`/screenshots/${selectedScreenshot.filename}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>Open Full Size</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

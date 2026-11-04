'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Sparkles, 
  Database, 
  BarChart2, 
  Workflow, 
  Terminal, 
  Maximize2,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const HERO_TABS = [
  {
    id: 'choose-database',
    label: 'Choose Database Page',
    badge: 'Starting Screen',
    filename: 'choose_database_page.png',
    caption: 'Connect MySQL, PostgreSQL, SQLite, or spreadsheet files with safe defaults & instant access.',
  },
  {
    id: 'run-query',
    label: 'Run Query & See Result',
    badge: 'SQL Editor',
    filename: 'run_your_own_query_and_see_result.png',
    caption: 'Monaco SQL editor with colourful query highlighting, newline clauses, and live results grid.',
  },
  {
    id: 'see-charts',
    label: 'See Charts on Your Data',
    badge: 'Visual Analytics',
    filename: 'see_charts_on_your_data.png',
    caption: 'Convert result sets into glowing Bar, Area, and Donut charts with automated KPI statistical takeaways.',
  },
  {
    id: 'erd-diagram',
    label: 'Interactive ERD Diagram',
    badge: 'Schema Architecture',
    filename: 'erd_diagram.png',
    caption: 'Visual relationship diagrams connecting primary keys, foreign keys, and column data types.',
  },
];

export default function HeroScreenshotViewer() {
  const [activeTab, setActiveTab] = useState(HERO_TABS[0]);

  return (
    <div className="w-full max-w-6xl mx-auto space-y-4">
      {/* Tab Switcher */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#141720]/80 backdrop-blur-md rounded-2xl border border-white/10 max-w-3xl mx-auto shadow-xl">
        {HERO_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab.id === tab.id
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/25 scale-[1.02]'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Screenshot Frame with Window Chrome */}
      <div className="relative rounded-2xl bg-[#12151e] border border-white/15 shadow-2xl shadow-emerald-500/10 overflow-hidden group">
        {/* Top Window Bar */}
        <div className="h-10 px-4 bg-[#181c28] border-b border-white/10 flex items-center justify-between select-none">
          {/* Mac-style Window Controls */}
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>

          {/* Window Title with Context */}
          <div className="flex items-center space-x-2 text-xs font-mono text-slate-300">
            <span className="text-emerald-400 font-semibold">{activeTab.badge}</span>
            <span className="text-slate-500">•</span>
            <span className="truncate max-w-[280px] sm:max-w-md">{activeTab.label}</span>
          </div>

          <div className="text-[11px] font-mono text-slate-400 hidden sm:block">
            100% Offline Desktop Client
          </div>
        </div>

        {/* Screenshot Image Container */}
        <div className="relative aspect-[16/10] w-full bg-[#0d0e12] overflow-hidden">
          <Image
            src={`/screenshots/${activeTab.filename}`}
            alt={activeTab.label}
            fill
            className="object-contain object-top group-hover:scale-[1.01] transition-transform duration-500"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>

        {/* Caption Bar */}
        <div className="px-5 py-3 bg-[#141722] border-t border-white/10 flex items-center justify-between text-xs text-slate-300 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{activeTab.caption}</span>
          </div>

          <a
            href={`/screenshots/${activeTab.filename}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 hover:underline ml-auto"
          >
            <span>View Full Size</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}

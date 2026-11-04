'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Download, 
  Sparkles, 
  ShieldCheck, 
  Database, 
  ArrowRight, 
  Check, 
  Layers, 
  Terminal, 
  Maximize2,
  HardDrive
} from 'lucide-react';

export default function HeroSection() {
  const [activeHeroView, setActiveHeroView] = useState<'editor' | 'database'>('editor');

  return (
    <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-emerald-500/[0.12] via-teal-500/[0.04] to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-blue-500/[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-8 max-w-5xl mx-auto text-center">
        
        {/* 1. Announcement Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#141720] border border-white/[0.09] text-xs font-semibold text-slate-300 shadow-xl shadow-black/40 hover:border-emerald-500/40 transition-colors">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-emerald-400 font-bold uppercase tracking-wider text-[11px]">Privacy Guaranteed</span>
          <span className="text-slate-600">•</span>
          <span>Your Data. Your Machine. Zero Cloud Telemetry.</span>
        </div>

        {/* 2. Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] max-w-4xl mx-auto">
          Your Data Stays Yours. <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            Your SQL Gets Smarter.
          </span>
        </h1>

        {/* 3. Supporting Description */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
          Query PostgreSQL, MySQL, SQLite, DuckDB and Parquet using plain English. A powerful desktop database studio designed around local execution, privacy and control.
        </p>

        {/* 4. Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/download"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm sm:text-base shadow-2xl shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-5 h-5 stroke-[2.5] group-hover:-translate-y-0.5 transition-transform" />
            <span>Download for Windows</span>
          </Link>

          <a
            href="#showcase"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#141720] hover:bg-[#1b202c] text-white font-semibold text-sm sm:text-base border border-white/[0.09] hover:border-white/[0.18] transition-all"
          >
            <span>Explore Zero-SQL</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </a>
        </div>

        {/* 5. Verified Release Meta */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Verified Release v0.1.4</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>~280MB Standalone Installer</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span>Zero Host Node/Python Required</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>100% Offline-Ready</span>
          </div>
        </div>

        {/* 6. Central Hero Visual Composition */}
        <div className="pt-8 relative max-w-6xl mx-auto">
          {/* Subtle View Switcher Tabs on top of screenshot */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="inline-flex items-center p-1 rounded-xl bg-[#131620] border border-white/[0.08] shadow-lg">
              <button
                type="button"
                onClick={() => setActiveHeroView('editor')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeHeroView === 'editor'
                    ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>SQL Editor & Results</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveHeroView('database')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeHeroView === 'database'
                    ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Database className="w-3.5 h-3.5" />
                <span>Database Picker Screen</span>
              </button>
            </div>
          </div>

          {/* Window Chrome & Real Screenshot */}
          <div className="relative rounded-2xl bg-[#0f1118] border border-white/[0.12] shadow-[0_35px_120px_-20px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.08)] overflow-hidden group">
            {/* Title Bar */}
            <div className="h-11 px-4 bg-[#141722] border-b border-white/[0.08] flex items-center justify-between select-none">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]/90 border border-black/20" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/90 border border-black/20" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]/90 border border-black/20" />
              </div>

              <div className="flex items-center space-x-2 text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-semibold text-white">
                  {activeHeroView === 'editor' ? 'zero-sql — shop.db (SQLite) • Safe Read-Only' : 'zero-sql — Choose Your Database'}
                </span>
                <span className="text-slate-500 hidden sm:inline">•</span>
                <span className="text-slate-400 hidden sm:inline">Local RAG Synthesis Active</span>
              </div>

              <div className="text-[11px] font-mono text-emerald-400/90 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 hidden sm:block">
                contextIsolation ON
              </div>
            </div>

            {/* Central Real Screenshot */}
            <div className="relative aspect-[16/10] w-full bg-[#0a0b0e] overflow-hidden">
              <Image
                src={activeHeroView === 'editor' ? '/screenshots/run_your_own_query_and_see_result.png' : '/screenshots/choose_database_page.png'}
                alt={activeHeroView === 'editor' ? 'Zero-SQL Core Query Editor and Live Results' : 'Zero-SQL Database Picker Screen'}
                fill
                priority
                className="object-contain object-top group-hover:scale-[1.01] transition-transform duration-500"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>

            {/* Bottom Caption Bar */}
            <div className="px-5 py-3 bg-[#11131c] border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2 font-mono">
                <span className="text-emerald-400 font-bold">Screenshot:</span>
                <span>{activeHeroView === 'editor' ? 'Monaco Editor with newline SQL formatting & instant data table' : 'Universal connection cards with recent history and sample store'}</span>
              </div>
              <a
                href={activeHeroView === 'editor' ? '/screenshots/run_your_own_query_and_see_result.png' : '/screenshots/choose_database_page.png'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 hover:underline"
              >
                <span>Inspect Full 4K</span>
                <Maximize2 className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

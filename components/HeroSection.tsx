'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { 
  Download, 
  Sparkles, 
  ShieldCheck, 
  Database, 
  ArrowRight, 
  Check, 
  Terminal, 
  Play, 
  Pause,
  Maximize2,
  CheckCircle2,
  Lock,
  Cpu,
  Layers,
  Zap
} from 'lucide-react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[350px] bg-gradient-to-b from-emerald-500/[0.12] via-teal-500/[0.04] to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[500px] h-[300px] bg-blue-500/[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Column: Punchy Headline, Value Props & CTAs */}
        <div className="lg:col-span-6 space-y-6 text-left">
          
          {/* Announcement Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#141722]/90 border border-white/[0.1] text-xs font-semibold text-slate-300 shadow-xl shadow-black/50 hover:border-emerald-500/40 transition-colors">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-emerald-400 font-bold uppercase tracking-wider text-[11px]">v0.1.5 Stable</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300">Privacy Guaranteed • Zero Telemetry</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            Your Data Stays Yours. <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Your SQL Gets Smarter.
            </span>
          </h1>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal max-w-xl">
            Query PostgreSQL, MySQL, SQLite, DuckDB, and Parquet using plain English. A powerful desktop database studio designed around 100% local execution, privacy, and control.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Link
              href="/download"
              className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm sm:text-base shadow-xl shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-5 h-5 stroke-[2.5] group-hover:-translate-y-0.5 transition-transform" />
              <span>Download for Windows (v0.1.5)</span>
            </Link>

            <a
              href="#showcase"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#141722] hover:bg-[#1b202c] text-white font-semibold text-sm sm:text-base border border-white/[0.09] hover:border-white/[0.18] transition-all"
            >
              <span>Explore Features</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Feature Badges Grid */}
          <div className="pt-3 grid grid-cols-2 gap-3 max-w-lg text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#12151e]/80 border border-white/[0.06]">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Local Execution Only</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#12151e]/80 border border-white/[0.06]">
              <Database className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Postgres • MySQL • SQLite</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#12151e]/80 border border-white/[0.06]">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              <span>~280MB Lightweight App</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#12151e]/80 border border-white/[0.06]">
              <Lock className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Zero Cloud Leakage</span>
            </div>
          </div>

        </div>

        {/* Right Column: High-End Video Showcase Card */}
        <div className="lg:col-span-6 relative">
          
          {/* Subtle Glow Backdrop */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-teal-500/10 to-blue-500/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 -z-10" />

          {/* Card Window Container */}
          <div className="relative rounded-2xl bg-[#0f1118] border border-white/[0.14] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.06)] overflow-hidden group">
            
            {/* macOS Chrome Header */}
            <div className="h-10 px-4 bg-[#141722] border-b border-white/[0.08] flex items-center justify-between select-none">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]/90 border border-black/20" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/90 border border-black/20" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]/90 border border-black/20" />
              </div>

              <div className="flex items-center space-x-2 text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-white truncate max-w-[200px] sm:max-w-xs">
                  zero-sql-intro.mp4
                </span>
                <span className="text-slate-500 hidden sm:inline">•</span>
                <span className="text-emerald-400 font-mono text-[11px] hidden sm:inline">
                  Interactive Preview
                </span>
              </div>

              <button
                type="button"
                onClick={togglePlay}
                className="text-[11px] font-mono text-emerald-400/90 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1 transition-colors cursor-pointer"
                title={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </button>
            </div>

            {/* Video Player Frame with Click-to-Toggle Pause/Play */}
            <div 
              className="relative aspect-video w-full bg-[#07080b] overflow-hidden cursor-pointer flex items-center justify-center select-none"
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                src="/zero-sql-intro.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Centered Large Play Button Overlay (when paused) */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex items-center justify-center transition-all animate-in fade-in duration-200">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-2xl shadow-emerald-500/60 hover:scale-105 transition-transform">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-slate-950 ml-1" />
                  </div>
                </div>
              )}

              {/* Floating Pill: Bottom Left Status */}
              <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-slate-300 text-[11px] font-mono flex items-center gap-2 pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Product Walkthrough</span>
              </div>

              {/* Floating Pill: Bottom Right Pause/Play Button */}
              <div className="absolute bottom-3 right-3">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                  className="px-3 py-1 rounded-lg bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/10 text-white text-[11px] font-mono flex items-center gap-1.5 transition-all shadow-lg cursor-pointer"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                      <span>Play</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Bottom Caption Bar */}
            <div className="px-4 py-2.5 bg-[#11131c] border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2 font-mono text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">Click anywhere on video to pause or resume playback</span>
              </div>
              <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
                Looping Preview
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

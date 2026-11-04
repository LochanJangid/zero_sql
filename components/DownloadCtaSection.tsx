'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Download, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  HardDrive, 
  ArrowRight,
  Terminal,
  FileCheck2
} from 'lucide-react';

export default function DownloadCtaSection() {
  return (
    <section className="py-24 border-t border-white/[0.08] bg-[#090a0d] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-gradient-to-tr from-emerald-500/[0.12] via-teal-500/[0.05] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for Smarter SQL?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Take Control of Your Databases. <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Zero Telemetry Guaranteed.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Download the standalone desktop application today. No accounts, no subscriptions, and zero cloud lock-in.
          </p>
        </div>

        {/* Action Button & Checksum Link */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/download"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm sm:text-base shadow-2xl shadow-emerald-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-5 h-5 stroke-[2.5] group-hover:-translate-y-0.5 transition-transform" />
            <span>Download for Windows (v0.1.5)</span>
          </Link>

          <Link
            href="/docs"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#141722] hover:bg-[#1a1f2e] text-white font-semibold text-sm sm:text-base border border-white/[0.09] transition-all"
          >
            <span>Read Documentation</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </Link>
        </div>

        {/* Hardware & Spec Badges */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Windows 10 / 11 (64-bit)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Standalone Installer (~280MB)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Zero Runtime Dependencies</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Cryptographic SHA-256 Verified</span>
          </div>
        </div>

      </div>
    </section>
  );
}

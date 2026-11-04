'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  FileCheck2, 
  Copy, 
  Check, 
  Terminal, 
  AlertTriangle,
  EyeOff,
  Server
} from 'lucide-react';

const SHA256_V14 = '2fd29270fa3548aa3877f9bf9ea87ce130b8abb7b3f749dfe998763b74787ab6';

export default function SecuritySection() {
  const [copiedHash, setCopiedHash] = useState(false);
  const [copiedCmd, setCopiedCmd] = useState(false);

  const copyHash = () => {
    navigator.clipboard.writeText(SHA256_V14);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  const copyCmd = () => {
    navigator.clipboard.writeText('Get-FileHash .\\zero-sql-Setup.exe -Algorithm SHA256');
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <section id="security" className="py-24 border-t border-white/[0.08] bg-[#0a0b0e] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Security & Compliance</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Security by Architecture, Not by Policy
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Engineered so that even if we wanted to see your database records, our architecture makes it technically impossible.
          </p>
        </div>

        {/* Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-2xl bg-[#12151e] border border-white/[0.08] hover:border-emerald-500/30 transition-all space-y-3.5 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Local-First Storage</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Database connection credentials and local cache remain encrypted strictly on your local disk using native OS APIs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#12151e] border border-white/[0.08] hover:border-blue-500/30 transition-all space-y-3.5 group">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
              <EyeOff className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Screen-Share Shield</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              One-click privacy shield automatically masks sensitive emails, passwords, and tokens during demos and pair programming.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#12151e] border border-white/[0.08] hover:border-purple-500/30 transition-all space-y-3.5 group">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Safe Read-Only Guard</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Hardware and syntax-level locks prevent accidental mutation queries from executing against production replicas.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#12151e] border border-white/[0.08] hover:border-amber-500/30 transition-all space-y-3.5 group">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Verified Checksums</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Every Windows binary release publishes a cryptographic SHA-256 hash so enterprise IT teams can verify binary integrity.
            </p>
          </div>

        </div>

        {/* Checksum Verification Box */}
        <div className="rounded-2xl bg-[#141722] border border-white/[0.1] p-6 sm:p-8 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase font-semibold">Binary Cryptographic Hash</span>
              <h3 className="text-base sm:text-lg font-bold text-white">Windows Release v0.1.4 (SHA-256 Digest)</h3>
            </div>
            <button
              type="button"
              onClick={copyHash}
              className="px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto"
            >
              {copiedHash ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedHash ? 'Hash Copied!' : 'Copy SHA-256'}</span>
            </button>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0d0e13] border border-white/[0.08] font-mono text-xs text-slate-300 break-all select-all">
            {SHA256_V14}
          </div>

          {/* PowerShell verification snippet */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-white/[0.05] text-xs text-slate-400">
            <div className="flex items-center gap-2 font-mono">
              <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Verify in PowerShell: <code className="text-slate-300">Get-FileHash .\zero-sql-Setup.exe -Algorithm SHA256</code></span>
            </div>
            <button
              type="button"
              onClick={copyCmd}
              className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 cursor-pointer hover:underline text-xs"
            >
              {copiedCmd ? 'Command Copied!' : 'Copy Command'}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

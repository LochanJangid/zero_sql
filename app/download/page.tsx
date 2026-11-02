'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CreatorSection from '../../components/CreatorSection';
import { 
  Download, 
  ShieldCheck, 
  CheckCircle2, 
  Copy, 
  Check, 
  Terminal, 
  HardDrive, 
  ExternalLink,
  AlertCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

const FALLBACK_DOWNLOAD_URL = 'https://github.com/LochanJangid/zero_sql/releases/download/v0.1.3/zero-sql-Setup-0.1.3-x64.exe';
const FALLBACK_V12_DOWNLOAD_URL = 'https://github.com/LochanJangid/zero_sql/releases/download/v0.1.2/zero-sql-Setup-0.1.2-x64.exe';
const SHA256_HASH_V12 = 'c5c672bcf077ce1091a51c6e11b3a7e485a71903e6354fbb0c4c67a73e638b5e';

export default function DownloadPage() {
  const [downloadUrl, setDownloadUrl] = useState(FALLBACK_DOWNLOAD_URL);
  const [version, setVersion] = useState('0.1.3');
  const [copiedHash, setCopiedHash] = useState(false);
  const [copiedPs, setCopiedPs] = useState(false);

  useEffect(() => {
    // Attempt dynamic fetch from GitHub releases API
    fetch('https://api.github.com/repos/LochanJangid/zero_sql/releases/latest')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.assets && data.assets.length > 0) {
          const exeAsset = data.assets.find((a: any) => a.name.endsWith('.exe'));
          if (exeAsset) {
            setDownloadUrl(exeAsset.browser_download_url);
            setVersion(data.tag_name.replace('v', ''));
          }
        }
      })
      .catch(() => {
        // Fallback already set
      });
  }, []);

  const copyHash = () => {
    navigator.clipboard.writeText(SHA256_HASH_V12);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  const copyPsCommand = () => {
    navigator.clipboard.writeText('Get-FileHash .\\zero-sql-Setup-*.exe -Algorithm SHA256');
    setCopiedPs(true);
    setTimeout(() => setCopiedPs(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0d0e11] text-slate-100 selection:bg-emerald-500/30 selection:text-white">
      <Navbar currentPath="/download" />

      {/* Header */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
          <Download className="w-3.5 h-3.5" />
          Official Distribution
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Download zero-sql for Windows
        </h1>

        <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-400 leading-relaxed">
          Standalone desktop installer. Includes frozen Python backend with zero host dependencies.
        </p>
      </section>

      {/* Main Download Card */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="rounded-2xl bg-[#141720] border border-white/10 p-8 sm:p-12 shadow-2xl shadow-black/80 space-y-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-2xl font-bold text-white">Windows 10 / 11 (64-bit)</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  v{version}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                NSIS Installer with automated differential updates • ~219 MB • x64 Architecture
              </p>
            </div>

            <div className="flex flex-col items-center gap-2 w-full md:w-auto">
              <a
                href={downloadUrl}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base shadow-xl shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-5 h-5 stroke-[2.5]" />
                <span>Download Installer (.exe)</span>
              </a>
              <span className="text-[11px] font-mono text-slate-400">
                100% Free & Open Source under ISC License
              </span>
            </div>
          </div>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-slate-400 block font-medium">Host Requirements:</span>
              <span className="text-white font-semibold">Zero Python or Node needed</span>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-slate-400 block font-medium">Supported Platforms:</span>
              <span className="text-white font-semibold">Windows 10 / 11 (x64)</span>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-slate-400 block font-medium">Auto-Updates:</span>
              <span className="text-white font-semibold">Differential in-app updater</span>
            </div>
          </div>

          {/* Verification & Checksum Hub */}
          <div className="p-6 rounded-xl bg-black/50 border border-white/5 space-y-4 text-xs font-mono">
            <div className="flex items-center justify-between text-slate-300">
              <span className="font-semibold text-white font-sans flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Cryptographic Integrity & SHA-256 Digest
              </span>
              <button
                onClick={copyHash}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              >
                {copiedHash ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedHash ? 'Copied' : 'Copy Hash'}</span>
              </button>
            </div>

            <div className="p-3 bg-[#0d0e12] rounded-lg text-emerald-400 break-all select-all text-[11px]">
              {SHA256_HASH_V12}
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-slate-400 font-sans text-[11px]">Verify via PowerShell:</span>
              <button
                onClick={copyPsCommand}
                className="text-slate-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1 text-[11px]"
              >
                {copiedPs ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedPs ? 'Command Copied' : 'Copy PowerShell Command'}</span>
              </button>
            </div>
          </div>

          {/* Windows SmartScreen Guide */}
          <div className="p-6 rounded-xl bg-amber-500/5 border border-amber-500/20 space-y-3 text-xs text-slate-300">
            <div className="flex items-center gap-2 font-bold text-amber-300">
              <AlertCircle className="w-4 h-4" />
              <span>Windows SmartScreen Note</span>
            </div>
            <p className="leading-relaxed">
              If Windows displays a blue &ldquo;Windows protected your PC&rdquo; message, this is expected for newly published open-source releases that have not accumulated commercial reputation.
            </p>
            <div className="space-y-1.5 pl-4 border-l-2 border-amber-400 font-sans">
              <div>1. Click <strong className="text-white">&ldquo;More info&rdquo;</strong></div>
              <div>2. Click <strong className="text-white">&ldquo;Run anyway&rdquo;</strong></div>
            </div>
          </div>

        </div>
      </section>

      {/* Release Links */}
      <section className="py-12 text-center text-xs text-slate-400 space-y-2">
        <div>
          Looking for older versions or source tarballs? Visit the{' '}
          <a
            href="https://github.com/LochanJangid/zero_sql/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline inline-flex items-center gap-1"
          >
            GitHub Releases Page <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </section>

      <CreatorSection />
      <Footer />
    </div>
  );
}

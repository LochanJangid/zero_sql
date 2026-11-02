'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Download,
  ShieldAlert,
  ShieldCheck,
  Terminal,
  Database,
  Sparkles,
  Zap,
  Cpu,
  Github,
  ChevronDown,
  ExternalLink,
  Check,
  Layers,
  ArrowRight
} from 'lucide-react';

interface ReleaseAsset {
  name: string;
  browser_download_url: string;
  size: number;
}

interface ReleaseData {
  tag_name: string;
  name: string;
  published_at: string;
  body: string;
  html_url: string;
  assets: ReleaseAsset[];
}

const FALLBACK_RELEASES_URL = 'https://github.com/LochanJangid/zero_sql/releases';
const FALLBACK_REPO_URL = 'https://github.com/LochanJangid/zero_sql';
const CACHE_KEY = 'zerosql_latest_release_v1';
const CACHE_EXPIRY_MS = 15 * 60 * 1000; // 15 minutes cache

export default function Home() {
  const [release, setRelease] = useState<ReleaseData | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string>(FALLBACK_RELEASES_URL);
  const [arm64Url, setArm64Url] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [version, setVersion] = useState<string>('Latest');

  useEffect(() => {
    async function fetchRelease() {
      // 1. Check sessionStorage cache to prevent hitting GitHub 60 req/hr rate limits
      try {
        const cachedRaw = sessionStorage.getItem(CACHE_KEY);
        if (cachedRaw) {
          const cached = JSON.parse(cachedRaw);
          if (Date.now() - cached.timestamp < CACHE_EXPIRY_MS) {
            applyReleaseData(cached.data);
            setLoading(false);
            return;
          }
        }
      } catch {}

      // 2. Fetch latest release from GitHub API
      try {
        const res = await fetch('https://api.github.com/repos/LochanJangid/zero_sql/releases/latest');
        if (!res.ok) {
          throw new Error(`GitHub API returned status ${res.status}`);
        }
        const data: ReleaseData = await res.json();
        
        // Cache in sessionStorage
        try {
          sessionStorage.setItem(
            CACHE_KEY,
            JSON.stringify({
              timestamp: Date.now(),
              data,
            })
          );
        } catch {}

        applyReleaseData(data);
      } catch (err) {
        console.warn('Could not fetch latest release info, falling back to releases page:', err);
        setDownloadUrl(FALLBACK_RELEASES_URL);
      } finally {
        setLoading(false);
      }
    }

    fetchRelease();
  }, []);

  function applyReleaseData(data: ReleaseData) {
    setRelease(data);
    setVersion(data.tag_name || 'Latest');

    if (data.assets && Array.isArray(data.assets)) {
      // Find x64 and arm64 Windows executables
      const x64Asset = data.assets.find(
        (a) => a.name.endsWith('.exe') && (a.name.includes('x64') || !a.name.includes('arm64'))
      );
      const armAsset = data.assets.find(
        (a) => a.name.endsWith('.exe') && a.name.includes('arm64')
      );
      const anyExe = data.assets.find((a) => a.name.endsWith('.exe'));

      if (x64Asset) {
        setDownloadUrl(x64Asset.browser_download_url);
      } else if (anyExe) {
        setDownloadUrl(anyExe.browser_download_url);
      } else {
        setDownloadUrl(data.html_url || FALLBACK_RELEASES_URL);
      }

      if (armAsset) {
        setArm64Url(armAsset.browser_download_url);
      }
    }
  }

  return (
    <div className="flex flex-col min-h-screen selection:bg-[#c4f20f] selection:text-[#0e1702]">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0d0e11]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/logo-full.png"
              alt="zero-sql"
              width={140}
              height={32}
              priority
              className="h-8 w-auto object-contain"
            />
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-mono font-medium bg-[#1a1d24] text-[#c4f20f] border border-white/10">
              {version}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="#smartscreen"
              className="text-xs text-neutral-400 hover:text-white transition-colors hidden md:inline-block"
            >
              Windows Install Notice
            </a>
            <a
              href={FALLBACK_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-xs text-neutral-300 hover:text-white px-3 py-1.5 rounded-lg bg-[#1a1d24] border border-white/10 hover:border-white/20 transition-all"
            >
              <Github size={14} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative pt-20 pb-16 px-6 overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#c4f20f]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#16181d] border border-white/10 text-xs text-neutral-300">
              <Sparkles size={13} className="text-[#c4f20f]" />
              <span>Offline-First Desktop SQL Client with Local AI</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Query Databases at the <br />
              <span className="bg-gradient-to-r from-white via-neutral-200 to-[#c4f20f] bg-clip-text text-transparent">
                Speed of Thought.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              zero-sql is a lightweight, privacy-focused desktop client for SQLite, PostgreSQL, MySQL, DuckDB, and SQL Server with local schema synthesis. No accounts, no cloud dependencies.
            </p>

            {/* Download CTA Group */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={downloadUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-3.5 rounded-xl font-semibold text-sm bg-[#c4f20f] text-[#0e1702] hover:brightness-110 active:brightness-95 transition-all shadow-lg shadow-[#c4f20f]/15"
              >
                <Download size={18} />
                <span>Download for Windows (x64)</span>
              </a>

              {arm64Url && (
                <a
                  href={arm64Url}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl text-xs font-medium text-neutral-300 bg-[#16181d] border border-white/10 hover:border-white/20 hover:text-white transition-all"
                >
                  <Cpu size={15} />
                  <span>ARM64 (.exe)</span>
                </a>
              )}
            </div>

            {/* Version and System Specs Pill */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-500 pt-2 font-mono">
              <span>Version: {version}</span>
              <span>•</span>
              <span>Windows 10 / 11 (64-bit)</span>
              <span>•</span>
              <span>No Admin Rights Needed (Per-User)</span>
            </div>
          </div>
        </section>

        {/* SmartScreen Guidance Section */}
        <section id="smartscreen" className="max-w-3xl mx-auto px-6 py-8">
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 backdrop-blur-sm space-y-3">
            <div className="flex items-center space-x-2.5 text-amber-400 text-sm font-semibold">
              <ShieldAlert size={18} />
              <h2>First Time Installing on Windows?</h2>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Because zero-sql is an open-source project and newly released, Windows SmartScreen may show a prompt saying <em className="text-white">“Windows protected your PC”</em>.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-neutral-200">
                <span className="text-[#c4f20f] font-bold">1.</span>
                <span>Click &quot;More info&quot;</span>
                <ArrowRight size={12} className="text-neutral-500" />
                <span className="text-[#c4f20f] font-bold">2.</span>
                <span>Click &quot;Run anyway&quot;</span>
              </div>
              <span className="text-[11px] text-neutral-500">
                The app installs safely into your local user folder without requiring administrator privileges.
              </span>
            </div>
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Built for Developers Who Value Speed & Privacy
            </h2>
            <p className="text-sm text-neutral-400">Everything you need to inspect, query, and synthesize SQL locally.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#14161b] border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#c4f20f]/10 flex items-center justify-center text-[#c4f20f]">
                <Database size={20} />
              </div>
              <h3 className="text-base font-semibold text-white">Multi-Engine Support</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Connect instantly to SQLite, DuckDB, PostgreSQL, MySQL, and Microsoft SQL Server with automatic dialect awareness.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#14161b] border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#c4f20f]/10 flex items-center justify-center text-[#c4f20f]">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-base font-semibold text-white">100% Privacy-Preserving</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Your database connection strings, schemas, and queries never leave your machine. No telemetry trackers or analytics.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#14161b] border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#c4f20f]/10 flex items-center justify-center text-[#c4f20f]">
                <Zap size={20} />
              </div>
              <h3 className="text-base font-semibold text-white">Seamless Background Updates</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Differential updates download in the background using minimal bandwidth. One-click restart brings you to the latest release.
              </p>
            </div>
          </div>
        </section>

        {/* Release Notes & Changelog (if available) */}
        {release && release.body && (
          <section className="max-w-3xl mx-auto px-6 py-12">
            <div className="p-6 rounded-2xl bg-[#14161b] border border-white/5 space-y-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center space-x-2">
                  <Terminal size={16} className="text-[#c4f20f]" />
                  <h3 className="text-sm font-semibold text-white">Release Notes: {release.tag_name}</h3>
                </div>
                <span className="text-[11px] text-neutral-500 font-mono">
                  {new Date(release.published_at).toLocaleDateString()}
                </span>
              </div>
              <div className="text-xs text-neutral-300 font-mono whitespace-pre-wrap leading-relaxed max-h-60 overflow-y-auto">
                {release.body}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6 bg-[#0a0b0d]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center space-x-2">
            <span className="text-neutral-400 font-medium">zero-sql</span>
            <span>—</span>
            <span>Open-source desktop database client</span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href={FALLBACK_RELEASES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              All Releases
            </a>
            <a
              href="https://github.com/LochanJangid/zero_sql/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Report Issue
            </a>
            <a
              href={FALLBACK_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center space-x-1"
            >
              <span>GitHub</span>
              <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

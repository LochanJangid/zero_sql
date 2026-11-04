'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Download, 
  Menu as MenuIcon, 
  X, 
  Database, 
  Sparkles, 
  ShieldCheck, 
  BookOpen, 
  Layers, 
  ChevronDown,
  ArrowRight,
  Terminal,
  Activity
} from 'lucide-react';

interface NavbarProps {
  currentPath?: string;
}

export default function Navbar({ currentPath = '/' }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  return (
    <>
      {/* Top Release Banner */}
      <div className="bg-[#12151c] border-b border-white/5 py-2 px-4 text-xs text-center text-slate-300 flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium text-[11px] border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          v0.1.4 Live
        </span>
        <span className="text-slate-400">
          Standalone Windows x64 installer with zero runtime dependencies & offline Python backend.
        </span>
        <Link 
          href="/download" 
          className="font-medium text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 hover:underline ml-1"
        >
          Download Now <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0d0e11]/90 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-600/20 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/40 transition-colors shadow-lg shadow-black/40 overflow-hidden">
                <Image 
                  src="/icon.png" 
                  alt="zero-sql logo" 
                  width={32} 
                  height={32} 
                  className="w-7 h-7 object-contain group-hover:scale-105 transition-transform" 
                />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-bold text-lg text-white tracking-tight">zero-sql</span>
                <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
                  v0.1.3
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-300">
              
              {/* Product Menu with Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setProductDropdownOpen(true)}
                onMouseLeave={() => setProductDropdownOpen(false)}
              >
                <Link 
                  href="/product"
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors hover:text-white hover:bg-white/5 ${
                    currentPath === '/product' ? 'text-white bg-white/5' : ''
                  }`}
                >
                  Product
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </Link>

                {productDropdownOpen && (
                  <div className="absolute top-full left-0 w-72 pt-2 z-50">
                    <div className="bg-[#14171f] border border-white/10 rounded-xl p-2 shadow-2xl shadow-black/80 backdrop-blur-2xl">
                      <Link 
                        href="/product" 
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Terminal className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white group-hover:text-emerald-300">Overview</div>
                          <div className="text-xs text-slate-400">Architecture, desktop engine & tour</div>
                        </div>
                      </Link>

                      <Link 
                        href="/features" 
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Sparkles className="w-4 h-4 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white group-hover:text-blue-300">Feature Catalog</div>
                          <div className="text-xs text-slate-400">Editor, schema RAG, safety & exports</div>
                        </div>
                      </Link>

                      <Link 
                        href="/changelog" 
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Activity className="w-4 h-4 text-purple-400" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white group-hover:text-purple-300">Changelog</div>
                          <div className="text-xs text-slate-400">Release history & patch updates</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link 
                href="/features" 
                className={`px-3 py-1.5 rounded-lg transition-colors hover:text-white hover:bg-white/5 ${
                  currentPath === '/features' ? 'text-white bg-white/5' : ''
                }`}
              >
                Features
              </Link>

              <Link 
                href="/databases" 
                className={`px-3 py-1.5 rounded-lg transition-colors hover:text-white hover:bg-white/5 ${
                  currentPath === '/databases' ? 'text-white bg-white/5' : ''
                }`}
              >
                Databases
              </Link>

              <Link 
                href="/security" 
                className={`px-3 py-1.5 rounded-lg transition-colors hover:text-white hover:bg-white/5 ${
                  currentPath === '/security' ? 'text-white bg-white/5' : ''
                }`}
              >
                Security & Privacy
              </Link>

              <Link 
                href="/docs" 
                className={`px-3 py-1.5 rounded-lg transition-colors hover:text-white hover:bg-white/5 ${
                  currentPath === '/docs' ? 'text-white bg-white/5' : ''
                }`}
              >
                Docs
              </Link>

              <Link 
                href="/changelog" 
                className={`px-3 py-1.5 rounded-lg transition-colors hover:text-white hover:bg-white/5 ${
                  currentPath === '/changelog' ? 'text-white bg-white/5' : ''
                }`}
              >
                Changelog
              </Link>
            </nav>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link 
              href="/download" 
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30 active:scale-[0.98]"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download Free</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link 
              href="/download" 
              className="p-2 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-xs"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-white/10 text-slate-300 hover:text-white hover:bg-white/5"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Slide-out Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#0d0e11] px-4 pt-3 pb-6 space-y-1">
            <Link 
              href="/product" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/5"
            >
              Product
            </Link>
            <Link 
              href="/features" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/5"
            >
              Features
            </Link>
            <Link 
              href="/databases" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/5"
            >
              Supported Databases
            </Link>
            <Link 
              href="/security" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/5"
            >
              Security & Privacy
            </Link>
            <Link 
              href="/docs" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/5"
            >
              Documentation
            </Link>
            <Link 
              href="/changelog" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/5"
            >
              Changelog
            </Link>
            <div className="pt-3">
              <Link 
                href="/download" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-sm"
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                Download zero-sql for Windows
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

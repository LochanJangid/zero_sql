'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Download, 
  Menu, 
  X, 
  ExternalLink,
  Github,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface NavbarProps {
  currentPath?: string;
}

export default function Navbar({ currentPath = '/' }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Product', href: '/#showcase' },
    { label: 'Features', href: '/#features' },
    { label: 'Security', href: '/#security' },
    { label: 'Architecture', href: '/#architecture' },
    { label: 'FAQ', href: '/#faq' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#0e1015] border-b border-white/[0.06] py-2 px-4 text-xs text-center text-slate-300 flex items-center justify-center gap-2 select-none">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium text-[11px] border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          v0.1.4 Released
        </span>
        <span className="text-slate-400 hidden sm:inline">
          Standalone desktop installer with local AI SQL synthesis & zero telemetry.
        </span>
        <Link 
          href="/download" 
          className="font-medium text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 hover:underline ml-1"
        >
          Download for Windows <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Main Sticky Navbar */}
      <nav 
        className={`sticky top-0 z-50 transition-all duration-200 border-b ${
          scrolled 
            ? 'bg-[#0a0b0e]/90 backdrop-blur-xl border-white/[0.08] shadow-2xl shadow-black/60' 
            : 'bg-[#0a0b0e]/60 backdrop-blur-md border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Left: Logo & Product Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/50 transition-colors shadow-lg overflow-hidden">
              <Image 
                src="/icon.png" 
                alt="Zero-SQL Logo" 
                width={28} 
                height={28} 
                className="w-6 h-6 object-contain group-hover:scale-105 transition-transform" 
              />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-extrabold text-base sm:text-lg text-white tracking-tight">Zero-SQL</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/10 text-slate-400">
                v0.1.4
              </span>
            </div>
          </Link>

          {/* Center: Clean Nav Links */}
          <div className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-medium text-slate-300">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-emerald-400 transition-colors py-1 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right: GitHub & Windows Download CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/LochanJangid/zero-sql"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title="View on GitHub"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <Link
              href="/download"
              className="px-4 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-emerald-500/20 flex items-center gap-1.5 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Download for Windows</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Link
              href="/download"
              className="px-3 py-1.5 rounded-xl bg-emerald-500 text-slate-950 text-xs font-bold flex items-center gap-1"
            >
              <Download className="w-3 h-3 stroke-[2.5]" />
              <span>Download</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/[0.05] border border-white/[0.08] text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0d0e13] border-b border-white/[0.08] px-4 py-5 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col space-y-2">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-emerald-400 hover:bg-white/[0.03] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/[0.08] flex items-center gap-3">
              <a
                href="https://github.com/LochanJangid/zero-sql"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 rounded-xl bg-white/[0.05] border border-white/[0.08] text-center text-xs font-semibold text-slate-300 flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <Link
                href="/download"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 py-2 rounded-xl bg-emerald-500 text-slate-950 text-center text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20"
              >
                <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Download</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductShowcase from '../components/ProductShowcase';
import ScreenshotsShowcase from '../components/ScreenshotsShowcase';
import DesktopWindow from '../components/DesktopWindow';
import FeatureStorytelling from '../components/FeatureStorytelling';
import ArchitectureSection from '../components/ArchitectureSection';
import SecuritySection from '../components/SecuritySection';
import FaqSection from '../components/FaqSection';
import DownloadCtaSection from '../components/DownloadCtaSection';
import CreatorSection from '../components/CreatorSection';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Zero-SQL — Your Data Stays Yours. Your SQL Gets Smarter.',
  description: 'Fast, privacy-first desktop database client for PostgreSQL, MySQL, SQLite, DuckDB, and Parquet with local AI SQL synthesis. 100% offline-ready with zero cloud telemetry.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0b0e] text-slate-100 selection:bg-emerald-500/30 selection:text-white">
      {/* 1. Sticky Navigation */}
      <Navbar currentPath="/" />

      {/* 2. Flagship Hero Section */}
      <HeroSection />

      {/* 3. Editorial Product Showcase (Core 6 Workflows) */}
      <ProductShowcase />

      {/* 4. Complete Visual Tour & Screenshot Gallery (All 16 Views) */}
      <ScreenshotsShowcase />

      {/* 5. Interactive Browser Sandbox Simulator (Live Studio Playground) */}
      <section id="demo" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08] bg-[#0c0d12]">
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <span>Interactive Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Try the Studio Workspace in Your Browser
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Switch between SQLite, PostgreSQL, DuckDB, MySQL, and flat CSV files. Test natural language SQL generation and plan inspection in real time.
          </p>
        </div>
        <DesktopWindow />
      </section>

      {/* 6. Feature Deep-Dives & Storytelling */}
      <FeatureStorytelling />

      {/* 7. Technical Architecture (Zero Data Leakage Pipeline) */}
      <ArchitectureSection />

      {/* 8. Enterprise Security & Cryptographic Checksums */}
      <SecuritySection />

      {/* 9. Frequently Asked Questions */}
      <FaqSection />

      {/* 10. High-Impact Bottom Download CTA */}
      <DownloadCtaSection />

      {/* 11. Creator Spotlight */}
      <CreatorSection />

      {/* 12. Developer Footer */}
      <Footer />
    </div>
  );
}

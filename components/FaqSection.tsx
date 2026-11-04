'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Does Zero-SQL ever send my database records to the cloud?',
    answer: 'Never. Zero-SQL operates strictly as a local desktop application. When using AI synthesis, only the schema metadata (table DDL and column names) is referenced. Your actual database rows, customer records, and credentials never leave your machine.',
  },
  {
    question: 'Do I need Python, Node.js, or external database drivers installed on my host?',
    answer: 'No. Zero-SQL is bundled as a self-contained, zero-dependency desktop application for Windows. It embeds its own sandboxed Python runtime and native C database drivers out of the box.',
  },
  {
    question: 'Can I bring my own LLM model or Groq API key?',
    answer: 'Yes! Zero-SQL supports both ultra-fast Groq cloud inference (using Llama 3.3 70B with zero data retention policies) as well as completely offline local models via Ollama, vLLM, or LM Studio.',
  },
  {
    question: 'Which database engines are supported?',
    answer: 'Zero-SQL natively supports PostgreSQL (v12 to 16+), MySQL 8.x, MariaDB, SQLite 3 (.db, .sqlite, .sqlite3), DuckDB, as well as raw tabular data files (CSV, TSV, and XLSX spreadsheets).',
  },
  {
    question: 'How does Safe Read-Only mode work?',
    answer: 'When Safe Read-Only is active, Zero-SQL enforces execution blocks on all mutation statements (UPDATE, DELETE, INSERT, DROP, ALTER) both in the AST parser and at the database connection transaction level, preventing accidental modifications.',
  },
  {
    question: 'How do I connect using a connection string or URI?',
    answer: 'Simply click "Connection Query" on the starting screen or click "Paste URI" inside any database panel. Zero-SQL automatically detects the dialect, parses host, port, credentials, and parameters in real time.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 border-t border-white/[0.08] bg-[#0c0d12] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Everything you need to know about Zero-SQL security, architecture, and desktop execution.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 pt-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#12151e] border border-white/[0.08] overflow-hidden transition-colors hover:border-white/[0.16]"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <span className="font-bold text-white text-sm sm:text-base">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-emerald-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/[0.04]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

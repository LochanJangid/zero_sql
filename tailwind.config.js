/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#c4f20f',
        'accent-ink': '#0e1702',
        background: '#0a0b0e',
        elevated: '#111318',
        card: '#151820',
        border: 'rgba(255, 255, 255, 0.08)',
        subtle: 'rgba(255, 255, 255, 0.04)',
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'glow-accent': '0 0 50px -10px rgba(196, 242, 15, 0.25)',
        'glow-emerald': '0 0 50px -10px rgba(16, 185, 129, 0.25)',
        'glow-blue': '0 0 50px -10px rgba(56, 189, 248, 0.25)',
        'window-depth': '0 30px 100px -20px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.08)',
      },
    },
  },
  plugins: [],
};

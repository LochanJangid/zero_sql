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
        background: '#0d0e11',
        elevated: '#16181d',
        card: '#1b1e24',
        border: 'rgba(255, 255, 255, 0.08)',
      },
    },
  },
  plugins: [],
};

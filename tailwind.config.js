/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#020617', // Deep Navy/Black
        surface: '#0f172a',    // Dark Slate
        primary: '#3b82f6',    // Electric Cobalt
        secondary: '#6366f1',  // Indigo
        accent: '#22d3ee',     // Cyan
        heading: '#f8fafc',    // Sky White
        body: '#94a3b8',       // Slate
        muted: '#475569',      // Dark Slate Grey
      },
      backgroundImage: {
        'none': 'none',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'warm-beige': '#f5f1eb',
        'dark-charcoal': '#1a1a1a',
        'gold-accent': '#d4af37',
        'amber': '#f59e0b',
      },
      backgroundImage: {
        'gradient-perfume': 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #92400e 100%)',
        'gradient-hero': 'radial-gradient(ellipse at center, rgba(245, 158, 11, 0.3) 0%, transparent 70%)',
      }
    },
  },
  plugins: [],
}
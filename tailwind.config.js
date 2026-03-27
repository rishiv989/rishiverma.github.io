/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#8b5cf6',
        dark: {
          bg: '#0a0e27',
          card: '#141829',
          text: '#e8eaed',
          border: '#2a2d3a',
        }
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0f1419 0%, #1a1f2e 100%)',
      }
    },
  },
  plugins: [],
}

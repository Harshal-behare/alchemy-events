/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#7DD3FC',
        'primary-dark': '#38BDF8',
        'primary-light': '#BAE6FD',
        secondary: '#F97316',
        dark: '#0F172A',
        'dark-light': '#1E293B',
        background: '#FFFFFF',
        foreground: '#333333',
      },
    },
  },
  plugins: [],
} 
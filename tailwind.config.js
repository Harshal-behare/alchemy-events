/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2CD3B6',
        'primary-dark': '#1A7A6B',
        secondary: '#FF6B6B',
        dark: {
          bg: '#1E1E1E',
          'bg-secondary': '#2A2A2A',
          text: '#FFFFFF',
          'text-secondary': '#E0E0E0',
          'text-tertiary': '#B0B0B0',
        },
        'gray-light': '#F8F9FA',
        'gray-medium': '#666666',
        'gray-dark': '#333333',
        background: '#FFFFFF',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
} 
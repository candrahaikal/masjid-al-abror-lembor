/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        philosopher: ["Philosopher", "sans-serif"],
        manrope: ['Manrope', ...defaultTheme.fontFamily.serif]
      },
    },
  },
  plugins: [],
}
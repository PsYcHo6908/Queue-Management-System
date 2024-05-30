/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'phone': '640px',

      'tablet': '1024px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1300px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1900px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {fontFamily: {
      'IBM': ['IBM Plex Sans Thai', 'sans-serif'],
    }},
  },
  plugins: [],
}

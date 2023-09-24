/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#8926D7',
        'light-purple': 'rgba(137, 38, 215, 0.2)',
      },
    },
  },
  plugins: [],
};
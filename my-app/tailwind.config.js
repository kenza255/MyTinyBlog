/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
  customBeige: '#dbd0c7',
      },
      fontFamily: {
  lacquer: ['Lacquer'],
  cormorant: ['Cormorant Garamond', 'serif'],

      },
    },
  },
  plugins: [],
};

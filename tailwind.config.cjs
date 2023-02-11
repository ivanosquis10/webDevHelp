/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ebony: {
          50: '#eef8ff',
          100: '#e0f1ff',
          200: '#c7e4fe',
          300: '#a5d1fc',
          400: '#81b4f8',
          500: '#6395f1',
          600: '#4672e5',
          700: '#385eca',
          800: '#304fa3',
          900: '#0f172a',
        },
        purpleh: {
          50: '#fcf5ff',
          100: '#f6e9fe',
          200: '#efd7fd',
          300: '#e3b7fb',
          400: '#d189f7',
          500: '#c05bf1',
          600: '#a82de1',
          700: '#9729c7',
          800: '#7e26a3',
          900: '#672083',
        },
      },
    },
  },
  plugins: [],
};

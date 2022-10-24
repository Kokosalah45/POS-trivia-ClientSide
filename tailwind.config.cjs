/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-shade-gray': '#2f2f2f',
        'dark-shade-gray-high': '#242424',
      },
    },
  },
  plugins: [],
};

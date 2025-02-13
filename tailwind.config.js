/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sage-green': '#A0C1B8',
        'light-sage': '#B5C99A',
      },
    },
  },
  plugins: [],
};
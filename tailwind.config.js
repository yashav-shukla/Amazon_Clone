/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        amazon: {
          DEFAULT: '#232F3E',
          light: '#37475A',
          yellow: '#FFD814',
          orange: '#FF9900',
        },
      },
    },
  },
  plugins: [],
};
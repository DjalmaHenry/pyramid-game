/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'shake': 'shake 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
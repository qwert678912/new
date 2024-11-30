/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        float: 'float 3s ease-in-out infinite',
        fadeIn: 'fadeIn 1s ease-out forwards',
        slideUp: 'slideUp 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
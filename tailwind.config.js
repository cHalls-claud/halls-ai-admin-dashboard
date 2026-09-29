/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.25)',
      },
      colors: {
        brand: {
          500: '#22c55e',
          600: '#16a34a',
        },
      },
    },
  },
  plugins: [],
};

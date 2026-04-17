/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          500: '#f97316', // orange-500
          600: '#ea580c', // orange-600
          900: '#1e3a8a', // blue-900
          950: '#172554', // blue-950
        }
      }
    },
  },
  plugins: [],
}
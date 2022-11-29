/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      minWidth: {
        '80': '20rem',
      },
      backgroundColor: {
        'custom-1': 'rgba(10, 10, 10, 1)',
        'custom-2': 'rgba(25, 25, 25, 1)',
        'custom-3': 'rgba(40, 40, 40, 1)'
      }
    },
  },
  plugins: [],
}

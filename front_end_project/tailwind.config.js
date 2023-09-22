/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    colors: {
      green: { emerald: '#559166', sage: 'D1E2C4' },
      grey: '#EBEBE8',
      yellow: '#ffa800',
      blue: '#050617',
      black: '#232623',
    },
    extend: {},
  },
  plugins: [],
};

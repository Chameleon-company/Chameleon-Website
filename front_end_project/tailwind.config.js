/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        green: { emrld: "#559166", sage: "#D1E2C4" },
        pewter: "#EBEBE8",
        blue: "#050617",
        black: "#232623",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};

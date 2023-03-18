/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FCA311",
        secondary: "#14213D",
        backgroundBase: "#F0F0F0",
        grey: {
          regular: "#C9C9C9",
          dark: "#A5A5A5",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

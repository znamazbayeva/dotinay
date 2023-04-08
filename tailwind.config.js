/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        blueish: "#5680E9",
        violetish: "#705DF2",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        "3xl": "0px 14px 55px rgb(60 0 189 / 15%)",
      },
      screens: {
        mobile: "300px",
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      },
    },
  },
  plugins: [],
};

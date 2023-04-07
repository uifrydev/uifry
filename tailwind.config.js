/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "min-4xl": "1921px",
      "min-lg": "1024px",
      "min-xl": "1280px",
      "min-2xl": "1651px",

      "4xl": { max: "1920px" },
      "3xl": { max: "1850px" },
      "2xl1": { max: "1650px" },
      "2xl": { max: "1366px" },
      xl1: { max: "1440px" },
      xl2: { max: "1280px" },

      "2xl2": { max: "1365px" },
      xl: { max: "1279px" },
      lg1: { max: "1024px" },
      lg: { max: "1023px" },
      md: { max: "768px" },
      sm: { max: "600px" },
      xs1: { max: "500px" },
      xs: { max: "400px" },
    },
    extend: {
      fontWeight: {
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
      },
      fontFamily: {
        safi: ["safi"],
        inters: ["inters"],
      },

      backgroundColor: {
        // primary: "#F6F9FC",
        primary: "#f7f8fd",
      },
      colors: {
        primaryBlack: "#160042",
        secondaryBlack: "#0A2540",
        secondaryGray: "#6B7194",
        tertiaryGray: "#B6B9CE",
        heading: "#160042",
        // border:'#efe9ff'
        border:'#e8eaf5'
      },
      boxShadow: {
        cardShadow: "51px 51px 132px -16px rgb(49 51 114 / 8%)",
        cardShadowHover: "0px 21px 132px -16px rgba(49, 51, 114, 0.23)",
        info: "0px 50px 100px -20px rgb(50 50 93 / 0%),0px 30px 60px -30px rgb(0 0 0 / 9%)",
        stcker: "0px 15px 20px rgba(0, 0, 0, 0.05)",
        logo: "51px 51px 132px -16px rgba(49, 51, 114, 0.08);",
        signup: "0px 4px 50px rgba(0, 0, 0, 0.1);",
      },
      backgroundImage: {
        side: "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
      },
    },
    transitionProperty: {
      height: "height",
      maxHeight: "maxHeight",
      all: "all",
    },
  },
  plugins: [],
};

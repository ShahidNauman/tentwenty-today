const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)", ...fontFamily.sans],
        "roboto-condensed": [
          "var(--font-roboto-condensed)",
          ...fontFamily.sans,
        ],
        "playfair-display": [
          "var(--font-playfair-display)",
          ...fontFamily.serif,
        ],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

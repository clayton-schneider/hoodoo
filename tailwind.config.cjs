/** @type {import('tailwindcss').Config} */

const FONT_FAMILY_BASE = [
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "Open Sans",
  "Helvetica Neue",
  "sans-serif",
];

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", ...FONT_FAMILY_BASE],
        bebas: ["Bebas Neue", ...FONT_FAMILY_BASE],
      },
      colors: {
        primary: "#342E2D",
        accent: "#EFCA52",
        cta: "#D24F35",
        "text-light": "#FDF5DD",
      },
      padding: {
        edge: "2.5%",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

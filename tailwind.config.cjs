/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dimBlue: "#183456",
        lightBlue: "#2E68FB",
        coralBlue: "rgba(24, 52, 86, 0.72)",
        topBg: "#F4F6FC",
      },
    },
  },
  plugins: [],
};

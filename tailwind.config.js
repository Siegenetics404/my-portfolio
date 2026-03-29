/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Perandory-Condensed", "sans-serif"],
        body: ["PlacardNextRegular-Condensed", "sans-serif"],
        // body: ["Helix-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};

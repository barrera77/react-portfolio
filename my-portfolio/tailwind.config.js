/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#02021C",
        secondary: "#C1AAEC",
        white: "#f2f2f2",
        inactive: "#aaa6c3",
      },
      screens: {
        xs: "300px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/background-8.png')",
      },
    },
  },
  plugins: [],
};

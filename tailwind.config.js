/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#232323",
        yellow: "#f6f3fc",
        "dark-yellow": "#FCCA3F",
        themePrimary: "#8750f7",
        themeSecondary: "#2a1454",
        navTheme: "#2a1454",
      },
    },
  },
  plugins: [],
};

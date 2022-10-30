/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray200: "hsl(var(--gray__200))",
        gray300: "hsl(var(--gray__300))",
        gray400: "hsl(var(--gray__400))",
        gray900: "hsl(var(--gray__900))",
      },
    },
  },
  plugins: [],
};

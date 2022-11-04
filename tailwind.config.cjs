/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray200: "hsl(var(--gray__200))",
        gray300: "hsl(var(--gray__300))",
        gray400: "hsl(var(--gray__400))",
        gray500: "hsl(var(--gray__500))",
        gray500: "hsl(var(--gray__500))",
        gray700: "hsl(var(--gray__700))",
        gray900: "hsl(var(--gray__900))",
        blue600: "hsl(var(--blue__600))",
        blue200: "hsl(var(--blue__200))",
        blue300: "hsl(var(--blue__300))",
        priRed: "hsl(var(--red))",
      },
      fontSize: {
        xLarge: "var(--fs-xl)",
        large: "var(--fs-lg)",
        normal: "var(--fs-md)",
        small: "var(--fs-sm)",
        xSmall: "var(--fs-xs)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

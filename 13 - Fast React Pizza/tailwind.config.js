/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
      robot: "Roboto Mono, monospace",
    },
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss"],
};

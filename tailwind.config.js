/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("daisyui"), require("tw-elements/dist/plugin")],
  theme: {
    extend: {},
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      bodyFont: ["Arimo"]
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'dark': '#272E29',
      'light': '#539666',
      'neon': '#A1DE64',
      'cream': '#D6DED8',
      'orange': '#F39136',
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // all your Astro pages & components:
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
    // any plain HTML in public
    './public/**/*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

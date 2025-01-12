/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",          // Matches all HTML files in the root folder
    "./**/*.html",       // Matches all HTML files in subdirectories
    "./*.js",            // Matches all JavaScript files in the root folder
    "./**/*.js",         // Matches all JavaScript files in subdirectories
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


const path = require('path');

// When deploying to production, set the base directory to your Hugo project's root directory.
const baseDir = path.join(__dirname, '..');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  safelist: ['page-corner'],
  content: [
    `${baseDir}/themes/**/layouts/**/*.html`,
      `${baseDir}/themes/**/layouts/partials/**/*.html`, 
    `${baseDir}/content/**/layouts/**/*.html`,
    `${baseDir}/layouts/**/*.html`,
    `${baseDir}/layouts/partials/**/*.html`,  
    `${baseDir}/content/**/*.html`,
    `${baseDir}/content/**/*.md`,
    `${baseDir}/public/**/*.html`,
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Site Inter"', '"Inter"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
  variants: ['group-hover'],
}

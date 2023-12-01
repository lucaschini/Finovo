/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mainPurple': '#421EA3',
        'glassStart': '#ffffff9c',
        'glassEnd': '#ffffff1a',
      },
    },
  },
  plugins: [],
}

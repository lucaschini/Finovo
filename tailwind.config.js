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
        'darkBg': '#050112',
        'textDestaque': '#7B53E4',
        'textApagado': '#7258B9',
        'confirm': '#01B187',
        'delete': '#FF2424',
        'deleteApagado': '#B22A2A',
        'deleteForte': '#760000',
        'input': '#D9D9D9',
        'hero': '#613DC1',

      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B1E4D',          // primary — dominant background/text anchor
        'navy-light': '#12295F',   // for subtle surface variation on dark sections
        blue: '#0078E0',          // primary CTA / links / mid accent
        cyan: '#00C4F0',          // sparing highlight only — underlines, icon fills, hover
        offwhite: '#F7F9FC',      // body background, NOT pure white
        ink: '#111827',           // body text on light backgrounds
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],  // headlines only
        body: ['"Inter"', 'sans-serif'],              // everything else
      },
      spacing: {
        '96': '6rem',   // 96px = 6rem
        '128': '8rem',  // 128px = 8rem
      },
    },
  },
  plugins: [],
}


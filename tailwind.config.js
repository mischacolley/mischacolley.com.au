/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      colors: {
        brand: {
          // Same as your original Gatsby site. `bg-brand` and `text-brand`
          // still resolve to DEFAULT, so nothing had to change to add the
          // hover shade.
          DEFAULT: '#6699cc',
          // One step darker in the same family, for hover and active states.
          // The buttons used to hover to Tailwind's `blue-700`, which is a
          // different, much more saturated blue and read as a mistake.
          dark: '#5588bb',
        },
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s steps(1, end) infinite',
      },
    },
  },
  plugins: [],
}

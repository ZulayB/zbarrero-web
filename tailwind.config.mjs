/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        desktop: '1400px',
      },
      fontFamily: {
        heading: ['Anton', 'sans-serif'],
        body: ['Instrument Sans', 'sans-serif'],
      },
      colors: {
        accent: '#FF00C8',
      },
    },
  },
  plugins: [],
}
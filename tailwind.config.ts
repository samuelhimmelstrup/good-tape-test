import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        goodTapePurple: '#8A22FF',
      },
    },
  },
  plugins: [],
} satisfies Config

import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gt_purple: '#9730FF',
        gt_purple_dark: '#9333ea',
        gt_purple_darker: '#7528BB'
      },
    },
  },
  plugins: [],
} satisfies Config

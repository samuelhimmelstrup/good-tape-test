import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gt_purple: '#9730FF',
        gt_purple_dark: '#9333ea',
        gt_purple_darker: '#7528BB',
        gt_grey: '#F7F8F9',
        gt_grey_medium: '#C5C6C7'
      },
    },
  },
  plugins: [],
} satisfies Config

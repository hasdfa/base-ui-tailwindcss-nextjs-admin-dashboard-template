import type { Config } from 'tailwindcss'
import myColors from './src/theme/colors'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{css,scss}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: { ...myColors },
      backgroundImage: {
        'gradient-brand': `linear-gradient(to bottom, ${myColors.brand[400]}, ${myColors.brand[600]})`,
        'gradient-brand-solid': `linear-gradient(to bottom, ${myColors.brand[400]}, ${myColors.brand[400]})`,
      },
    },
  },
  plugins: [],
}

export default config

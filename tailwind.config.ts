import type { Config } from 'tailwindcss'
import { withTV } from 'tailwind-variants/transformer'
import myColors from './src/theme/colors'

const config: Config = withTV({
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: { ...myColors },
      backgroundImage: {
        'gradient-brand': `linear-gradient(to bottom, ${myColors.brand[400]}, ${myColors.brand[600]})`,
        'gradient-brand-solid': `linear-gradient(to bottom, ${myColors.brand[400]}, ${myColors.brand[400]})`,
      },
      screens: {
        md: '900px',
      },
    },
  },
  plugins: [],
})

export default config

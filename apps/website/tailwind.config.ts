import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['src/app/**/*.{js,ts,jsx,tsx,mdx,json}', 'src/components/**/*.{js,ts,jsx,tsx,mdx,json}'],
  safelist: ['sh__line', 'show-line-numbers'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-geist-sans)',
        mono: 'var(--font-geist-mono)'
      },
      fontSize: {
        inh: ['inherit', 'inherit']
      }
    }
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true
  }
}

export default config

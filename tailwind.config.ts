import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dp-black': '#000000',
        'dp-gold': '#FFD700',
        'dp-silver': '#C0C0C0',
        'dp-neon-blue': '#00E5FF',
        'dp-neon-pink': '#FF006F',
        'daft-dark': '#333333',
        'daft-light-gray': '#f0f0f0',
        'daft-blue': '#007bff',
        'daft-green': '#28a745',
        'daft-yellow': '#ffc107',
        'daft-orange': '#fd7e14',
        'daft-red': '#dc3545',
      },
    },
  },
  plugins: [],
}
export default config

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffcc00',
        secondary: '#ff6666',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
export default config

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#eb7eff',
        c_black: '#202020',
        c_white: '#F5F9F3'
      },
      backgroundImage: {
        home_pattern: "url('/background-pattern.svg')",
      },
      boxShadow: {
        button: '4px 4px #f0f4f9'
      }
    }
  },
  plugins: []
};
export default config;

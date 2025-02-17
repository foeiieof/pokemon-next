import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        dots: "dots 1.2s steps(1) infinite",
        movingDots: "movingDots 1.2s steps(1) infinite",
      },
      keyframes: {
        dots: {
          "0%": { content: '"."' },
          "33%": { content: '".."' },
          "66%": { content: '"..."' },
          "100%": { content: '"."' },
        },
        movingDots: {
          "0%": { content: '"·..."' },
          "25%": { content: '" .·.." ' },
          "50%": { content: '" ..·. "' },
          "75%": { content: '" ...·"' },
          "100%": { content: '"·..."' }
        },
      }
    },
  },
  plugins: [],
};
export default config;


import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        rippling: "rippling var(--duration, 600ms) ease-out",
      },
      keyframes: {
        rippling: {
          "0%": {
            transform: "scale(0)",
            opacity: "0.3",
          },
          "100%": {
            transform: "scale(4)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;

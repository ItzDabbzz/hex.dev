import { type Config } from "tailwindcss";

export default {
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
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundColor: {
        'white/2': 'rgba(255, 255, 255, 0.02)',
        'white/8': 'rgba(255, 255, 255, 0.08)',
      },
      borderColor: {
        'white/5': 'rgba(255, 255, 255, 0.05)',
        'white/15': 'rgba(255, 255, 255, 0.15)',
      },
    },
  },
  plugins: [],
} satisfies Config;

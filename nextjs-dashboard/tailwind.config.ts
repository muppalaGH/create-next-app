import type { Config } from 'tailwindcss';
import {undefined} from "zod";
import plugin from "tailwindcss";

import generated from "@tailwindcss/forms";

const config: { blocklist: undefined; prefix: string; plugins: (plugin | ((options?: Partial<{ strategy: "base" | "class" }>) => { handler: () => void }))[]; experimental: undefined; separator: string; content: string[]; important: undefined; presets: undefined; future: undefined; safelist: undefined; corePlugins: undefined; theme: { extend: { gridTemplateColumns: { "13": string }; colors: { blue: { 400: string; 500: string; 600: string } } }; keyframes: { shimmer: { "100%": { transform: string } } } }; darkMode: undefined } = {
  corePlugins: undefined, darkMode: undefined, experimental: undefined, future: undefined, important: undefined, prefix: "", presets: undefined, safelist: undefined, separator: "",
  blocklist: undefined,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [generated]
};
export default config;

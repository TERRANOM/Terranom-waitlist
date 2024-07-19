import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': "url('/img/gradient.png')",
        'green-bg':"url('/img/green_bg.png')",
      },
      colors : {
        'background-gray' : '#DCDEDD',
        'corals-red': "#C25C49",
        'deeps-green':"#1C5739",
        'background-green':"#475B51",
        'big-green':"#DCDEDD",
        'small-green':'#91AFA0',
      },
    },
  },
  plugins: [],
};
export default config;

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
        //customized bewcolor
        blackblue: { 900: "#1F316F", 100: "#F9DBBA" }, // can do this or blackblue:"#1F316F"
      },
      spacing: {
        "13": "3.25rem",
      },
      screens:{
        sm:'650px'
      },
      fontSize:{
        base:['30px','40px'],//for size and line height can be for size only
      },
      fontFamily:{
        Edu:["Edu AU VIC WA NT Dots", 'cursive']
      }
      
    },
  },
  plugins: [],
};
export default config;

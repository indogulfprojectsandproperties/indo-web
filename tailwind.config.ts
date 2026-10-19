import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0C0C40",
          50: "#EEF0F8",
          100: "#D6D9ED",
          200: "#ACB2DB",
          300: "#7F88C6",
          400: "#4D59AB",
          500: "#2A368F",
          600: "#1C2570",
          700: "#131A56",
          800: "#0C0C40",
          900: "#060624",
          950: "#030312",
        },
        amber: {
          DEFAULT: "#F8B00F",
          light: "#FED369",
          dark: "#D99505",
        },
        red: {
          DEFAULT: "#FF2529",
          light: "#FF5E61",
          dark: "#D61115",
        },
        cyan: {
          DEFAULT: "#00DDE2",
          light: "#57EDF1",
          dark: "#00B4B8",
        },
        softgrey: "#F5F6FA",
        "navy-body": "#4A4A6A",
      },
      fontFamily: {
        sans: ["var(--font-body)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

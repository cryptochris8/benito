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
        neon: "#c8ff00",
        hotpink: "#ff2d9b",
        magenta: "#e91e8e",
        dark: "#0a0a0a",
        darker: "#050505",
        card: "#111111",
        "card-hover": "#1a1a1a",
      },
      fontFamily: {
        heading: ["'Arial Black'", "'Helvetica Neue'", "sans-serif"],
        body: ["'Helvetica Neue'", "Arial", "sans-serif"],
      },
      animation: {
        "pulse-neon": "pulseNeon 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        pulseNeon: {
          "0%, 100%": { textShadow: "0 0 10px #c8ff00, 0 0 40px #c8ff00" },
          "50%": { textShadow: "0 0 20px #c8ff00, 0 0 80px #c8ff00, 0 0 120px #c8ff00" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(200, 255, 0, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(200, 255, 0, 0.6), 0 0 80px rgba(233, 30, 142, 0.3)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

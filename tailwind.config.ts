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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        headline: "64px",
        subHeadline: "32px",
        "body-text": "18px",
        lable: "16px",
        code: "14px",
      },
      colors: {
        gradient1: "#4D5BCE",
        gradient2: "#43D9AD",
        lines: "#1E2D3D",
        black: "#01080E",
        slate: "#011627",
        darkBlue: "#011221",
        seaGreen: "#607B96",
        green: "#3C9D93",
        blue: "#4D5BCE",
        orange: "#FEA55F",
        lightGreen: "#43D9AD",
        peach: "#E99287",
        pink: "#C98BDF",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;

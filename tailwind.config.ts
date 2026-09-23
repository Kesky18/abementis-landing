import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0D1420",       // near-black, blue undertone — deepest bg
        navy: "#10182B",      // primary dark bg
        slate: "#2E4057",     // secondary dark, supporting panels
        card: "#182238",      // dark section panel
        bone: "#F7F3EA",      // warm light bg
        paper: "#EFE9DC",     // slightly deeper warm light, for panels on bone
        amber: "#E3A23D",     // primary accent — dawn / hope
        amberdeep: "#B87F2A", // hover/pressed state of amber
        mist: "#C7CCD8",      // muted text on dark
        ash: "#5B5F6B",       // muted text on light
      },
      fontFamily: {
        display: ["var(--font-lora)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        prose: "70ch",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 60-30-10 palette: warm neutral ground, deep pine as the secondary
        // brand colour, brass as the sparing accent.
        ink: {
          DEFAULT: "#1c2b33",
          soft: "#43565f",
          faint: "#6b7f88",
        },
        pine: {
          50: "#eef6f4",
          100: "#d7eae5",
          200: "#b0d5cc",
          600: "#14665a",
          700: "#0e5349",
          800: "#0b423b",
          900: "#08322d",
        },
        brass: {
          500: "#b98a2f",
          600: "#9c7423",
        },
        mist: "#f6f4ef",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(20, 40, 45, 0.05), 0 8px 24px rgba(20, 40, 45, 0.07)",
        lift: "0 2px 4px rgba(20, 40, 45, 0.06), 0 16px 40px rgba(20, 40, 45, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;

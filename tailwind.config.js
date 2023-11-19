/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/screens/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    boxShadow: {
      sm: "rgba(16, 24, 40, 0.06)",
      md: "rgba(16, 24, 40, 0.1)",
      lg: "rgba(16, 24, 40, 0.1)"
    },
    colors: {
      "white": {
        DEFAULT: "rgba(255, 255, 255, 1)",
        25: "rgba(255, 255, 255, 0.05)",
        50: "rgba(255, 255, 255, 0.05)",
        100: "rgba(255, 255, 255, 0.1)",
        200: "rgba(255, 255, 255, 0.2)",
        300: "rgba(255, 255, 255, 0.3)",
        400: "rgba(255, 255, 255, 0.4)",
        500: "rgba(255, 255, 255, 0.5)",
        600: "rgba(255, 255, 255, 0.6)",
        700: "rgba(255, 255, 255, 0.7)",
        800: "rgba(255, 255, 255, 0.8)",
        900: "rgba(255, 255, 255, 0.9)"
      },
      "gray": {
        25: "#FBFCFD",
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
      },
      "grayTransparent": {
        DEFAULT: "rgba(17, 24, 39, 1)",
        50: "rgba(17, 24, 39, 0.05)",
        100: "rgba(17, 24, 39, 0.1)",
        200: "rgba(17, 24, 39, 0.2)",
        300: "rgba(17, 24, 39, 0.3)",
        400: "#11182766",
        500: "rgba(17, 24, 39, 0.5)",
        600: "rgba(17, 24, 39, 0.6)",
        700: "rgba(17, 24, 39, 0.7)",
        800: "rgba(17, 24, 39, 0.8)",
        900: "rgba(17, 24, 39, 0.9)"
      },
      "blue": {
        25: "#FAFCFE",
        50: "#EFF6FF",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
      },
      "cyan": {
        25: "#F7FEFE",
        50: "#ecfeff",
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63",
      },
      "red": {
        25: "#FFFBFA",
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d ",
      }
    },
    fontFamily: {
      sf300: [
        'EudoxusSans-Light'
      ],
      sf400: [
        'EudoxusSans-Regular'
      ],
      sf500: [
        'EudoxusSans-Medium'
      ],
      sf600: [
        'EudoxusSans-SemiBold'
      ],
      sf700: [
        'EudoxusSans-Bold'
      ],
    }
  },
  plugins: [],
}


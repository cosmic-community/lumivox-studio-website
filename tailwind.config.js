/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0B0B14",
        canvas: "#141422",
        iris: "#6C63FF",
        coral: "#FF6B9D",
        linen: "#F0EDE8",
        pewter: "#8A8A9A"
      },
      fontFamily: {
        display: ['"Cabinet Grotesk"', "ui-sans-serif", "system-ui"],
        body: ['"Plus Jakarta Sans"', "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        glow: "0 0 60px rgba(108, 99, 255, 0.35)"
      },
      backgroundImage: {
        "mesh-gradient":
          "radial-gradient(circle at 10% 20%, rgba(108, 99, 255, 0.3), transparent 50%), radial-gradient(circle at 80% 0%, rgba(255, 107, 157, 0.35), transparent 55%), radial-gradient(circle at 20% 90%, rgba(255, 107, 157, 0.25), transparent 50%), radial-gradient(circle at 90% 70%, rgba(108, 99, 255, 0.25), transparent 45%)"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
}
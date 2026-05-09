/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#07111F",
        midnight: "#0B1728",
        gold: "#D4B06A",
        ivory: "#F8F3EA",
        mist: "#D9E3EA"
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"]
      },
      boxShadow: {
        cinematic: "0 30px 90px rgba(0,0,0,.45)",
        gold: "0 0 40px rgba(212,176,106,.28)"
      },
      backgroundImage: {
        "gold-line": "linear-gradient(90deg, transparent, rgba(212,176,106,.85), transparent)"
      }
    }
  },
  plugins: []
};

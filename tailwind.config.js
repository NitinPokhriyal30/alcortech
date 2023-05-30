/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "360px",
      // => @media (min-width: 360px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "hero-slider1": "url('../src/assets/slider/slider-bg1.png')",
        "hero-slider2": "url('../src/assets/slider/slider-bg2.png')",
        "hero-slider3": "url('../src/assets/slider/slider-bg3.png')",
      },
      animation: {
        "slide-left": "slide-left 1000ms forwards",
      },
      keyframes: {
        "slide-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      colors: {
        primary: "#5486E3",
        "primary-400": "#93c5fd",
        translucent: "rgba(84 134 227 / 0.15)",
        "translucent-white": "rgba(256 256 256 / 0.15)",
      },
      fontFamily: {
        Lato: ["Lato"],
        Roboto: ["Roboto Slab"],
      },
      gridTemplateColumns: {
        mediumDevice: "270px 1fr auto", // MD
        smallDevice: "1fr", // SM
      },
      dropShadow: {
        normal: "0px 2px 3px #00000029",
      },
    },
  },
  plugins: [],
};

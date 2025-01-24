/** @type {import('tailwindcss').Config} */

import animatePlugin from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/stories/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    fontFamily: {
      heading: ["var(--font-acidgrotesk)"],
      body: ["var(--font-inter)"],
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      md: "1.125rem",
      md2: "1.25rem",
      md3: "1.5rem",
      lg: "2rem",
      lg2: "2.5rem",
      lg3: "2.75rem",
      lg4: "3rem",
      xl: "4rem",
      xl2: "6.25rem",
    },
    colors: {
      transparent: "transparent",
      black: "hsl(var(--black))",
      white: "hsl(var(--white))",
      foreground: "hsl(var(--black))",
      background: "hsl(var(--white))",
      tan: "hsl(var(--tan))",
      grey: {
        lighter: "hsl(var(--grey-lighter))",
        light: "hsl(var(--grey-light))",
        DEFAULT: "hsl(var(--grey))",
      },
      turtle: {
        blue: {
          light: "hsl(var(--turtle-blue-light))",
          DEFAULT: "hsl(var(--turtle-blue))",
          dark: "hsl(var(--turtle-blue-dark))",
        },
      },
      red: {
        light: "hsl(var(--red-light))",
        DEFAULT: "hsl(var(--red))",
      },
      green: {
        light: "hsl(var(--green-light))",
        DEFAULT: "hsl(var(--green))",
      },
      yellow: {
        light: "hsl(var(--yellow-light))",
        DEFAULT: "hsl(var(--yellow))",
      },
      purple: {
        light: "hsl(var(--purple-light))",
        DEFAULT: "hsl(var(--purple))",
      },
      teal: {
        light: "hsl(var(--teal-light))",
        DEFAULT: "hsl(var(--teal))",
      },
      custom: {
        blue: "hsl(var(--custom-blue))",
        yellow: "hsl(var(--custom-yellow))",
        teal: "hsl(var(--custom-teal))",
      },
      accent: "hsl(var(--accent))",
      popover: "hsl(var(--popover))",
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
    },
    extend: {
      borderRadius: {
        DEFAULT: "var(--radius)",
        checkbox: "0.25rem",
        input: "0.375rem",
      },
      boxShadow: {
        x: "inset 35px 60px -15px rgba(0, 0, 0, 0.3)",
        card: "0px 4px 8px 0px rgba(0, 0, 0, 0.16)",
        inverted: "0 -4px 8px 0px rgba(0, 0, 0, 0.08)",
      },
      backgroundImage: {
        "navbar-horizontal":
          "linear-gradient(315deg, hsla(var(--turtle-blue), 0.2) 0%, hsla(var(--turtle-blue-light), 0.2) 100%)",
        "navbar-vertical":
          "linear-gradient(322deg, hsla(var(--turtle-blue), 0.2) 0%, hsla(var(--turtle-blue-light), 0.2) 100%)",
        "join-hero":
          "linear-gradient(0deg, #FFF 0%, rgba(135, 152, 224, 0.64) 110.01%);",
      },
      flexBasis: {
        card: "87.5vw",
      },
      gridTemplateColumns: {
        "main-layout": "12.5rem 1fr",
      },
      gridTemplateRows: {
        "0fr": "0fr",
        "1fr": "1fr",
      },
      height: {
        em: "1em",
      },
      left: {
        navbar: "12.5rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      lineHeight: {
        regular: "normal",
      },
      maxWidth: {
        screen: "100vw",
      },
      width: {
        em: "1em",
        navbar: "12.5rem",
        content: "calc(100% - 12.5rem)",
      },
      zIndex: {
        5: "5",
        15: "15",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
    },
  },
  plugins: [animatePlugin],
};

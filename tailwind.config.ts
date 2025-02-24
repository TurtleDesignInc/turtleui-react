import { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/stories/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    spacing: {
      "150": "var(--values-150-rem)",
      "120": "var(--values-120-rem)",
      "100": "var(--values-100-rem)",
      "78": "var(--values-78-rem)",
      "72": "var(--values-72-rem)",
      "64": "var(--values-64-rem)",
      "56": "var(--values-56-rem)",
      "48": "var(--values-48-rem)",
      "40": "var(--values-40-rem)",
      "36": "var(--values-36-rem)",
      "32": "var(--values-32-rem)",
      "28": "var(--values-28-rem)",
      "24": "var(--values-24-rem)",
      "20": "var(--values-20-rem)",
      "18": "var(--values-18-rem)",
      "16": "var(--values-16-rem)",
      "14": "var(--values-14-rem)",
      "12": "var(--values-12-rem)",
      "10": "var(--values-10-rem)",
      "8": "var(--values-8-rem)",
      "6": "var(--values-6-rem)",
      "4": "var(--values-4-rem)",
      "2": "var(--values-2-rem)",
      "1": "var(--values-1-rem)",
    },
    fontFamily: {
      headers: ["var(--font-family-acid-grotesk)", "sans-serif"],
      body: ["var(--font-family-inter)", "sans-serif"],
    },
    fontSize: {
      base: "var(--values-16-rem)",
      "100": "var(--values-100-rem)",
      "64": "var(--values-64-rem)",
      "56": "var(--values-56-rem)",
      "48": "var(--values-48-rem)",
      "40": "var(--values-40-rem)",
      "32": "var(--values-32-rem)",
      "24": "var(--values-24-rem)",
      "20": "var(--values-20-rem)",
      "18": "var(--values-18-rem)",
      "16": "var(--values-16-rem)",
      "14": "var(--values-14-rem)",
      "12": "var(--values-12-rem)",
      "10": "var(--values-10-rem)",
    },
    lineHeight: {
      base: "1",
      "100": "var(--values-100-rem)",
      "72": "var(--values-72-rem)",
      "64": "var(--values-64-rem)",
      "56": "var(--values-56-rem)",
      "48": "var(--values-48-rem)",
      "40": "var(--values-40-rem)",
      "32": "var(--values-32-rem)",
      "28": "var(--values-28-rem)",
      "24": "var(--values-24-rem)",
      "20": "var(--values-20-rem)",
      "18": "var(--values-18-rem)",
      "16": "var(--values-16-rem)",
      "14": "var(--values-14-rem)",
      "12": "var(--values-12-rem)",
      "10": "var(--values-10-rem)",
    },
    colors: {
      transparent: "transparent",
      background: "var(--background)",
      foreground: "var(--foreground)",
      button: {
        primary: {
          text: "var(--button-primary-text)",
          icon: "var(--button-primary-icon)",
          default: {
            "bg-fill": "var(--button-primary-default-bg-fill)",
          },
          hover: {
            "bg-fill": "var(--button-primary-hover-bg-fill)",
          },
          pressed: {
            "bg-fill": "var(--button-primary-pressed-bg-fill)",
          },
          disabled: {
            "bg-fill": "var(--button-primary-disabled-bg-fill)",
          },
        },
        secondary: {
          text: "var(--button-secondary-text)",
          icon: "var(--button-secondary-icon)",
          default: {
            "bg-fill": "var(--button-secondary-default-bg-fill)",
          },
          hover: {
            "bg-fill": "var(--button-secondary-hover-bg-fill)",
          },
          pressed: {
            "bg-fill": "var(--button-secondary-pressed-bg-fill)",
          },
          disabled: {
            "bg-fill": "var(--button-secondary-disabled-bg-fill)",
          },
        },
        disabled: {
          text: "var(--button-disabled-text)",
        },
      },
    },
    extend: {
      spacing: {
        button: "var(--values-12-rem)",
      },
      padding: {
        "button-horizontal": "var(--values-24-rem)",
        "button-vertical": "var(--values-16-rem)",
      },

      borderRadius: {
        button: "var(--values-12-rem)",
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
      gridTemplateRows: {
        "0fr": "0fr",
        "1fr": "1fr",
      },
      height: {
        em: "1em",
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

export default config;

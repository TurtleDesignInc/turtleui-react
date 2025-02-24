import type { Preview, ReactRenderer } from "@storybook/react";
import { ViewportMap } from "@storybook/addon-viewport";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import "../src/styles.css";

const viewports: ViewportMap = {
  iphonese2020: {
    name: "iPhone SE 2020",
    styles: { height: "667px", width: "375px" },
    type: "mobile",
  },
  iphone15: {
    name: "iPhone 15",
    styles: { height: "852px", width: "393px" },
    type: "mobile",
  },
  galaxys24: {
    name: "Galaxy S24",
    styles: { height: "780px", width: "360px" },
    type: "mobile",
  },
  galaxys24plus: {
    name: "Galaxy S24+",
    styles: { height: "832px", width: "384px" },
    type: "mobile",
  },
  ipadmini4: {
    name: "iPad Mini 4",
    styles: { height: "1024px", width: "768px" },
    type: "tablet",
  },
  ipad10: {
    name: "iPad 10",
    styles: { height: "1080px", width: "810px" },
    type: "tablet",
  },
  ipadpro12: {
    name: "iPad Pro 12",
    styles: { height: "1366px", width: "1204px" },
    type: "tablet",
  },
  desktopmid: {
    name: "Desktop Mid",
    styles: { height: "1366px", width: "768px" },
    type: "desktop",
  },
  desktophigh: {
    name: "Desktop High",
    styles: { height: "1440px", width: "900px" },
    type: "desktop",
  },
  desktopultra: {
    name: "Desktop Ultra",
    styles: { height: "1920px", width: "1080px" },
    type: "desktop",
  },
};

const preview: Preview = {
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    viewport: {
      viewports: viewports,
      defaultViewport: "desktopmid",
    },
  },
  decorators: [
    withThemeByDataAttribute<ReactRenderer>({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
  tags: ["autodocs"],
};

export default preview;

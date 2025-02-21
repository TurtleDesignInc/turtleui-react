import { cva } from "class-variance-authority";

export const headingTextVariants = cva("font-heading", {
  variants: {
    level: {
      h1: "text-100 leading-64 xl:text-100 xl:leading-100",
      h2: "text-56 leading-64 xl:text-64 xl:leading-72",
      h3: "text-48 leading-56",
      h4: "text-40 leading-48",
      h5: "text-32 leading-40",
      h6: "text-24 leading-32",
    },
  },
  defaultVariants: {
    level: "h1",
  },
});

export const bodyTextVariants = cva("font-body", {
  variants: {
    size: {
      normal: "text-18 leading-28 xl:text-20 xl:leading-32",
      small: "text-16 leading-24 xl:text-18 xl:leading-28",
      caption: "text-10 leading-20 xl:text-12 xl:leading-24",
    },
    weight: {
      normal: "font-normal",
      bold: "font-bold",
    },
    link: {
      true: "underline underline-offset-2",
      false: "",
    },
  },
  defaultVariants: {
    size: "normal",
    weight: "normal",
    link: false,
  },
});

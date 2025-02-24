import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  `group inline-flex items-center justify-center gap-button
  w-fit min-h-56 px-button-horizontal py-button-vertical rounded-button
  text-16 ring-offset-background transition-colors
  disabled:pointer-events-none disabled:text-button-disabled-text
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`,
  {
    variants: {
      variant: {
        primary: `bg-button-primary-default-bg-fill text-button-primary-text
          hover:bg-button-primary-hover-bg-fill
          active:bg-button-primary-pressed-bg-fill
          disabled:bg-button-primary-disabled-bg-fill`,
        secondary: `bg-button-secondary-default-bg-fill text-button-secondary-text
          hover:bg-button-secondary-hover-bg-fill
          active:bg-button-secondary-pressed-bg-fill
          disabled:bg-button-secondary-disabled-bg-fill`,
        outline: "border",
        link: "min-h-min px-0 py-0 border-none leading-28 underline underline-offset-2",
      },
      loading: {
        true: "pointer-events-none",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

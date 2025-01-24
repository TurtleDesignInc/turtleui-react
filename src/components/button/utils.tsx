import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 w-fit min-h-[3rem] pt-2.5 pb-2 rounded-xl text-base ring-offset-background transition-colors disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        solid: "bg-turtle-blue text-white hover:bg-turtle-blue-dark",
        outline:
          "border border-black bg-background transition-shadow hover:ring-inset hover:ring-1 hover:ring-black",
        // white: 'bg-white text-black hover:text-turtle-blue',
        link: "min-h-min p-0 border-none",
        ghost: "",
        icon: "w-14 h-14 bg-turtle-blue rounded-full text-white hover:bg-turtle-blue-dark",
        disabled: "bg-grey-light text-grey cursor-not-allowed",
      },
      buttonColor: {
        primary: "",
        black: "bg-black text-white hover:bg-grey",
        error: "bg-red text-white",
      },
      spacing: {
        default: "px-6",
        lg: "px-10",
        xl: "px-14",
      },
    },
    defaultVariants: {
      variant: "solid",
      buttonColor: "primary",
      spacing: "default",
    },
    compoundVariants: [
      {
        variant: "link",
        spacing: "default",
        className: "p-0",
      },
      {
        variant: "link",
        buttonColor: "primary",
        className:
          "text-turtle-blue underline underline-offset-2 hover:text-turtle-blue-dark active:text-black",
      },
      {
        variant: "link",
        buttonColor: "black",
        className: "bg-transparent text-black hover:bg-transparent",
      },
      {
        variant: "solid",
        buttonColor: "error",
        className: "hover:bg-red",
      },
      {
        variant: "outline",
        buttonColor: "primary",
        className: "bg-white border-turtle-blue text-black",
      },
      {
        variant: "outline",
        buttonColor: "black",
        className: "bg-background border-black text-black hover:bg-background",
      },
      {
        variant: "outline",
        buttonColor: "error",
        className: "bg-white border-red text-red hover:ring-red",
      },
    ],
  }
);

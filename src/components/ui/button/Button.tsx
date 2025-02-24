import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/shadcn";

import SpinnerSvg from "@/assets/icons/spinner.svg";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { buttonVariants } from "./utils";
import { Icon } from "../../icon";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  animateIcon?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      asChild = false,
      loading = false,
      leftIcon,
      rightIcon,
      animateIcon = false,
      children,
      type = "button",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const useCustomIconClassName = variant !== "link";

    return (
      <Comp
        className={cn(
          buttonVariants({ variant }),
          {
            "!pl-button": leftIcon && useCustomIconClassName,
            "!pr-button": rightIcon && useCustomIconClassName,
            "animate-pulse duration-1000": loading,
            "disabled:opacity-50 disabled:saturate-0 disabled:cursor-not-allowed":
              !loading,
          },
          className
        )}
        ref={ref}
        type={type}
        {...props}
      >
        <>
          {loading ? (
            <Icon as={SpinnerSvg} className="animate-spin" />
          ) : (
            <>
              {leftIcon ? <Icon as={leftIcon} /> : null}
              {children}
              {rightIcon ? (
                <Icon
                  as={rightIcon}
                  className={cn({
                    "transition-transform duration-200 group-hover:translate-x-1":
                      animateIcon,
                  })}
                />
              ) : null}
            </>
          )}
        </>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button };

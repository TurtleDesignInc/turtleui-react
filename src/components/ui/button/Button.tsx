import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/shadcn";

import { ButtonHTMLAttributes, forwardRef, ReactElement } from "react";
import { buttonVariants } from "./utils";
import { Icon } from "../icon";
import { SpinnerIcon } from "../icons/SpinnerIcon";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  leftIcon?: () => ReactElement;
  rightIcon?: () => ReactElement;
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
          buttonVariants({ variant, loading }),
          {
            "!pl-button": leftIcon && useCustomIconClassName,
            "!pr-button": rightIcon && useCustomIconClassName,
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
            <Icon as={SpinnerIcon} className="animate-spin" />
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

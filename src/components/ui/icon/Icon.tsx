import { cn } from "@/utils/shadcn";
import { HTMLAttributes, ReactElement } from "react";

interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  as: () => ReactElement;
  size?: string | number;
}

export function Icon({ as, className, ...rest }: IconProps) {
  const Element = as;

  return (
    <span className={cn("icon size-24", className)} {...rest}>
      <Element />
    </span>
  );
}

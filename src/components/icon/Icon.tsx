import { cn } from "@/utils/shadcn";
import { HTMLAttributes } from "react";

interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  as: any;
  size?: string | number;
  hasWrapper?: boolean;
  wrapperClassName?: HTMLAttributes<HTMLDivElement>["className"];
}

export function Icon({
  as,
  size = 24,
  hasWrapper = false,
  wrapperClassName,
  className,
  ...rest
}: IconProps) {
  const SvgElement = as;

  function IconItem() {
    return (
      <span className={cn("icon w-6 h-6", className)} {...rest}>
        <SvgElement viewBox="0 0 24 24" width={size} height={size} />
      </span>
    );
  }

  return hasWrapper ? (
    <div
      className={cn(
        "grid place-content-center w-8 h-8 rounded-full bg-grey-light",
        wrapperClassName
      )}
    >
      <IconItem />
    </div>
  ) : (
    <IconItem />
  );
}

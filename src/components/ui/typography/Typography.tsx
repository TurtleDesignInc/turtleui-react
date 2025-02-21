import { HTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/utils/shadcn";
import { bodyTextVariants, headingTextVariants } from "./utils";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type TextTag = "p" | "span";

export type HeadingTextProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingTextVariants> & {
    as?: HeadingTag;
  };

export function HeadingText({
  as = "h1",
  className,
  level,
  ...props
}: HeadingTextProps) {
  // Transform the HTML tag into a heading one, e.g. <h1 />
  const Tag = as;

  return (
    <Tag
      className={cn(
        headingTextVariants({
          level,
        }),
        className
      )}
      {...props}
    />
  );
}

export type BodyTextProps = HTMLAttributes<
  HTMLParagraphElement | HTMLSpanElement
> &
  VariantProps<typeof bodyTextVariants> & {
    as?: TextTag;
  };

export function BodyText({
  as = "p",
  className,
  size,
  weight,
  link,
  ...props
}: BodyTextProps) {
  // Transform the HTML tag into `p` or `span`
  const Tag = as;

  return (
    <Tag
      className={cn(
        bodyTextVariants({
          size,
          weight,
          link,
        }),
        className
      )}
      {...props}
    />
  );
}

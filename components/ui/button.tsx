"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@sohanemon/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { useRouter } from "next-nprogress-bar";

const buttonVariants = cva(
  `inline-flex items-center justify-center font-bold font-serif whitespace-nowrap rounded-lg text-base ring-offset-background transition-colors
  focus-visible:outline-none focus-visible:ring-2 gap-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:brightness-75`,
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-primary to-primary-alt text-primary-foreground hover:opacity-90",
        destructive:
          "bg-danger-btn text-destructive-foreground hover:bg-danger-btn/90",
        // note: gradient border with trick
        outline:
          "bg-background border-2 border-transparent bg-clip-padding relative hover:bg-background/90 hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        neutral: "hover:bg-[#4B5563] border-[#6B7280] text-[#D1D5DB]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-3 md:px-10 py-2",
        sm: "h-10 rounded-lg px-3",
        lg: "h-10 rounded-lg px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      href,
      asChild = false,
      onClick,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    const { push } = useRouter();

    // note: wrapper for disabling react warning
    const TextGradientWrapper = ({
      children,
    }: {
      children: React.ReactNode;
    }) =>
      variant === "outline" ? (
        <span className="min-h-fit whitespace-nowrap bg-gradient-to-r from-primary to-primary-alt-text bg-clip-text text-transparent">
          {children}
        </span>
      ) : (
        children
      );

    const OutlineGradientWrapper = ({
      children,
    }: {
      children: React.ReactNode;
    }) =>
      variant === "outline" ? (
        <div
          className={cn(
            "rounded-lg bg-gradient-to-r from-primary to-primary-alt hover:bg-background/90 hover:text-accent-foreground",
            className,
          )}
        >
          {children}
        </div>
      ) : (
        children
      );

    return (
      <OutlineGradientWrapper>
        <Comp
          ref={ref}
          className={cn(
            buttonVariants({
              variant,
              size,
              className: variant === "outline" ? "size-full" : className,
            }),
          )}
          // note: enables power of link & button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            href && push(href);
            onClick && onClick(e);
          }}
          {...props}
        >
          <TextGradientWrapper>{children}</TextGradientWrapper>
        </Comp>
      </OutlineGradientWrapper>
    );
  },
);
Button.displayName = "Button";

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };

'use client';

import { Slot } from '@radix-ui/react-slot';
import { cn } from '@sohanemon/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import * as React from 'react';
import { LinkStatus } from '../link-status';
import { Spinner } from '../spinner';
import { withTooltip } from './tooltip';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-1 whitespace-nowrap rounded border border-primary/50 font-semibold text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        opacity:
          'bg-primary/10 text-primary border-primary/30 hover:bg-primary/5',
        'opacity-bordered':
          'bg-primary/10 text-primary border-primary/30 hover:bg-primary/5',
        destructive:
          'border-current bg-destructive text-destructive-foreground hover:bg-destructive/90',
        'destructive-outline':
          'border border-destructive hover:bg-destructive/10 text-destructive',
        outline: 'border border-current text-accent hover:bg-accent/10',
        'dark-outline':
          'border border-foreground-dark text-foreground-dark hover:bg-background-dark/10',

        success: 'border border-current text-success hover:bg-success/10',
        muted:
          'border border-muted/50 text-muted hover:border-muted hover:bg-muted/10',
        light:
          'border-transparent bg-light font-normal text-muted text-xs hover:border-border hover:bg-primary/5',
        suggestion:
          'h-auto min-h-9 items-start justify-start gap-3 whitespace-normal border-transparent bg-primary/5 py-2 text-left font-normal text-foreground hover:border-primary',
        icon: 'grid aspect-square place-content-center border border-input bg-background p-0 hover:bg-accent/10',
        secondary:
          'border-background bg-background text-foreground hover:bg-background/80',
        gradient:
          'bg-gradient-to-r from-tertiary to-primary hover:from-tertiary/90 hover:to-primary/90 text-white shadow-tertiary/25',
        ghost: 'border-transparent hover:bg-accent/10 hover:text-accent',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 min-w-20 px-2.5',
        sm: 'h-8 rounded px-2 font-normal ',
        xs: 'h-7 rounded px-1.5 text-xs [&>svg]:text-base',
        lg: 'h-11 rounded-md px-8 text-lg',
        icon: 'h-10 w-10',
        'icon-sm': 'h-8 w-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

type ButtonVariants = VariantProps<typeof buttonVariants>['variant'];

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
  as?: React.ElementType;
  target?: '_blank' | '_self' | '_parent' | '_top';
  loading?: boolean;
}

const _Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      href,
      loading,
      asChild = false,
      as,
      disabled,
      target,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = as ?? (asChild ? Slot : 'button');

    return (
      <Comp
        disabled={loading || disabled}
        ref={ref}
        className={cn(
          'relative isolate',
          'has-[.spinner]:[&_.button-children]:opacity-0',
          props.role === 'group' // NOTE:  unstyled
            ? className
            : buttonVariants({ variant, size, className }),
        )}
        suppressHydrationWarning
        {...props}
      >
        <>
          {href && (
            <Link
              target={target}
              // TODO: re-enable later
              prefetch={false}
              href={href}
              className="absolute inset-0"
            >
              <LinkStatus className="absolute inset-0 size-full" />
            </Link>
          )}
          {loading && <Spinner inline className="absolute inset-0 size-full" />}
          <span
            className={cn(
              'button-children gap-[inherit] [align-items:inherit] [display:inherit]',
            )}
          >
            {children}
          </span>
        </>
      </Comp>
    );
  },
);
_Button.displayName = 'Button';
const Button = withTooltip(_Button);

export { Button, buttonVariants, type ButtonVariants };

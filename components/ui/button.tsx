'use client';

import { Slot } from '@radix-ui/react-slot';
import { cn } from '@sohanemon/utils';
import { Iconify } from '@sohanemon/utils/components';
import { type VariantProps, cva } from 'class-variance-authority';
import { useRouter } from 'next/navigation';
import type * as React from 'react';
import { useFormStatus } from 'react-dom';
import { withTooltip } from './tooltip';

const buttonVariants = cva(
  'inline-flex items-center items-center justify-center gap-1 whitespace-nowrap rounded-md font-medium text-sm ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
  loading?: boolean;
}

const _Button = ({
  ref,
  className,
  variant,
  size,
  href,
  loading,
  asChild = false,
  onClick,
  children,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button';

  const { push, back } = useRouter();
  const { pending } = useFormStatus();

  return (
    <Comp
      disabled={loading}
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      // note: enables power of link & button
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        href === '-1' ? back() : href && push(href);
        onClick?.(e);
      }}
      {...props}
    >
      {loading || pending ? (
        <Iconify icon="tabler:loader-2" className="animate-spin text-lg" />
      ) : (
        children
      )}
    </Comp>
  );
};

_Button.displayName = 'Button';
const Button = withTooltip(_Button);

export { Button, buttonVariants };

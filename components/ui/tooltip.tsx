'use client';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import type * as React from 'react';

import { cn } from '@sohanemon/utils';

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = ({
  ref,
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'fade-in-0 zoom-in-95 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 animate-in overflow-hidden rounded-md border border-foreground/40 bg-popover px-3 py-1.5 text-popover-foreground text-sm shadow-md data-[state=closed]:animate-out',
      className,
    )}
    {...props}
  />
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const withTooltip = <T extends object>(
  WrappedComponent: React.ComponentType<T>,
) => {
  const ComponentWithTooltip: React.FC<T & { tooltipText?: string }> = ({
    tooltipText,
    ...props
  }) => {
    if (tooltipText)
      return (
        <TooltipProvider delayDuration={500}>
          <Tooltip>
            <TooltipTrigger asChild>
              <WrappedComponent {...(props as T)} />
            </TooltipTrigger>
            <TooltipContent sideOffset={10}>
              <p>{tooltipText}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    return <WrappedComponent {...(props as T)} />;
  };

  return ComponentWithTooltip;
};

export {
  Tooltip,
  withTooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
};

import { cn } from '@sohanemon/utils';
import { Iconify } from '@sohanemon/utils/components';
import type * as React from 'react';
import { Motion } from './motion';

type LoaderProps = React.ComponentProps<typeof Motion> & {
  text?: string;
  overlay?: boolean;
  inline?: boolean;
};

export function Spinner({
  className,
  text,
  overlay,
  inline,
  ...props
}: LoaderProps) {
  return (
    <Motion
      as="center"
      aria-label="Loading"
      role="spinbutton"
      initial="collapsed"
      className={cn(
        'spinner grid size-full place-content-center',
        'animate-fade-zoom-in',
        overlay && 'pointer-events-none fixed inset-0 z-[9999] bg-background',
        inline && 'inline-grid size-fit',
        className,
      )}
      {...props}
    >
      {inline ? (
        <Iconify className="animate-spin text-lg" icon="tabler:loader-2" />
      ) : (
        <div className="space-y-3">
          <Iconify icon="lucide:loader" className="size-5 animate-spin" />
          {text && <p className="text-muted text-sm">{text}</p>}
        </div>
      )}
    </Motion>
  );
}

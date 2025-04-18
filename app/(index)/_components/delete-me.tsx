import { Motion } from '@/components/motion';
import { motionVariants } from '@/lib/config/variants/motion.variant';
import { cn } from '@sohanemon/utils';
import type * as React from 'react';

type DeleteMeProps = React.ComponentProps<'div'>;

export function DeleteMe({ className, ...props }: DeleteMeProps) {
  const variants = Object.keys(motionVariants) as Array<
    keyof typeof motionVariants
  >;

  return (
    <div className={cn('space-y-6 p-6', className)} {...props}>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
        {variants.map((variant) => (
          <div
            key={variant}
            className={cn(
              'flex flex-col items-center rounded bg-white p-2 shadow',
            )}
          >
            <Motion
              className="mb-2 h-16 w-16 rounded bg-gradient-to-br from-indigo-200 to-indigo-400"
              initial="visible"
              duration={2}
              variants={motionVariants}
              whileHover={variant}
            />
            <span className="font-mono text-xs">{variant}</span>
          </div>
        ))}
      </div>

      <p className="text-gray-600 text-sm">
        Hover the green squares to see pulsing, tap for shaking, and scroll to
        draw SVG paths and waves.
      </p>
    </div>
  );
}

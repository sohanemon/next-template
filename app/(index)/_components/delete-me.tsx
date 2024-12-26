import { Motion } from '@/components/motion';
import { cn } from '@sohanemon/utils';
import type * as React from 'react';

type DeleteMeProps = React.ComponentProps<'div'>;

export function DeleteMe({ className, ...props }: DeleteMeProps) {
  return (
    <div className={cn(className)} {...props}>
      <Motion
        whileHover={{ scale: 2 }}
        duration={3}
        className="h-10 bg-rose-500"
        initial="top-full"
      />
      <Motion duration={2} className="h-10 bg-blue-500" initial="top" />
      <Motion
        duration={2}
        delay={3}
        className="h-10 bg-yellow-500"
        initial="left"
      />
      <Motion duration={2} className="h-10 bg-red-500" initial="right" />
      <Motion
        delay={3}
        duration={2}
        className="h-10 bg-purple-500"
        initial="collapsed"
      />
      <Motion duration={2} className="h-10 bg-pink-500" initial="collapsed-x" />
      <Motion
        duration={2}
        delay={3}
        className="h-10 bg-orange-500"
        initial="collapsed-y"
      />
      <Motion duration={2} className="h-10 bg-gray-500" initial="hidden" />
      <Motion duration={2} className="h-10 bg-teal-500" initial="visible" />
      <Motion
        duration={2}
        className="h-10 bg-indigo-500"
        initial="spring"
        animate={{ borderRadius: '50%' }}
      />

      <Motion duration={3} className="h-10 bg-lime-500" initial="left-full" />
      <Motion duration={3} className="h-10 bg-amber-500" initial="right-full" />
      <Motion duration={2} className="h-10 bg-green-500" initial="bottom" />
      <Motion duration={3} className="h-10 bg-cyan-500" initial="bottom-full" />
    </div>
  );
}

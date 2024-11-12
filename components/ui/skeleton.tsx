import { cn } from '@sohanemon/utils';

function Skeleton({
  className,
  shimmer,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { shimmer?: boolean }) {
  return (
    <div
      className={cn(
        'relative',
        'before:-translate-x-full ',
        'bg-primary/20 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-primary/10 before:to-transparent',
        'isolate overflow-hidden shadow-sm before:border-primary/10 before:border-t',
        shimmer && 'before:animate-[shimmer_2s_infinite]',
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };

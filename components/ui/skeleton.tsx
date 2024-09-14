import { cn } from '@sohanemon/utils';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'relative',
        'before:-translate-x-full before:animate-[shimmer_2s_infinite]',
        'bg-primary/5 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-primary/10 before:to-transparent',
        'isolate overflow-hidden shadow-sm before:border-primary/10 before:border-t',
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };

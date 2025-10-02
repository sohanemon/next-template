import { useAnimate, useInView } from 'motion/react';
import * as React from 'react';

type AnimateCallback = (args: {
  animate: ReturnType<typeof useAnimate>[1];
  inView: boolean;
  container: HTMLDivElement;
}) => Promise<void> | void;

export const useAnimationEffect = (callback: AnimateCallback) => {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const isInView = useInView(scope);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Reduce extra render
  React.useEffect(() => {
    callback({ inView: isInView, animate, container: scope.current });
  }, [isInView]);

  return scope;
};

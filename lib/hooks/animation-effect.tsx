import { useAnimate, useInView } from 'framer-motion';
import * as React from 'react';

type AnimateCallback = (args: {
  animate: ReturnType<typeof useAnimate>[1];
  inView: boolean;
}) => Promise<void> | void;

export const useAnimationEffect = (callback: AnimateCallback) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Reduce extra render
  React.useEffect(() => {
    callback({ inView: isInView, animate });
  }, [isInView]);

  return scope;
};

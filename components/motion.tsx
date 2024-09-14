'use client';
import * as React from 'react';

import { type Variants, motion } from 'framer-motion';

import {
  type MotionVariantsType,
  motionVariants,
} from '@/lib/config/variants/motion.variant';

interface MotionProps extends React.ComponentPropsWithRef<'div'> {
  as?: React.ElementType;
  variants?: Variants;
  always?: boolean;
  initial?: MotionVariantsType | MotionVariantsType[];
  animate?: MotionVariantsType | MotionVariantsType[];
  exit?: MotionVariantsType | MotionVariantsType[];
}

const Component = React.forwardRef<HTMLDivElement, MotionProps>(
  ({ variants, as = 'div', ...props }, ref) => {
    const Comp = as;
    return <Comp ref={ref} {...props} />;
  },
);

Component.displayName = 'Motion';
const MotionComponent = motion(Component);

const withVariants = (Comp: typeof MotionComponent) => {
  return React.forwardRef<
    HTMLElement,
    React.ComponentPropsWithRef<typeof Comp>
  >(({ transition, always, whileInView, ...props }, ref) => {
    const id = React.useId();
    return (
      <Comp
        key={id}
        ref={ref}
        variants={motionVariants}
        viewport={{ once: !always }}
        whileInView={props.animate ? undefined : whileInView || 'visible'}
        transition={{
          duration: 0.3,
          ...transition,
        }}
        {...props}
      />
    );
  });
};

export const Motion = withVariants(MotionComponent);

export const MotionDiv = motion.div;

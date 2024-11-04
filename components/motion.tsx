'use client';
import * as React from 'react';

import { motion } from 'framer-motion';

import {
  type MotionVariantsType,
  motionVariants,
} from '@/lib/config/variants/motion.variant';
import { Slot } from '@radix-ui/react-slot';
import { useMediaQuery } from '@sohanemon/utils/hooks';

type MotionProps = React.ComponentProps<typeof motion.div> & {
  as?: React.ElementType;
  asChild?: boolean;
  always?: boolean;
  initial?: MotionVariantsType | MotionVariantsType[];
  animate?: MotionVariantsType | MotionVariantsType[];
  exit?: MotionVariantsType | MotionVariantsType[];
};

const Component = React.forwardRef<HTMLDivElement, MotionProps>(
  ({ as = 'div', asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : as;
    return <Comp ref={ref} {...props} />;
  },
);

Component.displayName = 'Motion';
const MotionComponent = motion.create(Component);

type MotionQuery = {
  breakpoint?: Parameters<typeof useMediaQuery>[0];
  mediaProps?: React.ComponentProps<typeof MotionComponent>;
  delay?: number;
  duration?: number;
};
const withVariants = (Comp: typeof MotionComponent) => {
  return ({
    transition,
    always,
    whileInView,
    variants,
    breakpoint = 'lg',
    mediaProps,
    delay,
    duration = 0.5,
    ...props
  }: React.ComponentProps<typeof Comp> & MotionQuery) => {
    const id = React.useId();
    const sm = !useMediaQuery(breakpoint);

    const baseProps = {
      variants: variants || motionVariants,
      viewport: { once: !always },
      whileInView:
        (sm && mediaProps?.whileInView) ||
        whileInView ||
        (props.animate ? undefined : 'visible'),
      transition: {
        type: 'spring',
        duration,
        delay,
        ...transition,
        ...(sm ? mediaProps?.transition : {}),
      },
    };
    return (
      <Comp
        suppressHydrationWarning
        key={id}
        {...baseProps}
        {...(sm ? { ...props, ...mediaProps } : props)}
      />
    );
  };
};

export const MDiv = motion.div;
export const RawMotion = MotionComponent;
export const Motion = withVariants(MotionComponent);

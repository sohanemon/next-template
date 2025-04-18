'use client';
import * as React from 'react';

import { motion } from 'motion/react';

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

export const MotionPrimitive = motion.create(
  React.forwardRef<HTMLDivElement, MotionProps>(
    ({ as = 'div', asChild, ...props }, ref) => {
      const Comp = asChild ? Slot : as;
      return <Comp ref={ref} {...props} />;
    },
  ),
);

type MotionPrimitiveType = typeof MotionPrimitive;

type MotionQuery = {
  breakpoint?: Parameters<typeof useMediaQuery>[0];
  mediaProps?: React.ComponentProps<MotionPrimitiveType>;
  delay?: number;
  duration?: number;
} & React.ComponentProps<'div'>;

const withVariants = <C extends MotionPrimitiveType>(
  Comp: MotionPrimitiveType,
) => {
  type EnhancedProps = React.ComponentProps<C> &
    MotionQuery & {
      animate?: MotionVariantsType | MotionVariantsType[];
      initial?: MotionVariantsType | MotionVariantsType[];
      exit?: MotionVariantsType | MotionVariantsType[];
    };

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
  }: EnhancedProps) => {
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
        key={id}
        {...baseProps}
        {...(sm ? { ...props, ...mediaProps } : props)}
      />
    );
  };
};

export const RawMotion = motion.div;
export const Motion = withVariants(MotionPrimitive);

import type { VariantLabels, Variants } from 'motion/react';

const defaultVariants = {
  left: { x: -300, opacity: 0 },
  right: { x: 300, opacity: 0 },
  top: { y: -100, opacity: 0 },
  bottom: { y: 100, opacity: 0, scale: 0.9 },
  collapsed: { opacity: 0, scale: 0 },
  'collapsed-x': { scaleX: 0, transformOrigin: 'left' },
  'collapsed-y': { scaleY: 0, transformOrigin: 'top' },
  hidden: { opacity: 0 },
  visible: { x: 0, y: 0, opacity: 1, scale: 1, scaleX: 1, scaleY: 1 },
  spring: {
    transition: { type: 'spring', stiffness: 500, damping: 30 },
  },
} satisfies Variants;

const fullPosition = {
  'left-full': { x: '-99%', opacity: 0 },
  'right-full': { x: '99%', opacity: 0 },
  'top-full': { y: '-99%', opacity: 0 },
  'bottom-full': { y: '99%', opacity: 0 },
} satisfies Variants;

export const motionVariants = {
  ...defaultVariants,
  ...fullPosition,
} as const satisfies Variants;

export type MotionVariantsType =
  | keyof typeof motionVariants
  | Omit<VariantLabels, keyof (keyof typeof motionVariants)>;

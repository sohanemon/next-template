import type { VariantLabels, Variants } from 'motion/react';

const defaultVariants = {
  left: { x: '-10%', opacity: 0 },
  right: { x: '10%', opacity: 0 },
  top: { y: '-10%', opacity: 0 },
  bottom: { y: '10%', opacity: 0, scale: 0.9 },
  collapsed: { opacity: 0, scale: 0 },
  'collapsed-x': { scaleX: 0, transformOrigin: 'left' },
  'collapsed-y': { scaleY: 0, transformOrigin: 'top' },
  hidden: { opacity: 0 },
  visible: { x: 0, y: 0, opacity: 1, scale: 1, scaleX: 1, scaleY: 1 },
  spring: {
    transition: { type: 'spring', stiffness: 500, damping: 30 },
  },
  rotate: { rotate: 360, opacity: 1 },
  flip: { rotateY: 180, opacity: 1 },
  skew: { skewX: 45, skewY: 10, opacity: 1 },
  bounce: { y: [0, -20, 0], transition: { type: 'spring', bounce: 0.5 } },
  shake: { x: [0, -10, 10, -10, 10, 0], transition: { duration: 0.6 } },
  pulse: {
    scale: [1, 1.2, 1],
    transition: { repeat: Number.POSITIVE_INFINITY, duration: 1 },
  },
  wave: { pathLength: [0, 1], opacity: [0, 1], transition: { duration: 1 } },
  pathDraw: { pathLength: 1, opacity: 1, transition: { duration: 2 } },
  tilt3D: { perspective: 600, rotateX: 15, rotateY: 15, opacity: 1 },
  zoom: { scale: 1.5, opacity: 1, transition: { duration: 0.5 } },
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

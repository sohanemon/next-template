import { cva } from 'class-variance-authority';

export const textVariants = cva([], {
  variants: {
    intent: {
      heading: 'text-5xl',
    },
    size: {
      default: 'text-base',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

import dynamic from 'next/dynamic';

// for fixing nextjs ssr error

export const MediaWrapper = dynamic(
  () => import('@sohanemon/utils/components').then((m) => m.MediaWrapper),
  {
    ssr: false,
  },
);

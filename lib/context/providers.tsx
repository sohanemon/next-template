'use client';

import { AppProgressBar } from 'next-nprogress-bar';
import dynamic from 'next/dynamic';

const ResponsiveIndicator = dynamic(
  () =>
    import('@sohanemon/utils/components').then((m) => m.ResponsiveIndicator),
  { ssr: false },
);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppProgressBar
        shallowRouting
        color="var(--color-primary)"
        height="2px"
        options={{ showSpinner: false }}
      />
      {children}
      <ResponsiveIndicator />
    </>
  );
}

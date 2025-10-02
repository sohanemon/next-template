'use client';

import { ProgressProvider } from '@bprogress/next/app';
import dynamic from 'next/dynamic';

const ResponsiveIndicator = dynamic(
  () =>
    import('@sohanemon/utils/components').then((m) => m.ResponsiveIndicator),
  { ssr: false },
);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgressProvider
        shallowRouting
        color="var(--color-primary)"
        height="0.2rem"
        options={{ showSpinner: false }}
      >
        {children}
      </ProgressProvider>
      <ResponsiveIndicator />
    </>
  );
}

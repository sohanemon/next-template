'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';

export default function GlobalError({
  error,
  reset,
  onResetAction,
  extraButton,
}: {
  error: Error & { digest?: string };
  reset: () => void;
  onResetAction?: () => void;
  extraButton?: React.ReactNode;
}) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  const isDevelopment = process.env.NODE_ENV === 'development';

  function handleReset() {
    onResetAction?.();
    reset();
  }

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12 text-center">
          <h1 className="font-bold text-4xl text-foreground tracking-tight sm:text-5xl">
            {isDevelopment
              ? 'Development Error'
              : 'Oops! Something went wrong.'}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {isDevelopment
              ? `Error: ${error.message}`
              : 'We apologize for the inconvenience. Please try again later.'}
          </p>
          <div className="mt-6 flex gap-3">
            <Button onClick={handleReset}>Try again</Button>
            {extraButton}
          </div>
          {isDevelopment && error.digest && (
            <p className="mt-4 text-muted-foreground text-sm">
              Digest: {error.digest}
            </p>
          )}
        </div>
      </body>
    </html>
  );
}

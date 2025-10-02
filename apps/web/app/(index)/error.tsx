'use client';

import GlobalError from '../global-error';

export default function GlobalErro(props: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <GlobalError
      onResetAction={() => {
        window.location.reload();
      }}
      {...props}
    />
  );
}

'use client';
import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  function handleReset() {
    startTransition(() => {
      reset();
      router.refresh();
    });
  }

  return (
    <center className="min-h-[50vh]">
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button className="rounded-lg border px-2 py-1" onClick={handleReset}>
        Try again
      </button>
    </center>
  );
}

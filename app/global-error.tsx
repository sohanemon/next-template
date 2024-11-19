'use client';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="el">
      <body>
        <center>
          <h2>Global Error: Something went wrong!</h2>
          <button onClick={() => reset()}>Try again</button>
        </center>
      </body>
    </html>
  );
}

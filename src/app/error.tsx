'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <p className="text-mono text-xs uppercase tracking-[0.3em] text-signal">
          [ Error ]
        </p>
        <h1 className="mt-4 text-display text-4xl font-semibold">
          Something broke.
        </h1>
        <p className="mt-4 text-muted-foreground">
          An unexpected error occurred. Try again or head back to the homepage.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={reset}
            className="rounded-full bg-signal text-signal-foreground px-6 py-3 text-mono text-xs uppercase tracking-[0.2em] hover:bg-signal/90 transition cursor-hover"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-full border border-border px-6 py-3 text-mono text-xs uppercase tracking-[0.2em] hover:border-signal hover:text-signal transition-colors cursor-hover"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

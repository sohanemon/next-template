'use client';

import { scrollTo } from '@sohanemon/utils';
import { useEffect, useRef } from 'react';

export function GoToTop() {
  const goToTopRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 700 ||
        document.documentElement.scrollTop > 700
      ) {
        goToTopRef.current?.classList.remove('hidden');
      } else {
        goToTopRef.current?.classList.add('hidden');
      }
    };

    return () => {};
  }, []);

  return (
    <>
      <button
        ref={goToTopRef}
        className="fixed right-6 bottom-6 z-50 hidden size-6 md:right-10 md:bottom-10 md:size-10"
        title="Go To Top"
        onClick={() => scrollTo({ current: window as any }, 'top')}
      >
        <div className="grid size-full place-content-center rounded-full bg-primary/80 text-foreground shadow-md hover:bg-primary">
          <svg
            className="size-4 md:size-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" />
          </svg>
        </div>
        <span className="sr-only">Go to top</span>
      </button>
    </>
  );
}

'use client';

import { scrollTo } from '@sohanemon/utils';
import { Iconify } from '@sohanemon/utils/components';
import { AnimatePresence } from 'framer-motion';
import * as React from 'react';
import { Motion } from './motion';

export function GoToTop() {
  const [shouldRender, setShouldRender] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 700 ||
        document.documentElement.scrollTop > 700
      )
        setShouldRender(true);
      else setShouldRender(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {shouldRender && (
        <Motion
          as="button"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed right-6 bottom-6 z-50 size-10 md:right-10 md:bottom-10 md:size-12"
          title="Go To Top"
          onClick={() => scrollTo({ current: window as any }, 'top')}
          aria-label="Go to top"
        >
          <div className="grid size-full cursor-pointer place-content-center rounded-full bg-primary/80 text-primary-foreground shadow-md transition-colors hover:bg-primary">
            <Iconify icon="lucide:chevron-up" className="size-6" />
          </div>
          <span className="sr-only">Go to top</span>
        </Motion>
      )}
    </AnimatePresence>
  );
}

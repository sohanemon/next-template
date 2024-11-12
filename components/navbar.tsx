'use client';

import { cn, isNavActive } from '@sohanemon/utils';
import { Iconify } from '@sohanemon/utils/components';
import { useClickOutside, useMediaQuery } from '@sohanemon/utils/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { siteConfig } from '@/lib/config/site';
import useDisableScroll from '@/lib/hooks/disable-scroll';
import useNavToggle from '@/lib/hooks/nav-toggle';
import { Brand } from './brand';
import { Motion } from './motion';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { hidden, leaved } = useNavToggle();
  const sm = useMediaQuery('sm');

  return (
    <Motion
      animate={!sm && hidden ? 'top' : 'visible'}
      transition={{ delay: 0.1, duration: 0.5, type: 'just' }}
      className={cn('sticky inset-x-0 top-0 z-40 bg-card', {
        'bg-card/50 shadow-foreground/10 shadow-lg backdrop-blur-md': leaved,
      })}
    >
      <nav className="container flex items-center justify-between py-4">
        <Brand />
        <NavContent />
        <Iconify
          className="mr-1 cursor-pointer text-2xl text-foreground lg:hidden"
          icon={isMenuOpen ? 'lucide:x' : 'lucide:menu'}
          onClick={() => setIsMenuOpen((p) => !p)}
        />
      </nav>
      {isMenuOpen && <NavContentMob setIsMenuOpen={setIsMenuOpen} />}
    </Motion>
  );
}

const NavContent = () => {
  const path = usePathname();
  return (
    <>
      <ul className="ml-20 flex items-center gap-12 max-lg:hidden ">
        {siteConfig.nav.map((_) => (
          <li
            key={_.title}
            className={cn('relative', {
              'text-primary': isNavActive(_.href, path),
            })}
          >
            <h3 className="px-3 capitalize">
              <Link href={_.href}>{_.title}</Link>
            </h3>
            {isNavActive(_.href, path) && (
              <Motion
                as="span"
                className="-z-10 absolute inset-x-0 bottom-0 h-px rounded-md bg-primary/80 "
                layoutId="nav-bg"
              />
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

const NavContentMob = ({ setIsMenuOpen }: { setIsMenuOpen: Function }) => {
  const ref = useClickOutside(() =>
    setTimeout(() => setIsMenuOpen(false), 200),
  );
  useDisableScroll();

  return (
    <Motion
      className={cn(
        'absolute inset-x-0 flex flex-col items-start gap-4 rounded-b-xl bg-background p-5 shadow-xl lg:hidden',
        'bg-card/90 shadow-foreground/10 shadow-lg backdrop-blur-xl',
      )}
      asChild
      initial="collapsed-y"
    >
      <div ref={ref}>
        {siteConfig.nav.map((_) => (
          <button key={_.title} onClick={() => setIsMenuOpen(false)}>
            <span className="capitalize hover:text-primary/50">
              <Link href={_.href}>{_.title}</Link>
            </span>
          </button>
        ))}
      </div>
    </Motion>
  );
};

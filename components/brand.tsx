import { cn } from '@sohanemon/utils';
import Link from 'next/link';
import type { HtmlHTMLAttributes } from 'react';
import { Img } from './image';

export function Brand({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link href={'/'} {...props} className={cn('', className)}>
      <Img width={40} height={40} src="/favicon.png" />
    </Link>
  );
}

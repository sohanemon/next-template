'use client';

import { cn } from '@sohanemon/utils';
import { useLinkStatus } from 'next/link';
import type * as React from 'react';
import { Spinner } from './spinner';

type LinkStatusProps = React.ComponentProps<typeof Spinner>;

export function LinkStatus({ className, ...props }: LinkStatusProps) {
  const { pending } = useLinkStatus();
  if (pending) return <Spinner inline className={cn(className)} {...props} />;
  return null;
}

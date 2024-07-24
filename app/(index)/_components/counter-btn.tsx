'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@sohanemon/utils';
import type * as React from 'react';
import { counter } from '../_lib/counter.signal';

type CounterBtnProps = React.ComponentProps<'div'>;

export function CounterBtn({ className, ...props }: CounterBtnProps) {
  return (
    <div className={cn(className)} {...props}>
      <center className="text-3xl">{counter}</center>
      <br />
      <div className="flex justify-center gap-4">
        <Button onClick={() => --counter.value} variant={'destructive'}>
          Decrement
        </Button>
        <Button onClick={() => ++counter.value}>Increment</Button>
      </div>
      <br />
      <center>No unnecessary rerenders 😀</center>
    </div>
  );
}

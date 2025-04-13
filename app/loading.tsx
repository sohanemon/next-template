import { Brand } from '@/components/brand';
import { Motion } from '@/components/motion';

export default function Loading() {
  return (
    <Motion
      layoutId="main-loading"
      className="fixed inset-0 z-100 grid min-h-screen place-content-center bg-background text-3xl"
    >
      <Brand className="animate-pulse" />
    </Motion>
  );
}

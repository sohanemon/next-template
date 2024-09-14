import { Brand } from '@/components/brand';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] grid min-h-screen place-content-center bg-background text-3xl">
      <Brand className="animate-pulse" />
    </div>
  );
}

'use client';
import { Img } from '@/components/image';

// export const metadata = {
//   title: 'Image',
// };

const images = [
  'https://images.unsplash.com/photo-1694802491008-a528234a9a2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

export default function ImagePage() {
  return (
    <main className="min-h-[600vh]">
      <div className="flex gap-3 overflow-x-scroll scrollbar-hidden">
        {images.map((img) => (
          <Img key={img} src={img} width={2000} />
        ))}
      </div>
    </main>
  );
}

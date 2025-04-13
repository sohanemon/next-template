import { Img } from '@/components/image';

export const metadata = {
  title: 'Image',
};

const images = [
  'https://images.unsplash.com/photo-1694802491008-a528234a9a2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1694198194705-989899bf415f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1693086312013-573330da429c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1694198194705-989899bf415f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1693086312013-573330da429c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

export default function ImagePage() {
  return (
    <main className="container min-h-[600vh]">
      <div className="scrollbar-hidden tab-[200px] grid-auto-fill-300 grid gap-3 overflow-x-scroll">
        {images.map((img) => (
          <Img placeholder="blur" key={img} src={img} width={2000} />
        ))}
      </div>
    </main>
  );
}

import { Img } from '@/components/image';
import { Motion } from '@/components/motion';

export const metadata = {
  title: 'Home',
};

export default function IndexPage() {
  return (
    <section className="min-h-[2000vh] container">
      <div className="my-5 text-3xl ">hello</div>
      <Motion initial="top">
        <h4 className="mt-20 text-7xl ">
          Update Readme, Site.ts and package.json
        </h4>
      </Motion>
      <div className="flex gap-3 overflow-x-scroll scrollbar-hidden">
        <Img
          src="https://images.unsplash.com/photo-1603906482627-4d88dd3c843e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          placeholder="shimmer"
        />
      </div>
    </section>
  );
}

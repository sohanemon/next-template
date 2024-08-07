import { Img } from '@/components/image';
import { MediaWrapper } from '@/components/media-wrapper';
import { Motion } from '@/components/motion';
import { Button } from '@/components/ui/button';
import { CounterBtn } from './_components/counter-btn';

export const metadata = {
  title: 'Home',
};

export default async function IndexPage() {
  return (
    <section className="min-h-[2000vh] container">
      <div className="my-5 text-3xl ">hello</div>
      <Motion initial="top">
        <h4 className="mt-20 text-7xl ">
          Update Readme, Site.ts and package.json
        </h4>
      </Motion>
      <Img
        className="my-5 aspect-video rounded-md object-cover center-x"
        placeholder="shimmer"
        src={'https://images.unsplash.com/photo-1704722105454-2625cbecde68'}
      />
      <center>Lorem ipsum dolor sit amet consectetur adipisicing elit.</center>
      <div className="flex justify-center gap-4 flex-wrap">
        <Button>Hello</Button>
        <Button variant="outline">outline</Button>
        <Button variant="link">link</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="destructive">destructive</Button>
        <Button href="/image">lorem</Button>
      </div>
      <br />
      <CounterBtn />
    </section>
  );
}

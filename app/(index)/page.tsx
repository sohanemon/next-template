import { Motion } from '@/components/motion';
import { DeleteMe } from './_components/delete-me';
export const metadata = {
  title: 'Home',
};

export default function IndexPage() {
  return (
    <section className="container min-h-[2000vh]">
      <Motion initial="bottom">
        <h4 className="py-20 text-center text-7xl">
          Update Readme, Site.ts and package.json
        </h4>
      </Motion>
      <div className="bg-foreground size-10  center-x" />
      <DeleteMe />
    </section>
  );
}

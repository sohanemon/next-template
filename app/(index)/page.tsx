import { Motion } from '@/components/motion';
import { DeleteMe } from './_components/delete-me';
export const metadata = {
  title: 'Home',
};

export default function IndexPage() {
  return (
    <section className="container-mini min-h-[2000vh]">
      <Motion initial="bottom">
        <h4 className="container-mini py-20 text-center text-4xl">
          Update Readme, Site.ts and package.json
        </h4>
      </Motion>
      <DeleteMe />
    </section>
  );
}

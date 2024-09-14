import { Motion } from '@/components/motion';
export const metadata = {
  title: 'Home',
};

export default function IndexPage() {
  return (
    <section className="min-h-[2000vh] container">
      <Motion initial="bottom">
        <h4 className="mt-20 text-7xl text-center">
          Update Readme, Site.ts and package.json
        </h4>
      </Motion>
    </section>
  );
}

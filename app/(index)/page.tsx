import { Suspense } from 'react';

import { Img } from '@/components/image';

import { ThemeToggle } from './_components/theme-toggle';

export const metadata = {
  title: 'Home',
};
export default async function IndexPage() {
  return (
    <section>
      <h4 className="text-7xl mt-20 ">
        Update Readme, Site.ts and package.json
      </h4>
      <Img
        className="my-5 aspect-video rounded-md object-cover center-x"
        placeholder="shimmer"
        src={'https://images.unsplash.com/photo-1704722105454-2625cbecde68'}
        width={700}
      />
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      <Suspense fallback={<center>Loading ...</center>}>
        <ThemeToggle />
      </Suspense>
    </section>
  );
}

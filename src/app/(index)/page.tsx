import { Suspense } from 'react';

import { Text as P } from '@/components/ui/text';
import { Img } from '@/components/image';

import { server } from '../api/[...trpc]/trpc';
import { ThemeToggle } from './_components/theme-toggle';

export const metadata = {
  title: 'Home',
};
export default async function IndexPage() {
  const welcomeMessage = await server.getWelcomeMessage();
  return (
    <section>
      <P center className="mt-16 text-7xl">
        {welcomeMessage}
      </P>
      <Img
        className="my-5 aspect-video rounded-md object-cover center-x"
        placeholder="shimmer"
        src={'https://images.unsplash.com/photo-1704722105454-2625cbecde68'}
        width={700}
      />
      <center>{process.env.BASE_URL}</center>
      <center>{process.env.NEXT_PUBLIC_PUBLISHABLE_KEY}</center>
      <Suspense fallback={<center>Loading ...</center>}>
        <ThemeToggle />
      </Suspense>
    </section>
  );
}

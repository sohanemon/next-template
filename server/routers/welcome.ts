import { z } from 'zod';

import { publicProcedure, router } from '../trpc';

const welcomeRouter = router({
  getWelcomeMessage: publicProcedure.query(() => {
    return 'Update Readme, Site.ts and package.json';
  }),
  promptWelcomeMessage: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return `hello \`${input.name}\``;
    }),
});
export default welcomeRouter;

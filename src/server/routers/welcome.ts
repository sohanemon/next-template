import { z } from 'zod';

import { publicProcedure, router } from '../trpc';

const welcomeRouter = router({
  getWelcomeMessage: publicProcedure.query(() => {
    return 'hello';
  }),
  promptWelcomeMessage: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return `hello \`${input.name}\``;
    }),
});
export default welcomeRouter;

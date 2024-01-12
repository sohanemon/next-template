import { z } from 'zod';

import { procedure, router } from '../trpc';

const welcomeRouter = router({
  welcome: router({
    message: procedure.query(() => {
      return 'hello';
    }),
    prompt: procedure
      .input(z.object({ name: z.string() }))
      .query(({ input }) => {
        return `hello \`${input.name}\``;
      }),
  }),
});
export default welcomeRouter;

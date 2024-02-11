import welcomeRouter from './routers/welcome';
import { router } from './trpc';

export const appRouter = router({
  welcome: welcomeRouter,
});

export type AppRouter = typeof appRouter;

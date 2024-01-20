import { todoRouter } from './routers/todo';
import welcomeRouter from './routers/welcome';
import { mergeRouters } from './trpc';

export const appRouter = mergeRouters(welcomeRouter, todoRouter);

export type AppRouter = typeof appRouter;

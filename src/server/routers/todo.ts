import { revalidatePath } from 'next/cache';
import { z } from 'zod';

import { db } from '../../db/db';
import { todosTable } from '../../db/schema/todos';
import { publicProcedure, router } from '../trpc';

export const todoRouter = router({
  createTodo: publicProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      await db.insert(todosTable).values({
        name: input.name,
        description: input.description,
      });
      revalidatePath('/');
      return {
        name: input.name,
        description: input.description,
      };
    }),

  getTodos: publicProcedure.query(async () => {
    return await db.select().from(todosTable).all();
  }),
});

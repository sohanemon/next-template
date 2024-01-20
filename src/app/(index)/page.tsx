import { Suspense } from 'react';

import { Input } from '@/components/ui/input';
import { Text as P } from '@/components/ui/text';

import { server } from '../api/[...trpc]/trpc';
import { ThemeToggle } from './_components/theme-toggle';

export const metadata = {
  title: 'Home',
};
export default async function IndexPage() {
  const welcomeMessage = await server.getWelcomeMessage();
  const todos = await server.getTodos();
  console.log('🛑 ~ IndexPage ~ todos:', todos);

  const handleSubmit = async (formData: FormData) => {
    'use server';
    const res = await server.createTodo({
      name: formData.get('name') as string,
      description: formData.get('description') as string,
    });
    console.log('🛑 ~ handleSubmit ~ res:', res);
  };
  return (
    <section>
      <Suspense fallback={<center>Loading ...</center>}>
        <ThemeToggle />
      </Suspense>
      <P center className="mt-16 text-7xl">
        {welcomeMessage}
      </P>
      <form action={handleSubmit} className="container max-w-2xl space-y-4">
        <Input name="name" placeholder="name" />
        <Input name="description" placeholder="description" />
        <button type="submit">Submit</button>
      </form>
      <P center className="mt-16 text-7xl">
        All Todos
      </P>
      <ul className="container my-2 flex max-w-2xl list-decimal flex-col items-center *:mx-auto">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.name} - {todo.description}
          </li>
        ))}
      </ul>
    </section>
  );
}

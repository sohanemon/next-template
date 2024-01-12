import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/server/schema',
  out: './drizzle',
  driver: 'better-sqlite',
  dbCredentials: {
    url: 'todos.db',
  },
  verbose: true,
  strict: true,
});

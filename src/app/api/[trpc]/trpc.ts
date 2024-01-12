import { appRouter } from '@/server';
import { httpBatchLink } from '@trpc/client';

import { getBaseUrl } from '@/lib/utils';

export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api`,
    }),
  ],
});

import { isSSR } from '@sohanemon/utils/core';

export const getCookieStore = async () => {
  if (isSSR) return (await import('next/headers')).cookies();

  const mod = await import('@sohanemon/utils/core');
  return {
    get: mod.getClientSideCookie,
    set: (name: string, value: string) =>
      mod.setClientSideCookie(name, value, 30, '/'),
    has: mod.hasClientSideCookie,
    delete: mod.deleteClientSideCookie,
  };
};

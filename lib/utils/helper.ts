import { isSSR } from '@sohanemon/utils/core';

export const getCookieStore = async () => {
  if (isSSR) {
    const c = await (await import('next/headers')).cookies();
    return {
      get: c.get,
      delete: c.delete,
      has: c.has,
      set: (name: string, value: string, day = 30) =>
        c.set(name, value, {
          expires: new Date().getTime() + day * 24 * 60 * 60 * 1000,
          path: '/',
          secure: false,
          httpOnly: false,
        }),
    };
  }

  const mod = await import('@sohanemon/utils/core');
  return {
    get: mod.getClientSideCookie,
    set: (name: string, value: string) =>
      mod.setClientSideCookie(name, value, 30, '/'),
    has: mod.hasClientSideCookie,
    delete: mod.deleteClientSideCookie,
  };
};

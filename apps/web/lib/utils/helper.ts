import { isSSR } from '@sohanemon/utils/core';
import type { ReadonlyURLSearchParams } from 'next/navigation';

export const getPropertyValue = (variableName: string) =>
  getComputedStyle?.(document?.documentElement)?.getPropertyValue?.(
    variableName,
  );

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

export function getUrl(path = '') {
  const raw =
    [
      process.env.NEXT_PUBLIC_LIVE_URL,
      process.env.NEXT_PUBLIC_SITE_URL,
      process.env.NEXT_PUBLIC_VERCEL_URL,
    ].find((u) => typeof u === 'string' && u.trim() !== '') ||
    'http://localhost:3000';

  // NOTE: trim trailing slashes and ensure protocol
  let url = raw.trim().replace(/\/+$/, '');
  if (!/^https?:\/\//i.test(url)) {
    url = `https://${url}`;
  }

  const cleanPath = path.replace(/^\/+/, '');
  return cleanPath ? `${url}/${cleanPath}` : url;
}

export type LocationOptions = {
  query?: Record<string, string | number | boolean | undefined>;
  preserveParams?: boolean;
  replace?: boolean;
  withOrigin?: boolean;
};

export function createUrl(
  path: string,
  { preserveParams, query, withOrigin }: Omit<LocationOptions, 'replace'> = {
    preserveParams: true,
  },
) {
  const url = new URL(
    path,
    typeof window !== 'undefined'
      ? window.location.origin
      : 'http://localhost:3000',
  );
  const search = url.searchParams;

  if (preserveParams === false) {
    for (const key of search.keys()) {
      search.delete(key);
    }
  }

  for (const [key, value] of Object.entries(query ?? {})) {
    if (value === undefined || value === null) {
      search.delete(key);
    } else {
      search.set(key, String(value));
    }
  }

  if (withOrigin) return url.toString();

  const searchParams = url.searchParams.toString();
  return searchParams ? `${url.pathname}?${searchParams}` : url.pathname;
}

export const createLocation = (
  path: string,
  {
    query,
    preserveParams = true,
    pathname,
    searchParams,
    withOrigin,
  }: LocationOptions & {
    searchParams?: ReadonlyURLSearchParams;
    pathname?: string;
  } = {},
) => {
  const pathWithSearchParams = new URL(
    path,
    typeof window !== 'undefined'
      ? window.location.origin
      : 'http://localhost:3000',
  );
  if (searchParams) {
    for (const [key, value] of searchParams.entries()) {
      pathWithSearchParams.searchParams.append(key, value);
    }
  }

  const _query: Record<string, string | string[]> = {};

  searchParams?.forEach((value, key) => {
    const prev = _query[key];
    if (prev !== undefined) {
      _query[key] = Array.isArray(prev) ? [...prev, value] : [prev, value];
    } else {
      _query[key] = value;
    }
  });

  const qs = searchParams?.toString();

  const url = createUrl(pathWithSearchParams.toString(), {
    preserveParams,
    query,
    withOrigin,
  });

  return {
    url,
    fullUrl: qs ? `${pathname}?${qs}` : pathname,
    query: _query,
  };
};

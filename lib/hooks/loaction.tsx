import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { type LocationOptions, createLocation } from '../utils/helper';

export function useLocation() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const { fullUrl, query } = createLocation(pathname, {
    searchParams,
    pathname,
  });

  const createUrl = (path: string, opts?: LocationOptions) =>
    createLocation(path, { ...opts, searchParams, pathname }).url;

  const navigate = (path: string, opts?: LocationOptions) => {
    const url = createUrl(path, opts);
    router[opts?.replace ? 'replace' : 'push'](url);
  };

  return {
    pathname,
    search: searchParams.toString() ? `?${searchParams.toString()}` : '',
    fullUrl,
    query,
    createUrl,
    navigate,
  };
}

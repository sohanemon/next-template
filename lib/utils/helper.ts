export const isSSR = typeof window === 'undefined';

export const sleep = (time = 1000) =>
  new Promise((resolve) => setTimeout(resolve, time));

export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait = 1000,
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | undefined;
  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

export function throttle<T extends (...args: any[]) => void>(
  func: T,
  wait = 1000,
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, wait);
    }
  };
}

export const getCookieStore = async () => {
  if (isSSR) return (await import('next/headers')).cookies();

  const mod = await import('@sohanemon/utils/core');
  return {
    get: mod.getClientSideCookie,
    set: mod.setClientSideCookie,
    has: mod.hasClientSideCookie,
    delete: mod.deleteClientSideCookie,
  };
};

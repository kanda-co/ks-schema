import { GHOST_URL, ORIGINAL_USER_SESSION_KEY } from './constants';

export const isGhosted = (path: string) => path.startsWith(GHOST_URL);

export const ghostedUrlToOriginalUrl = (path: string): string =>
  path.replace(GHOST_URL, '');

export const originalUrlToGhostedUrl = (path: string): string =>
  [GHOST_URL, path].join('');

export const getOriginalUser = (): string =>
  window.sessionStorage.getItem(ORIGINAL_USER_SESSION_KEY);

export const mapUrlsIfGhosted = <T extends string>(
  urls: Record<T, string>,
): Record<T, string> => {
  if (!isGhosted(window.location.pathname)) {
    return urls;
  }

  return Object.entries(urls).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: originalUrlToGhostedUrl(value as string),
    }),
    {} as Record<T, string>,
  );
};

import { GHOST_URL } from './constants';

export const isGhosted = (path: string) => path.startsWith(GHOST_URL);

export const ghostedUrlToOriginalUrl = (path: string): string =>
  path.replace(GHOST_URL, '');

export const originalUrlToGhostedUrl = (path: string): string =>
  [GHOST_URL, path].join('/');

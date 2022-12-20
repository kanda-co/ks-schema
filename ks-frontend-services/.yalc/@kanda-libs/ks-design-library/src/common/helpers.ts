export const getWindow = (): Window | undefined => {
  if (typeof window === 'undefined') {
    return undefined;
  }

  return window;
};

export const getDocument = (): Document | undefined => {
  if (typeof document === 'undefined') {
    return undefined;
  }

  return document;
};

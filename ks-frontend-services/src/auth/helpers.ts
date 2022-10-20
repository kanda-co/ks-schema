import appendQuery from 'append-query';
import { StringIndexedObject } from '../types';

const isInIframe = (): boolean => {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
};

export const redirectTo = (
  url: string,
  params: StringIndexedObject = {},
): void => {
  let location = window.location;

  if (isInIframe()) {
    location = window.top.location;
  }

  location.href = appendQuery(url, params, {
    encodeComponents: false,
  });
};

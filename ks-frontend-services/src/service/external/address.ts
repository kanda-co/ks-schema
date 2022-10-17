import { createGetter } from './helpers';
import { RequestFunction } from '@openapi-io-ts/runtime';

// TODO: Proper API key from environment and not hardcoded
// TODO: Deactivate this key
const API_KEY = '-D4UfWF1v0SsPM1npts9gg36950';

const BASE_URL = 'https://api.getAddress.io';

const getUrl = (url: string) =>
  `${url}?api-key=${API_KEY}&expand=true&sort=true`;

const addressGetter = <T>(url: string): RequestFunction<{ body: T }, T> =>
  createGetter(BASE_URL)(getUrl(url)) as unknown as RequestFunction<
    { body: T },
    T
  >;
export interface FindRequest {
  params: {
    postCode: string;
  };
}

export interface FindResponse {
  addresses: Array<string[]>;
}

export default {
  find: {
    key: '/find',
    method: (
      request: FindRequest,
    ): RequestFunction<{ body: FindResponse }, FindResponse> =>
      addressGetter(`/find/${request.params.postCode}/`),
  },
};

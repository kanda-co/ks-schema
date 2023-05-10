import { RequestFunction } from '@openapi-io-ts/runtime';
import { StringIndexedObject } from '../../types';
import { createPoster } from './helpers';

export const BASE_URL =
  process.env.REACT_APP_FIREBASE_FUNCTION_SERVICE_URL ||
  'https://europe-west1-basic-garden-241310.cloudfunctions.net';

const sheetsPoster = <T>(
  url: string,
  body: StringIndexedObject = {},
): RequestFunction<{ body: T }, T> =>
  createPoster(BASE_URL, true)(url, body) as unknown as RequestFunction<
    { body: T },
    T
  >;

export interface ReadRequest {
  params?: {
    id?: string;
    range?: string;
    type?: string;
    options?: StringIndexedObject;
  };
}

export interface ReadResponse {
  data: any[][];
  status: number;
  error?: string;
}

export default {
  read: {
    key: '/read',
    method: ({
      params,
    }: ReadRequest): RequestFunction<{ body: ReadResponse }, ReadResponse> =>
      sheetsPoster(`/kssheets-read`, params ? { ...params } : {}),
  },
};

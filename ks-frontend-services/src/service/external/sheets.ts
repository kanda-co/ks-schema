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
  body: {
    spreadsheet_id?: string;
    range?: string;
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
      body: { spreadsheet_id, range },
    }: ReadRequest): RequestFunction<{ body: ReadResponse }, ReadResponse> =>
      sheetsPoster(`/kssheets-read`, {
        spreadsheet_id,
        range,
      }),
  },
};

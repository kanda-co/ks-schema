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

// fetch("https://europe-west1-basic-garden-241310.cloudfunctions.net/kssheets-read", {
//   "headers": {
//     "accept": "application/json",
//     "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
//     "content-type": "application/json",
//     "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"macOS\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "cross-site"
//   },
//   "referrer": "http://localhost:8001/",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": "{}",
//   "method": "POST",
//   "mode": "cors",
//   "credentials": "omit"
// });

import { RequestFunction } from '@openapi-io-ts/runtime';
import { StringIndexedObject } from '../../types';
import { createPoster } from './helpers';

export const BASE_URL =
  process.env.REACT_APP_PDF_COMPRESS_SERVICE_URL ||
  'https://europe-west1-basic-garden-241310.cloudfunctions.net';

const pdfPoster = <T>(
  url: string,
  body: StringIndexedObject = {},
): RequestFunction<{ body: T }, T> =>
  createPoster(BASE_URL)(url, body) as unknown as RequestFunction<
    { body: T },
    T
  >;

export interface CompressRequest {
  body: {
    content: string;
    mimetype: string;
  };
}

export interface CreateRequest {
  body: {
    job: StringIndexedObject;
    company: StringIndexedObject;
  };
}

export interface FindResponse {
  addresses: Array<string[]>;
}

export default {
  compress: {
    key: '/compress',
    method: ({
      body: { content, mimetype },
    }: CompressRequest): RequestFunction<
      { body: FindResponse },
      FindResponse
    > =>
      pdfPoster(`/kspdf-compress`, {
        content,
        mimetype,
      }),
  },
  create: {
    key: '/create',
    method: ({
      body: { job, company },
    }: CreateRequest): RequestFunction<{ body: FindResponse }, FindResponse> =>
      pdfPoster(`/kspdf-create`, {
        job,
        company,
      }),
  },
};

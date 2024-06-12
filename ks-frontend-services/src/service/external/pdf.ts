import { RequestFunction } from '@openapi-io-ts/runtime';
import { StringIndexedObject } from '../../types';
import { createPoster } from './helpers';
import {
  Introduction,
  Job,
  JobCompanyInfo,
} from 'generated/components/schemas';

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
    job: Job;
    company: JobCompanyInfo;
    introduction?: Introduction;
  };
}

export interface SatNoteRequest {
  body: {
    job: StringIndexedObject;
    credit: StringIndexedObject;
    satNote: StringIndexedObject;
    acceptedTerms: StringIndexedObject;
  };
}

export interface FindResponse {
  addresses: Array<string[]>;
}

export default {
  compress: {
    key: 'pdf.compress',
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
    key: 'pdf.create',
    method: ({
      body,
    }: CreateRequest): RequestFunction<
      { body: CreateRequest },
      CreateRequest
    > => pdfPoster(`/kspdf-create`, body),
  },
  satnote: {
    key: '/satnote',
    method: ({
      body: { job, credit, satNote, acceptedTerms },
    }: SatNoteRequest): RequestFunction<{ body: FindResponse }, FindResponse> =>
      pdfPoster(`/kspdf-satnote`, {
        job,
        credit,
        satNote,
        acceptedTerms,
      }),
  },
};

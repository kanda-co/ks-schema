import { RequestFunction } from '@openapi-io-ts/runtime';
import { StringIndexedObject } from '../../types';
import { createPoster } from './helpers';
import { Company } from '../../generated/components/schemas';

import type { Guarantor } from './subsSheet';

export const BASE_URL =
  process.env.REACT_APP_FIREBASE_FUNCTION_SERVICE_URL ||
  'https://europe-west1-basic-garden-241310.cloudfunctions.net';

const pdfPoster = <T>(
  url: string,
  body: StringIndexedObject = {},
): RequestFunction<{ body: T }, T> =>
  createPoster(BASE_URL)(url, body) as unknown as RequestFunction<
    { body: T },
    T
  >;

export interface Fingerprint {
  value: boolean;
  timestamp?: number;
  ip?: string;
}

export interface ContractGenerateRequest {
  body: {
    company: Company;
    signee?: string;
    guarantor?: Guarantor;
    fingerprint?: Fingerprint;
  };
}

export interface Contract {
  name: string;
  content: string;
}

export interface ContractResponse {
  data?: Contract;
  status: number;
  error?: string;
}

export default {
  generate: {
    key: '/generate',
    method: ({
      body,
    }: ContractGenerateRequest): RequestFunction<
      { body: ContractResponse },
      ContractResponse
    > => pdfPoster(`/ks-generate-contract`, body),
  },
};

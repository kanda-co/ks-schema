import { RequestFunction } from '@openapi-io-ts/runtime';
import { StringIndexedObject } from '../../types';
import { createPoster } from './helpers';
import { Company } from '../../generated/components/schemas';

import type { Guarantor } from './subsSheet';

export const BASE_URL =
  process.env.REACT_APP_FIREBASE_FUNCTION_SERVICE_URL ||
  'https://europe-west1-basic-garden-241310.cloudfunctions.net';

const personalGuaranteePoster = <T>(
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

export interface PersonalGuaranteeGenerateRequest {
  body: {
    company: Company;
    signee?: string;
    guarantor?: Guarantor;
    fingerprint?: Fingerprint;
  };
}

export interface PersonalGuarantee {
  name: string;
  content: string;
}

export interface PersonalGuaranteeResponse {
  data?: PersonalGuarantee;
  status: number;
  error?: string;
}

export default {
  generate: {
    key: '/generate',
    method: ({
      body,
    }: PersonalGuaranteeGenerateRequest): RequestFunction<
      { body: PersonalGuaranteeResponse },
      PersonalGuaranteeResponse
    > => personalGuaranteePoster(`/ks-generate-personal-guarantee`, body),
  },
};

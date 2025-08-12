import {
  RequestFunction,
  RequestFunctionArgs,
} from '@kanda-libs/openapi-io-ts-runtime';
import { createPoster } from './helpers';
import {
  Company,
  Credit,
  Job,
  JobCompanyInfo,
  SatNote,
} from '../../generated/components/schemas';

const BASE_URL =
  process.env.REACT_APP_FIREBASE_FUNCTION_SERVICE_URL ||
  'https://europe-west1-basic-garden-241310.cloudfunctions.net';

const pdfServicePoster = <R extends RequestFunctionArgs, T>(
  url: string,
  body: R,
): RequestFunction<R, T> =>
  createPoster(BASE_URL)(url, body) as unknown as RequestFunction<R, T>;

export interface SatNoteFingerprint {
  value: boolean;
  ip: string;
  timestamp: number;
}

export interface SatNoteOpenBankingRequestBodyStruct {
  job: Job;
  companyInfo: JobCompanyInfo;
  satNote: Omit<SatNote, 'certificate' | 'signature'>;
  fingerprint: SatNoteFingerprint;
}

export interface SatNoteCreditRequestBodyStruct
  extends SatNoteOpenBankingRequestBodyStruct {
  credit: Credit;
}

export interface SatNoteCreditRequestBody {
  body: SatNoteCreditRequestBodyStruct;
}

export interface SatNoteOpenBankingRequestBody {
  body: SatNoteOpenBankingRequestBodyStruct;
}

export interface SatNotePdfResponse {
  base64: string;
}

export default {
  credit: {
    key: '/generate-satnote-v2-credit',
    method: ({
      body,
    }): RequestFunction<SatNoteCreditRequestBody, SatNotePdfResponse> =>
      pdfServicePoster<SatNoteCreditRequestBody, SatNotePdfResponse>(
        `/kspdf-satnote-v2-credit`,
        body,
      ),
  },
  openbanking: {
    key: '/generate-satnote-v2-openbanking',
    method: ({
      body,
    }): RequestFunction<SatNoteOpenBankingRequestBody, SatNotePdfResponse> =>
      pdfServicePoster<SatNoteOpenBankingRequestBody, SatNotePdfResponse>(
        `/kspdf-satnote-v2-openbanking`,
        body,
      ),
  },
};

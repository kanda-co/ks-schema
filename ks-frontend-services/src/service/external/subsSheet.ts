import { RequestFunction } from '@openapi-io-ts/runtime';
import { StringIndexedObject } from '../../types';
import { createPoster } from './helpers';
import {
  Address,
  AuthUser,
  BankAccount,
  Company,
} from '../../generated/components/schemas';

export const BASE_URL =
  process.env.REACT_APP_FIREBASE_FUNCTION_SERVICE_URL ||
  'https://europe-west1-basic-garden-241310.cloudfunctions.net';

export interface Guarantor {
  name: string;
  date_of_birth: string;
  address: Address;
  bank_account: BankAccount;
}

export interface UpdateRequest {
  body: {
    cid: string;
  };
}

export interface WriteRequest {
  body: {
    company: Company;
    guarantor: Guarantor;
    user: AuthUser;
  };
}

export interface SubSheetResponse {
  data: any[][];
  status: number;
  error?: string;
}

const sheetsWritePoster = <T>(
  url: string,
  body: StringIndexedObject = {},
): RequestFunction<{ body: T }, T> =>
  createPoster(BASE_URL, true)(url, body) as unknown as RequestFunction<
    { body: T },
    T
  >;

export default {
  write: {
    key: '/write',
    method: ({
      body,
    }: WriteRequest): RequestFunction<
      { body: SubSheetResponse },
      SubSheetResponse
    > => sheetsWritePoster('/ks-sheet-monthly-sub-write', body),
  },
  update: {
    key: '/update',
    method: ({
      body,
    }: UpdateRequest): RequestFunction<
      { body: SubSheetResponse },
      SubSheetResponse
    > => sheetsWritePoster('/ks-sheet-monthly-sub-update', body),
  },
};

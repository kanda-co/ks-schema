import { RequestFunction } from '@openapi-io-ts/runtime';
import useMutate, { MutateHook } from '../../../hooks/useMutate';
import { SIGN_IN_METHODS } from './constants';

type SignInType = keyof typeof SIGN_IN_METHODS;

export default function useSignIn(type: SignInType): MutateHook {
  return useMutate(
    SIGN_IN_METHODS[type] as unknown as RequestFunction<
      { body: unknown },
      unknown
    >,
  );
}

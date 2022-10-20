import { RequestFunction } from '@openapi-io-ts/runtime';
import useMutate from '../../../hooks/useMutate';
import { SIGN_IN_METHODS } from './constants';

type SignInType = keyof typeof SIGN_IN_METHODS;

interface Hook {}

export default function useSignIn(type: SignInType): Hook {
  return useMutate(
    SIGN_IN_METHODS[type] as unknown as RequestFunction<
      { body: unknown },
      unknown
    >,
  );
}

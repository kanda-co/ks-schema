import { SIGN_IN_METHODS } from './constants';
import type { MutateHook } from '../../../hooks/useMutate';
type SignInType = keyof typeof SIGN_IN_METHODS;
export default function useSignIn(type: SignInType): MutateHook;
export {};

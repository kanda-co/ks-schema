import { MutateHook } from '../../../hooks/useMutate';
import { SIGN_IN_METHODS } from './constants';
type SignInType = keyof typeof SIGN_IN_METHODS;
export default function useSignIn(type: SignInType): MutateHook;
export {};

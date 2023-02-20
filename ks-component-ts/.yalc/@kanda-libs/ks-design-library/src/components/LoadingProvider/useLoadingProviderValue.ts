import { useContext } from 'react';
import { Context } from './Context';

export default function useLoadingProviderValue(
  isLoading = false,
  overwrite = false,
): boolean {
  const isParentLoading = useContext(Context);

  const defaultValue = isParentLoading || isLoading;

  const overwritenValue =
    typeof isLoading !== 'undefined' ? isLoading : isParentLoading;

  const value = overwrite ? overwritenValue : defaultValue;

  return value;
}

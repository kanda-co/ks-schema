import type { TagColor } from '~/components/Tag/types';

export interface StatusTagPropsHook {
  color: string;
}

export default function useStatusTagProps(
  status: string,
  extractColor: (status: string) => TagColor,
): StatusTagPropsHook {
  const color = extractColor(status);

  return {
    color: color as string,
  };
}

import type { Flag, Monitor } from '@kanda-libs/ks-frontend-services';
import type { Dictionary } from '@reduxjs/toolkit';

export interface CompanyRiskFlagHook {
  level?: Flag['level'];
}

export default function useCompanyRiskFlag(
  id: string = '',
  monitors: Dictionary<Monitor>,
): CompanyRiskFlagHook {
  const monitor = monitors[id];

  return {
    level: monitor?.flag?.level || 'green',
  };
}

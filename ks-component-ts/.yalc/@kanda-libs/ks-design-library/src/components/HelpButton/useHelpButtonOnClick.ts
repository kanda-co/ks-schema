import { useHelpcrunch } from '~/hooks';
import { useCallback } from 'react';

export interface HelpButtonOnClickHook {
  onClick: () => void;
}

export default function useHelpButtonOnClick(): HelpButtonOnClickHook {
  const { openChat } = useHelpcrunch();

  const onClick = useCallback(() => {
    openChat();
  }, [openChat]);

  return {
    onClick,
  };
}

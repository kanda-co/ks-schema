import clsx from 'clsx';
import { useCallback, useState } from 'react';

export interface ExpandableContentPropsHook {
  showContent: boolean;
  onClick: () => void;
  classNames: {
    button: string;
    container: string;
    label: string;
    icon: string;
  };
  icon: string;
}

export default function useExpandableContentProps(compact: boolean) {
  const [showContent, setShowContent] = useState(false);

  const onClick = useCallback(() => {
    setShowContent(!showContent);
  }, [showContent]);

  const classNames = {
    outerContainer: clsx(
      'flex flex-col mb-4',
      compact ? '' : 'rounded-lg shadow-card',
    ),
    button: clsx(
      'flex flex-1 flex-row py-4 px-5',
      compact ? '' : 'border border-neutral-300',
      showContent ? 'rounded-t-lg' : 'rounded-lg',
    ),
    container: clsx(
      'py-4 px-5',
      compact ? '' : 'border border-t-0 border-neutral-300 rounded-b-lg',
    ),
    label: 'text-14-22-em text-neutral-600',
    icon: 'ml-3',
  };

  const icon = showContent ? 'chevron-up' : 'chevron-down';

  return {
    showContent,
    onClick,
    classNames,
    icon,
  };
}

import { useState, useRef } from 'react';
import { copyToClipboard } from './helpers';

export interface CopyContentHook {
  clicked: boolean;
  handleClick: () => void;
}

export default function useCopyContent(
  content: string,
  time: number,
): CopyContentHook {
  const [clicked, setClicked] = useState(false);

  const timerRef = useRef<number | undefined>();

  const handleClick = () => {
    // Set state to clicked
    setClicked(true);
    // Clear timeout
    clearTimeout(timerRef.current);
    // Copy content to clipboard
    copyToClipboard(content);
    // After `time`, set button to clickable again
    timerRef.current = setTimeout(
      () => setClicked(false),
      time,
    ) as unknown as number;
  };

  return {
    clicked,
    handleClick,
  };
}

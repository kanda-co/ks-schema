import { useRef, useEffect } from 'react';

const ESC_KEY = 27;

export default function useEscClick(
  callback: (e: KeyboardEvent) => void,
): void {
  /**
   * Stores callback on ref so the effect can be called on mount / unmount
   */
  const callbackRef = useRef(callback);

  /**
   * Sets listeners on mount and removes them on unmount,
   * calls callback if user clicks ESC key
   */
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.keyCode === ESC_KEY && callbackRef.current)
        callbackRef.current(event);
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);
}

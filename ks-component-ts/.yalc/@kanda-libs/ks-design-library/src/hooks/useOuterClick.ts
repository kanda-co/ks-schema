import { useRef, useEffect, MutableRefObject } from 'react';

export type OuterClickHook = MutableRefObject<HTMLElement | undefined>;

/**
 * Hook that detect when the click is outside of the component
 */
export default function useOuterClick(
  callback: (e: MouseEvent) => void,
): OuterClickHook {
  /**
   * Stores callback on ref so the effect can be called on mount / unmount
   */
  const callbackRef = useRef(callback);
  const innerRef = useRef<HTMLElement>();

  /**
   * Sets listeners on mount and removes them on unmount,
   * calles callback if click target is outside of component suplied with ref
   */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(e.target as HTMLElement)
      )
        callbackRef.current(e);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return innerRef;
}

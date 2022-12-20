import { useState, useEffect, useRef, MutableRefObject } from 'react';
import clsx from 'clsx';
import { CLASSNAMES, TIMEOUT } from './constants';
import { determineScrollHeight } from './helpers';

export interface ScrollTopButtonHook {
  className: string;
  scrollTop: () => void;
}

/**
 * Hook used for firing off a scroll to top method when clicking the scroll to
 * top button
 */
export default function useScrollTopButton(
  containerRef: MutableRefObject<HTMLElement> | undefined,
): ScrollTopButtonHook {
  // Anonymous state to construct button className
  const [showButton, setShowButton] = useState(determineScrollHeight());

  /**
   * Function to scroll to top of element
   */
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Classname for button - extended with button show state
  const className = clsx(
    CLASSNAMES.base,
    showButton ? CLASSNAMES.show : CLASSNAMES.hide,
  );

  // Reference used for debouncing
  const checkScroll = useRef(true);
  // Effect attaches event listener to element
  useEffect(() => {
    // Scroll listener function to check scroll position
    const scrollListener = () => {
      // If checker reference is false, return
      if (!checkScroll.current) return;
      // Set checker reference to false
      checkScroll.current = false;
      // Set the show button state
      setShowButton(determineScrollHeight());
      // Use timeout to debounce, runs ever 100 milliseconds
      setTimeout(() => {
        // Allow scroll checking again
        checkScroll.current = true;
        // Set show button state
        setShowButton(determineScrollHeight());
      }, TIMEOUT);
    };
    // Add the event listener to the element
    window.addEventListener('scroll', scrollListener);
    return () => {
      // Remove the event listener
      window.removeEventListener('scroll', scrollListener);
    };
  }, [containerRef]);

  return {
    className,
    scrollTop,
  };
}

import { type FunctionComponent, useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import { useDebounce } from 'use-debounce';
import {
  SLOW_ANIMATION,
  FAST_ANIMATION,
  WIDTHS,
  FAST_ANIMATION_SPEED,
  INITIAL_DELAY,
  CLASS_NAMES,
  DEBOUNCE_INTERVAL,
} from './constants';
import { getDocument } from '~/common/helpers';

interface LoaderContainerChildrenArgs {
  width: string;
  classNames: {
    bar: string;
    overlay: string;
    container: string;
  };
}

export interface LoaderContainerProps {
  isLoading: boolean;
  children: (args: LoaderContainerChildrenArgs) => JSX.Element;
}

const LoaderContainer: FunctionComponent<LoaderContainerProps> = function ({
  children,
  isLoading,
}) {
  const loaded = useRef(false);

  const [animate, setAnimate] = useState(SLOW_ANIMATION);
  const [width, setWidth] = useState(WIDTHS.START);

  const [debouncedLoading] = useDebounce(isLoading, DEBOUNCE_INTERVAL);

  /**
   * Creates css animations when isLoading is true
   * and resets the state after it's completed
   */
  useEffect(() => {
    if (debouncedLoading) {
      // starts the fake animation to given percentage
      setTimeout(() => {
        loaded.current = true;
        setAnimate(SLOW_ANIMATION);
        setWidth(WIDTHS.LOADING);
      }, INITIAL_DELAY);
      return;
    }

    if (loaded.current) {
      // starts a fast animation to 100%
      setAnimate(FAST_ANIMATION);
      setWidth(WIDTHS.COMPLETE);
      loaded.current = false;
      setTimeout(() => {
        // resets the state to initial values after animation is complete
        setAnimate('');
        setWidth(WIDTHS.START);
      }, FAST_ANIMATION_SPEED);
      return;
    }

    // resets the state to initial values
    setAnimate('');
    setWidth(WIDTHS.START);
  }, [debouncedLoading]);

  const { baseBar, ...classNames } = CLASS_NAMES;

  const bar = clsx(baseBar, animate);

  return ReactDOM.createPortal(
    children({
      width,
      classNames: {
        ...classNames,
        bar,
      },
    }),
    getDocument()?.getElementById('modals') as HTMLElement,
  );
};

export default LoaderContainer;

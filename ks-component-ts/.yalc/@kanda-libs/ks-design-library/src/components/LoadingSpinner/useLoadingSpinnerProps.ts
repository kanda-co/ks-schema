import { DIRECTIONS } from './constants';
import clsx from 'clsx';

interface AnimationProps {
  dur: string;
  from: string;
  to: string;
}

export interface LoadingSpinnerPropsHook {
  className: string;
  animationProps: AnimationProps;
}

export default function useLoadingSpinnerProps(
  duration: number,
  antiClockwise: boolean,
  stroke: string,
  initialClassName: string,
): LoadingSpinnerPropsHook {
  const className = clsx(
    initialClassName,
    stroke ? `stroke-current text-${stroke}` : '',
  );

  const animationProps = {
    dur: `${duration}ms`,
    ...(antiClockwise ? DIRECTIONS.anticlockwise : DIRECTIONS.clockwise),
  };

  return {
    className,
    animationProps,
  };
}

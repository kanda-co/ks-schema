import React, { FunctionComponent } from 'react';
import useLoadingSpinnerProps from './useLoadingSpinnerProps';
import {
  DEFAULT_SVG_PROPS,
  DEFAULT_ANIMATION_PROPS,
  DEFAULT_STROKE_WIDTH,
  LINEAR_GRAIDENT_PROPS,
  PATHS,
} from './constants';

export interface LoadingSpinnerProps {
  /**
   * Size of the spinner
   */
  size?: number;
  /**
   * Duration for the animation in ms
   */
  duration?: number;
  /**
   * Duration for the animation
   */
  anticlockwise?: boolean;
  /**
   * Classname to be applied to SVG
   */
  className: string;
  /**
   * Tailwind color name to set as stroke of the icon e.g. blue-300
   */
  stroke: string;
}

const LoadingSpinner: FunctionComponent<LoadingSpinnerProps> = function ({
  size = 64,
  duration = 1000,
  anticlockwise = false,
  className: initialClassName,
  stroke,
}) {
  const { className, animationProps } = useLoadingSpinnerProps(
    duration,
    anticlockwise,
    stroke,
    initialClassName,
  );

  return (
    <svg
      width={size}
      height={size}
      className={className}
      {...DEFAULT_SVG_PROPS}
    >
      <defs>
        <linearGradient id={LINEAR_GRAIDENT_PROPS.secondHalf.id}>
          <stop {...LINEAR_GRAIDENT_PROPS.secondHalf.stop1} />
          <stop {...LINEAR_GRAIDENT_PROPS.secondHalf.stop2} />
        </linearGradient>
        <linearGradient id={LINEAR_GRAIDENT_PROPS.firstHalf.id}>
          <stop {...LINEAR_GRAIDENT_PROPS.firstHalf.stop1} />
          <stop {...LINEAR_GRAIDENT_PROPS.firstHalf.stop2} />
        </linearGradient>
      </defs>

      <g strokeWidth={DEFAULT_STROKE_WIDTH}>
        <path {...PATHS.path1} />
        <path {...PATHS.path2} />
      </g>

      <animateTransform {...DEFAULT_ANIMATION_PROPS} {...animationProps} />
    </svg>
  );
};

export default LoadingSpinner;

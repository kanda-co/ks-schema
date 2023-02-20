import React, { type FunctionComponent } from 'react';
import useTextSlides from './useTextSlides';

export interface TextSlidesProps {
  children: JSX.Element[];
  autoRotating?: boolean;
  autoRotateTime?: number;
}

const TextSlides: FunctionComponent<TextSlidesProps> = function ({
  children,
  autoRotating = true,
  autoRotateTime = 500,
}) {
  const { activeSlide } = useTextSlides(
    children.length,
    autoRotating,
    autoRotateTime,
  );

  return <>{children[activeSlide]}</>;
};

export default TextSlides;

import { useEffect, useState } from 'react';

export interface TextSlidesHook {
  activeSlide: number;
  nextSlide: () => void;
  prevSlide: () => void;
}

export default function useTextSlides(
  amountOfSlides: number,
  autoRotating = true,
  autoRotateTime = 500,
): TextSlidesHook {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    if (activeSlide < amountOfSlides - 1) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(0);
    }
  };

  const prevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(amountOfSlides - 1);
    }
  };

  //   A useEffect call that will auto rotate the slides based
  //   on the autoRotating boolean and autoRotateTime number (in ms)
  useEffect(() => {
    if (autoRotating) {
      const interval = setInterval(() => {
        nextSlide();
      }, autoRotateTime);
      return () => clearInterval(interval);
    }

    return () => {};
  }, [activeSlide, autoRotateTime, autoRotating]);

  return {
    activeSlide,
    nextSlide,
    prevSlide,
  };
}

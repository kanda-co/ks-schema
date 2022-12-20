import React, { FunctionComponent, MutableRefObject } from 'react';
import useScrollTopButton from './useScrollTopButton';
import { Icon as IconButton } from '~/components/Button';
import { BUTTON_PROPS } from './constants';

export interface ScrollTopButtonProps {
  containerRef?: MutableRefObject<HTMLElement>;
}

const ScrollTopButton: FunctionComponent<ScrollTopButtonProps> = function ({
  containerRef,
}) {
  const { className, scrollTop } = useScrollTopButton(containerRef);

  return (
    <IconButton
      id="scroll-top"
      onClick={() => {
        scrollTop();
      }}
      {...BUTTON_PROPS}
      className={className}
    />
  );
};

export default ScrollTopButton;

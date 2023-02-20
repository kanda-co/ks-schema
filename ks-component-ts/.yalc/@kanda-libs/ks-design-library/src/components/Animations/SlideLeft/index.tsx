import React, { FunctionComponent } from 'react';
import type { BaseSlideLeftProps } from './types';
import Container from './Container';

export interface SlideLeftProps extends BaseSlideLeftProps {
  children: JSX.Element | JSX.Element[];
}

const SlideLeft: FunctionComponent<SlideLeftProps> = function ({
  children,
  ...props
}) {
  return (
    <Container {...props}>
      {({ className, onAnimationEnd }) => (
        <div className={className} onAnimationEnd={onAnimationEnd}>
          {children}
        </div>
      )}
    </Container>
  );
};

export default SlideLeft;

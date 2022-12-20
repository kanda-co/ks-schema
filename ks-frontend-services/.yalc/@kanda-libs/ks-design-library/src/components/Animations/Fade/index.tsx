import React, { FunctionComponent } from 'react';
import type { BaseFadeProps } from './types';
import Container from './Container';

export interface FadeProps extends BaseFadeProps {
  children: JSX.Element | JSX.Element[];
}

const Fade: FunctionComponent<FadeProps> = function ({ children, ...props }) {
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

export default Fade;

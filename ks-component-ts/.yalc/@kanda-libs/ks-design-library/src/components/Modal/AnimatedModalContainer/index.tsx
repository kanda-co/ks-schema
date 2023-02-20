import React, { FunctionComponent } from 'react';
import type { BaseAnimatedModalContainerProps } from './types';
import Container, {
  ContainerChildrenArgs,
} from '~/components/Modal/AnimatedModalContainer/Container';
import Animations from '~/components/Animations';

export interface AnimatedModalContainerProps
  extends BaseAnimatedModalContainerProps {
  children: (
    args: Omit<ContainerChildrenArgs, 'backdropClassName'>,
  ) => JSX.Element;
}

const AnimatedModalContainer: FunctionComponent<AnimatedModalContainerProps> =
  function ({ children, ...props }) {
    return (
      <Container {...props}>
        {({ backdropClassName, isVisible, ...rest }) => (
          <div className="w-vvp h-vvp">
            <Animations.Fade show={isVisible}>
              <div className={backdropClassName} />
            </Animations.Fade>
            {children({
              isVisible,
              ...rest,
            })}
          </div>
        )}
      </Container>
    );
  };

export default AnimatedModalContainer;

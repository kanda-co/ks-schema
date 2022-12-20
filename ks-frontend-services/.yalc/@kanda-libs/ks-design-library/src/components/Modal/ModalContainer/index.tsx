import React, { FunctionComponent, MutableRefObject } from 'react';
import Container, { ContainerProps } from './Container';

export interface ModalContainerChildrenArgs {
  id: string;
  handleClose: () => void;
  ref?: MutableRefObject<HTMLElement | undefined>;
}

export interface ModalContainerProps extends ContainerProps {
  overlay?: boolean;
  children: (args: ModalContainerChildrenArgs) => JSX.Element;
}

const ModalContainer: FunctionComponent<ModalContainerProps> = function ({
  overlay = false,
  children,
  ...props
}) {
  return (
    <Container {...props}>
      {({ showBackdrop, backdropClassName, ...rest }) => (
        <div className={`"w-vvp h-vvp" ${overlay ? 'absolute top-0' : ''}`}>
          {showBackdrop && <div className={backdropClassName} />}
          {children({
            ...rest,
          })}
        </div>
      )}
    </Container>
  );
};

export default ModalContainer;

import React, { forwardRef } from 'react';
import { Icon as IconButton } from '~/components/Button';
import type { OPACITIES } from '../../constants';
import Container from './Container';

interface ModalLayoutCenterProps {
  id: string;
  children: JSX.Element | JSX.Element[];
  onClose?: () => void;
  className?: string;
  opacity?: typeof OPACITIES[number];
}

const ModalLayoutCenter = forwardRef<HTMLDivElement, ModalLayoutCenterProps>(
  (
    { id, children, onClose, className: initialClassName, opacity = 5 },
    ref,
  ) => (
    <Container initialClassName={initialClassName} opacity={opacity}>
      {({ className }) => (
        <div className={className} ref={ref}>
          <div className="flex flex-1 w-full flex-col relative p-6">
            <div className="absolute top-0 right-0 p-3">
              <IconButton id={`${id}-close`} onClick={onClose} icon="close" />
            </div>
            {children}
          </div>
        </div>
      )}
    </Container>
  ),
);

ModalLayoutCenter.displayName = 'ModalLayoutCenter';

export default ModalLayoutCenter;

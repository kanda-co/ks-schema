import React, { forwardRef, FunctionComponent } from 'react';
import Button from '~/components/Button';
import type { HomeLinkProps } from '~/components/ConfigWrapper';
import { default as Lines } from '~/assets/images/marketing-slide-up-header.svg';
import Container from './Container';
import { SPACE } from './constants';

interface ModalLayoutSlideUpProps {
  id: string;
  children: JSX.Element | JSX.Element[];
  onClose?: () => void;
  variant?: 'DEFAULT' | 'MARKETING';
}

const ModalLayoutSlideUp = forwardRef<HTMLDivElement, ModalLayoutSlideUpProps>(
  ({ id, children, variant = 'DEFAULT', onClose }, ref) => {
    const LinesTag = Lines as unknown as FunctionComponent<HomeLinkProps>;

    return (
      <Container variant={variant}>
        {({ classNames, linesVisible }) => (
          <div className={classNames.container} ref={ref}>
            <div className={classNames.bg}>
              {linesVisible && <LinesTag className="w-full" />}
            </div>
            <img alt="" src={SPACE} className={classNames.space} />
            {onClose && (
              <div className={classNames.header}>
                <Button.Icon
                  id={`${id}-close`}
                  onClick={onClose}
                  icon="close"
                />
              </div>
            )}
            <div className={classNames.wrapper}>{children}</div>
          </div>
        )}
      </Container>
    );
  },
);

ModalLayoutSlideUp.displayName = 'ModalLayoutSlideUp';

export default ModalLayoutSlideUp;

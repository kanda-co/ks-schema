import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { useRef, useState, useCallback, useContext, useEffect } from 'react';
import clsx from 'clsx';

import { BACKDROP_CLASS_NAME, ESC_KEY } from '../constants';
import { opacitySuffix } from '../helpers';
import { useOuterClick } from '~/hooks';
import { Context as ModalsWrapperContext } from '~/components/ModalsWrapper';
import type { OuterClickHook } from '~/hooks/useOuterClick';
import type { BaseAnimatedModalContainerProps } from './types';
import { getDocument } from '~/common/helpers';

export interface ContainerChildrenArgs {
  isShown: boolean;
  backdropClassName: string;
  isVisible: boolean;
  handleClose: () => void;
  hideModal: () => void;
  ref: OuterClickHook;
}

export interface ContainerProps extends BaseAnimatedModalContainerProps {
  children: (args: ContainerChildrenArgs) => JSX.Element;
}

const Container: FunctionComponent<ContainerProps> = function ({
  id,
  opacity,
  children,
}) {
  const { visibleAnimatedModals: visibleModals, hideAnimatedModal: hideModal } =
    useContext(ModalsWrapperContext);

  const [isVisible, setIsVisible] = useState(visibleModals.indexOf(id) !== -1);
  const isShown = visibleModals.indexOf(id) !== -1;

  const suffix = opacitySuffix(opacity);

  const backdropClassName = clsx(BACKDROP_CLASS_NAME, `opacity${suffix}`);

  const modalsRef = useRef(visibleModals);

  /*
   * Handles close logic
   */
  const handleClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  /*
   * Uses hook to call close when the click is outside of modal
   */
  const ref = useOuterClick(handleClose);

  const onHide = useCallback(() => {
    hideModal(id);
    setIsVisible(false);
    modalsRef.current = [];
  }, [hideModal, id]);

  /**
   * Hiddes last modal when ESC key is pressed
   */
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.keyCode === ESC_KEY) {
        setIsVisible(false);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  useEffect(() => {
    if (modalsRef.current.indexOf(id) === -1 && isShown) {
      setIsVisible(true);
      modalsRef.current = visibleModals;
    }
  }, [id, isShown, visibleModals]);

  if (!isShown) {
    return <></>;
  }

  /*
   * Uses portal to move modal "modals" div on root so it would not have problems with z-index
   */
  return ReactDOM.createPortal(
    children({
      isShown,
      backdropClassName,
      isVisible,
      handleClose,
      hideModal: onHide,
      ref,
    }),
    getDocument()?.getElementById('modals') as HTMLElement,
  );
};

Container.displayName = 'AnimatedModalContainer-Container';

export default Container;

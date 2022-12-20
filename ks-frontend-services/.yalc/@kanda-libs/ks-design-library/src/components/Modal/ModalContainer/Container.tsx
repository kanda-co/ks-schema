import { FunctionComponent, useCallback, useContext } from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import { ModalsWrapperContext } from '~/components/ModalsWrapper';
import useOuterClick, { OuterClickHook } from '~/hooks/useOuterClick';
import { opacitySuffix } from '../helpers';
import type { OPACITIES } from '../constants';
import { BACKDROP_CLASS_NAME } from '../constants';
import { getDocument } from '~/common/helpers';

export interface ContainerChildrenArgs {
  id: string;
  showBackdrop: boolean;
  backdropClassName: string;
  handleClose: () => void;
  ref: OuterClickHook;
}

export interface ContainerProps {
  /**
   * The ID of the modal
   */
  id: string;
  /**
   * The opacity oif the background
   */
  opacity?: typeof OPACITIES[number];
  children: (args: ContainerChildrenArgs) => JSX.Element;
}

const Container: FunctionComponent<ContainerProps> = function ({
  id,
  opacity = 5,
  children,
}) {
  const { visibleModals, hideModal } = useContext(ModalsWrapperContext);

  const suffix = opacitySuffix(opacity);

  const backdropClassName = clsx(BACKDROP_CLASS_NAME, `opacity${suffix}`);

  const showBackdrop = visibleModals.indexOf(id) === 0;

  /*
   * Handles close logic
   */
  const handleClose = useCallback(() => {
    hideModal(id);
  }, [id, hideModal]);

  /*
   * Uses hook to call close when the click is outside of modal
   */
  const ref = useOuterClick(handleClose);

  /*
   * Displays nothing if modal is not visible
   */
  if (visibleModals.indexOf(id) === -1) {
    return null;
  }

  /*
   * Uses portal to move modal "modals" div on root so it would not have problems with z-index
   */
  return ReactDOM.createPortal(
    children({ id, showBackdrop, backdropClassName, handleClose, ref }),
    getDocument()?.getElementById('modals') as HTMLElement,
  );
};

export default Container;

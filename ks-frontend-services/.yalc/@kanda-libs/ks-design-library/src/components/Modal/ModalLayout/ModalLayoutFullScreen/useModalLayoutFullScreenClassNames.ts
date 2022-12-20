import { useEffect } from 'react';
import clsx from 'clsx';
import { getDocument } from '~/common/helpers';
import {
  CLASS_NAMES,
  FULLSCREEN_MODAL_CLASS_NAME,
  BODY_FULLSCREEN_MODAL_CLASS_NAME,
} from './constants';

export interface ModalLayoutFullScreenClassNamesHook {
  container: string;
  wrapper: string;
  content: string;
  footer: string;
  header: string;
}

export default function useModalLayoutFullScreenClassNames(
  noBorder: boolean,
  stickyHeader: boolean,
): ModalLayoutFullScreenClassNamesHook {
  const { headerBase, headerBorder, ...classNames } = CLASS_NAMES;

  const header = clsx(
    headerBase,
    noBorder ? '' : headerBorder,
    stickyHeader ? 'sticky top-0' : '',
  );

  useEffect(() => {
    document.body.classList.add(BODY_FULLSCREEN_MODAL_CLASS_NAME);

    return () => {
      if (
        getDocument()?.getElementsByClassName(FULLSCREEN_MODAL_CLASS_NAME)
          .length === 0
      ) {
        getDocument()?.body.classList.remove(BODY_FULLSCREEN_MODAL_CLASS_NAME);
      }
    };
  }, []);

  return {
    ...classNames,
    header,
  };
}

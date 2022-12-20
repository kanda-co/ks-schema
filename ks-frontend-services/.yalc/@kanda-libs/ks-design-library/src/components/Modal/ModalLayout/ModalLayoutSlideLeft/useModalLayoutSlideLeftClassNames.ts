import { useEffect } from 'react';
import clsx from 'clsx';
import {
  BODY_SLIDE_LEFT_MODAL_CLASS_NAME,
  CLASS_NAMES,
  SLIDE_LEFT_MODAL_CLASS_NAME,
} from './constants';
import { getDocument } from '~/common/helpers';

export interface ModalLayoutSlideLeftClassNamesHook {
  header: string;
  container: string;
  wrapper: string;
  content: string;
  footer: string;
}

export default function useModalLayoutSlideLeftClassNames(
  noBorder: boolean,
): ModalLayoutSlideLeftClassNamesHook {
  const { headerBase, headerBorder, ...classNames } = CLASS_NAMES;

  const header = clsx(headerBase, noBorder ? '' : headerBorder);

  useEffect(() => {
    document.body.classList.add(BODY_SLIDE_LEFT_MODAL_CLASS_NAME);

    return () => {
      if (
        getDocument()?.getElementsByClassName(SLIDE_LEFT_MODAL_CLASS_NAME)
          .length === 0
      ) {
        getDocument()?.body.classList.remove(BODY_SLIDE_LEFT_MODAL_CLASS_NAME);
      }
    };
  }, []);

  return {
    ...classNames,
    header,
  };
}

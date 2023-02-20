import { useCallback, useState, useEffect, useRef } from 'react';

import { ESC_KEY } from '../constants';

export interface ModalsHook {
  showModal: (modalId: string) => void;
  hideModal: (modalId: string) => void;
  visibleModals: string[];
}

export default function useModals(): ModalsHook {
  const [visibleModals, setVisibleModals] = useState<string[]>([]);
  const [modalsUpdated, setModalsUpdate] = useState<number>();

  const visibleModalsRef = useRef<string[]>([]);

  /**
   * Sets modal to visible
   * @param {string} modalId - id of modal
   */
  const showModal = useCallback((modalId: string) => {
    const isVisible = visibleModalsRef.current.includes(modalId);

    if (isVisible) {
      return;
    }

    visibleModalsRef.current = [...visibleModalsRef.current, modalId];
    setModalsUpdate(Math.random());
  }, []);

  /**
   * Sets modal to hidden
   * @param {string} modalId - id of modal
   */
  const hideModal = useCallback((modalId: string) => {
    const isVisible = visibleModalsRef.current.includes(modalId);

    if (!isVisible) {
      return;
    }

    const newVisibleModals = visibleModalsRef.current.filter(
      (modal) => modal !== modalId,
    );

    visibleModalsRef.current = newVisibleModals;
    setModalsUpdate(Math.random());
  }, []);

  /**
   * Hiddes last modal when ESC key is pressed
   */
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.keyCode === ESC_KEY) {
        if (visibleModalsRef.current.length === 0) {
          return;
        }

        const lastModal = [...visibleModalsRef.current].pop();
        hideModal(lastModal as string);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [hideModal]);

  /**
   * Update state from ref
   */
  useEffect(() => {
    setVisibleModals(visibleModalsRef.current);
  }, [modalsUpdated]);

  return {
    showModal,
    hideModal,
    visibleModals,
  };
}

import { useCallback, useState, useEffect, useRef } from 'react';

export interface AnimatedModalsHook {
  showAnimatedModal: (modalId: string) => void;
  hideAnimatedModal: (modalId: string) => void;
  visibleAnimatedModals: string[];
}

/**
 * Aninmated modals context values hook
 */
export default function useAnimatedModals(): AnimatedModalsHook {
  const [visibleAnimatedModals, setVisibleAnimatedModals] = useState<string[]>(
    [],
  );
  const [animatedModalsUpdated, setAnimatedModalsUpdate] = useState<number>();

  const visibleAnimatedModalsRef = useRef<string[]>([]);

  /**
   * Sets modal to visible
   * @param {string} modalId - id of modal
   */
  const showAnimatedModal = useCallback((modalId: string) => {
    const isVisible = visibleAnimatedModalsRef.current.includes(modalId);

    if (isVisible) {
      return;
    }

    visibleAnimatedModalsRef.current = [
      ...visibleAnimatedModalsRef.current,
      modalId,
    ];
    setAnimatedModalsUpdate(Math.random());
  }, []);

  /**
   * Sets modal to hidden
   * @param {string} modalId - id of modal
   */
  const hideAnimatedModal = useCallback((modalId: string) => {
    const isVisible = visibleAnimatedModalsRef.current.includes(modalId);

    if (!isVisible) {
      return;
    }

    const newVisibleModals = visibleAnimatedModalsRef.current.filter(
      (modal) => modal !== modalId,
    );

    visibleAnimatedModalsRef.current = newVisibleModals;
    setAnimatedModalsUpdate(Math.random());
  }, []);

  /**
   * Update state from ref
   */
  useEffect(() => {
    setVisibleAnimatedModals(visibleAnimatedModalsRef.current);
  }, [animatedModalsUpdated]);

  return {
    showAnimatedModal,
    hideAnimatedModal,
    visibleAnimatedModals,
  };
}

import { useCallback, useEffect, useRef } from 'react';
import { getDocument, getWindow } from '~/common/helpers';

export interface Viewport {
  w?: number;
  h?: number;
}

export default function useViewportVariables(): void {
  const styleElement = useRef<HTMLElement>();
  const window = getWindow();
  const enabled = useRef(typeof window?.innerHeight === 'number');

  const innerViewport = useRef<Viewport>({ w: 0, h: 0 });
  const outerViewport = useRef<Viewport>({ w: 0, h: 0 });

  /**
   * Calculates new viewport
   */
  const calculateViewport = useCallback(
    () =>
      new Promise((resolve, reject) => {
        if (!enabled.current) {
          return reject(
            new Error('Could not calculate window?.visualViewport'),
          );
        }

        innerViewport.current.w = window?.innerWidth;
        innerViewport.current.h = window?.innerHeight;

        outerViewport.current.w = window?.outerWidth;
        outerViewport.current.h = window?.outerHeight;

        return resolve(true);
      }),
    [],
  );

  /**
   * Stores viewport as css variables
   */
  const setViewport = useCallback(() => {
    if (styleElement.current) {
      styleElement.current.innerHTML = `
        :root {
          --100vvw: ${Math.min(
            innerViewport.current.w || 0,
            outerViewport.current.w || 0,
          )}px;
          --100vvh: ${Math.min(
            innerViewport.current.h || 0,
            outerViewport.current.h || 0,
          )}px;

          --offset-w: ${
            (outerViewport.current.w || 0) - (innerViewport.current.w || 0)
          }px;
          --offset-h: ${
            (outerViewport.current.h || 0) - (innerViewport.current.h || 0)
          }px;
        }
      `;
    }
  }, []);

  /**
   * Calculates and then stores viewport
   */
  const refresh = useCallback(() => {
    calculateViewport().then(setViewport);
  }, [calculateViewport, setViewport]);

  /**
   * Created and style tag on html head element
   */
  useEffect(() => {
    const styleId = 'viewport_fix_variables';
    if (!getDocument()) {
      return;
    }

    const exists = document.getElementById(styleId);

    if (exists) return;

    const styleTag = document.createElement('style');

    styleTag.id = styleId;

    styleElement.current = styleTag;

    document.head.prepend(styleTag);
  }, []);

  /**
   * Listens to resize to call refresh, and removes listener on dismount
   */
  useEffect(() => {
    if (!enabled.current) {
      return;
    }

    refresh();

    window?.visualViewport?.addEventListener('resize', refresh);

    return () => {
      window?.visualViewport?.removeEventListener('resize', refresh);
    };
  }, [refresh]);
}

import { FunctionComponent, useEffect, useRef } from 'react';
import type { WindowWithHelpCrunch } from '~/types';

import { SCRIPT, SCRIPT_INIT } from './constants';

const HelpCrunch: FunctionComponent = function () {
  const helpCrunch = (window as unknown as WindowWithHelpCrunch)?.HelpCrunch;

  /**
   * useEffect call used for loading helpCrunch if it's available
   */
  useEffect(() => {
    if (!helpCrunch) return;

    setTimeout(() => {
      helpCrunch('hideChatWidget');
    }, 120);
  }, [helpCrunch]);

  const initRef = useRef<boolean>(false);
  useEffect(() => {
    if (initRef.current) return;

    const s1 = document.createElement('script');
    s1.type = 'text/javascript';
    s1.innerHTML = SCRIPT;
    document.head.appendChild(s1);

    const s2 = document.createElement('script');
    s2.type = 'text/javascript';
    s2.innerHTML = SCRIPT_INIT;
    document.head.appendChild(s2);

    initRef.current = true;
  }, []);

  return null;
};

export default HelpCrunch;

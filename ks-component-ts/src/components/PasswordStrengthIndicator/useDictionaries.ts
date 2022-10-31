import { useEffect, useRef, useState } from "react";

import { RETRY_INTERVAL } from "./constants";
import { loadDictionaries } from "./helpers";
import { Dictionaries } from "~/components/PasswordStrengthIndicator/types";

export interface DictionariesHook {
  isLoading: boolean;
  dictionaries: Dictionaries;
}

/**
 * Handles dictionary load logic
 */
export default function useDictionaries(): DictionariesHook {
  const retries = useRef(0);

  const [isLoading, setIsLoading] = useState(true);
  const [dictionaries, setDictionaries] = useState<Dictionaries>({});

  /**
   * Load password dictionaries to calculate the score
   */
  useEffect(() => {
    /**
     * handles load and state update
     */
    const handleLoad = () =>
      loadDictionaries().then((loadedDictionaries) => {
        setDictionaries(loadedDictionaries);
        setIsLoading(false);
      });

    /**
     * fetch logic
     */
    const fetch = async () => {
      try {
        await handleLoad();
      } catch {
        setTimeout(fetch, retries.current * RETRY_INTERVAL);
      }

      retries.current += 1;
    };

    /**
     * initial fetch
     */
    fetch();
  }, []);

  return {
    isLoading,
    dictionaries,
  };
}

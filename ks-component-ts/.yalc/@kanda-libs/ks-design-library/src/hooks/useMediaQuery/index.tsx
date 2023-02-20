import { useEffect, useState, useCallback } from 'react';

import { getMatches } from './mediaQuery-functions';

/**
 * The hook to match media queries.
 * Returns true if there are matches for media query
 *
 * @param {string} query media query ex: (min-width: 768px)
 * @return {Boolean} true if it matches
 */

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>(getMatches(query));

  const handleChange = useCallback(
    () => setMatches(getMatches(query)),
    [query],
  );

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Listen matchMedia - if/else used for Safari 14 or before, see:
    // https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener#browser_compatibility
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener('change', handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener('change', handleChange);
      }
    };
  }, [query, handleChange]);

  return matches;
};

export default useMediaQuery;

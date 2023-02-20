import { DESKTOP_MEDIA_QUERY } from './isDesktop-constants';

import useMediaQuery from '../useMediaQuery';

/**
 * The hook to check it current view is on desktop
 * @return {Boolean} true if it's desktop
 */
const useIsDesktop = () => useMediaQuery(DESKTOP_MEDIA_QUERY);

export default useIsDesktop;

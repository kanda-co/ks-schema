import React, { FunctionComponent } from 'react';
import useIsDesktop from '~/hooks/useIsDesktop';

export interface BreakPointsProps {
  /**
   * Desktop node(s) to display
   */
  desktop?: JSX.Element | string;
  /**
   * Mobile node(s) to display
   */
  mobile?: JSX.Element | string;
}

const BreakPoints: FunctionComponent<BreakPointsProps> = function ({
  desktop,
  mobile,
}) {
  const isDesktop = useIsDesktop();

  return <>{isDesktop ? desktop : mobile}</>;
};

export default BreakPoints;

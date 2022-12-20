import React, { FunctionComponent } from 'react';
import useCopyContent from './useCopyContent';
import {
  DEFAULT_TIMEOUT,
  DEFAULT_MESSAGE,
  DEFAULT_CLICKED_MESSAGE,
} from './constants';

export interface CopyContentProps {
  children?: JSX.Element | JSX.Element[];
  /**
   * Element to be shown when clicked
   */
  clickedView?: JSX.Element | JSX.Element[];
  /**
   * DesktopLayoutBoxedContent to be copied
   */
  content: string;
  /**
   * HTML ID for the input
   */
  id?: string;
  className?: string;
  time?: number;
}

const CopyContent: FunctionComponent<CopyContentProps> = function ({
  children = null,
  clickedView = null,
  className = '',
  id = '',
  content,
  time = DEFAULT_TIMEOUT,
}) {
  const { clicked, handleClick } = useCopyContent(content, time);

  return (
    <button
      id={id}
      onClick={handleClick}
      className={className}
      disabled={clicked}
    >
      {clicked
        ? clickedView || DEFAULT_CLICKED_MESSAGE
        : children || DEFAULT_MESSAGE}
    </button>
  );
};

export default CopyContent;

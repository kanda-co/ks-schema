import React, { type FunctionComponent, type HTMLAttributes } from 'react';
import usePlaceHolderClassNames from '~/components/PlaceHolder/usePlaceHolderClassNames';

export interface PlaceHolderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  children?: JSX.Element;
  className?: string;
  backgroundColour?: string;
  /**
   * Title of card
   */
  title?: JSX.Element | string;
  /**
   * Call to action element
   */
  cta?: JSX.Element | string;
  /**
   * Set's content to top
   */
  top?: boolean;
}

const PlaceHolder: FunctionComponent<PlaceHolderProps> = function ({
  children = null,
  title,
  cta,
  className = '',
  top = false,
  backgroundColour = '',
  ...restProps
}) {
  const classNames = usePlaceHolderClassNames(className, backgroundColour, top);

  return (
    <div className={classNames.container} {...restProps}>
      <div className={classNames.wrapper}>
        <div className={classNames.effect}>
          <div className={classNames.content}>
            <div className={classNames.title}>{title} </div>
            <div className={classNames.cta}>{cta}</div>
          </div>
        </div>
      </div>

      <div className={classNames.background} />
    </div>
  );
};

export default PlaceHolder;

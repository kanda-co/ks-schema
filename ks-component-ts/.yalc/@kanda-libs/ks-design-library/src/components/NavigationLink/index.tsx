import React, { FunctionComponent } from 'react';
import useNavigationLinkClassNames from '~/components/NavigationLink/useNavigationLinkClassNames';
import SkeletonLoader from '~/components/SkeletonLoader';
import Icon from '~/components/Icon';
import { ICON_PROPS, SKELETONS } from './constants';

export interface NavigationLinkProps {
  title?: string | JSX.Element | JSX.Element[];
  subtitle?: string | JSX.Element | JSX.Element[];
  badgeColor?: string;
  className?: string;
  isLoading?: boolean;
  children?: JSX.Element | JSX.Element[] | string;
}

const NavigationLink: FunctionComponent<NavigationLinkProps> = function ({
  className = '',
  title,
  subtitle,
  badgeColor = '',
  isLoading,
}) {
  const classNames = useNavigationLinkClassNames(className, badgeColor);

  return (
    <div className={classNames.container}>
      <div className={classNames.content}>
        <div className={classNames.titleWrapper}>
          <span className={classNames.title}>
            <SkeletonLoader
              {...SKELETONS.title}
              isLoading={isLoading}
              afterLoading={title as JSX.Element}
            />
          </span>
          {!isLoading && badgeColor && <div className={classNames.badge} />}
        </div>
        <p className={classNames.subtitle}>
          <SkeletonLoader
            {...SKELETONS.subtitle}
            isLoading={isLoading}
            afterLoading={subtitle as JSX.Element}
          />
        </p>
      </div>
      <div>
        <Icon isLoading={isLoading} {...ICON_PROPS} />
      </div>
    </div>
  );
};

export default NavigationLink;

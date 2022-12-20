import React, { FunctionComponent } from 'react';
import { default as Background } from '../../assets/images/banner-background.svg';
import { CLASS_NAMES } from './constants';
import type { HomeLinkProps } from '~/components/ConfigWrapper';

export interface BannerProps {
  children?: JSX.Element | JSX.Element[];
}

const Banner: FunctionComponent<BannerProps> = function ({ children }) {
  const BackgroundTag =
    Background as unknown as FunctionComponent<HomeLinkProps>;

  return (
    <div className={CLASS_NAMES.container}>
      <BackgroundTag className={CLASS_NAMES.background} />
      {children}
    </div>
  );
};

export default Banner;

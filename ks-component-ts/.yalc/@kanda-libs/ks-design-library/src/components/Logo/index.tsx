import React, { FunctionComponent } from 'react';
import { default as KandaWordMark } from '../../assets/logos/kanda-wordmark.svg';
import type { StringIndexedObject } from '~/types';

export interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const Logo: FunctionComponent<LogoProps> = function (props) {
  return <KandaWordMark {...(props as StringIndexedObject)} />;
};

export default Logo;

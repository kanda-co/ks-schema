import clsx from 'clsx';

import { PLACE_HOLDER_CLASS_NAMES } from './constants';

export interface PlaceholderClassNamesHook {
  content: string;
  title: string;
  cta: string;
  container: string;
  wrapper: string;
  background: string;
  effect: string;
}

export default function usePlaceHolderClassNames(
  className: string,
  backgroundColour: string,
  top: boolean,
): PlaceholderClassNamesHook {
  const {
    baseContainer,
    baseWrapper,
    baseBackground,
    baseEffect,
    ...classNames
  } = PLACE_HOLDER_CLASS_NAMES;

  const container = clsx(baseContainer, className);
  const wrapper = clsx(baseContainer, !top && 'justify-center');
  const background = clsx(
    baseBackground,
    backgroundColour ? `to-${backgroundColour}` : 'to-neutral-000',
  );
  const effect = clsx(
    baseEffect,
    backgroundColour ? `from-${backgroundColour}` : 'from-neutral-000',
  );

  return {
    ...classNames,
    container,
    wrapper,
    background,
    effect,
  };
}

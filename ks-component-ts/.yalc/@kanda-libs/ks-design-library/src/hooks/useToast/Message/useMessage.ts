import type { HTMLProps } from 'react';
import {
  DEFAULT_ICON_PROPS,
  DEFAULT_CONTAINER_PROPS,
  DEFAULT_SPAN_PROPS,
} from './constants';
import type { IconProps } from '~/components/Icon/types';

export interface Hook {
  iconProps: IconProps;
  containerProps: HTMLProps<HTMLDivElement>;
  spanProps: HTMLProps<HTMLDivElement>;
}

export default function useMessage(
  icon: IconProps | null = null,
  container: HTMLProps<HTMLDivElement> | null = null,
  span: HTMLProps<HTMLDivElement> | null = null,
): Hook {
  const iconProps = {
    ...DEFAULT_ICON_PROPS,
    ...(icon || {}),
  };

  const containerProps = {
    ...DEFAULT_CONTAINER_PROPS,
    ...(container || {}),
  };

  const spanProps = {
    ...DEFAULT_SPAN_PROPS,
    ...(span || {}),
  };

  return {
    iconProps,
    containerProps,
    spanProps,
  };
}

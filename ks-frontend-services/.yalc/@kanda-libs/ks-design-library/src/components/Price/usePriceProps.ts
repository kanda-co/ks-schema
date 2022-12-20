import { CLASS_NAMES } from './constants';
import clsx from 'clsx';
import { abbreviateNumber } from '~/helpers/number';

export interface PricePropsHook {
  classNames: {
    wrapper: string;
    container: string;
  };
  pounds: number;
  suffix: string;
  centsLabel: string;
}

export default function usePriceProps(
  colour: string,
  amount: number,
  initialClassName: string,
  initialWrapperClassName: string,
): PricePropsHook {
  const { baseContainer, baseWrapper } = CLASS_NAMES;

  const container = clsx(baseContainer, `text-${colour}`, initialClassName);
  const wrapper = clsx(baseWrapper, initialWrapperClassName);

  const [pounds, suffix] = abbreviateNumber(Math.floor(amount / 100));
  const cents = `${Math.round(amount % 100)}`.padStart(2, '0');

  const centsLabel = `.${cents}`;

  return {
    classNames: {
      wrapper,
      container,
    },
    pounds: pounds as number,
    suffix: suffix as string,
    centsLabel,
  };
}

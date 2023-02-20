import type { OPACITIES } from '~/components/Modal/constants';

export interface BaseFadeProps {
  show: boolean;
  className?: string;
  onEnd?: () => void;
  opacity?: typeof OPACITIES[number];
}

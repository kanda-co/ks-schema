import type { OPACITIES } from '~/components/Modal/constants';

interface BaseAnimatedModalContainerProps {
  id: string;
  opacity: typeof OPACITIES[number];
}

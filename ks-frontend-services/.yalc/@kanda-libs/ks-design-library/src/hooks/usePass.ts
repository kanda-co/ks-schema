import useVariants from '~/hooks/useVariants';
import type { StringIndexedObject } from 'types';
import { useClasses } from '~/hooks/index';
import useProps from '~/hooks/useProps';

export type Options = StringIndexedObject;

export default function usePass(options: Options = {}) {
  const { props, helpers = {} } = options;

  const variants = useVariants(options.variants || {});

  const classNames = useClasses(options.classNames || {}, {
    variants,
  });

  return useProps(props || {}, {
    classNames,
    variants,
    helpers,
  });
}

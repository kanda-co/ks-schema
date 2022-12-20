import React, { FunctionComponent } from 'react';
import type { TagProps } from '~/components/Tag/types';
import useTagClassName from '~/components/Tag/useTagClassName';

const Tag: FunctionComponent<TagProps> = function ({
  label,
  children,
  className: initialClassName,
  variant = 'outline',
  color = 'grey',
  size = 24,
}) {
  const className = useTagClassName({
    className: initialClassName,
    variant,
    color,
    size,
  });

  return (
    <span className={className}>
      {label}
      {children}
    </span>
  );
};

export default Tag;

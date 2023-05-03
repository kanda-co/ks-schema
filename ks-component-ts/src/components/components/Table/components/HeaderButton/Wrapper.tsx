import type { FunctionComponent } from 'react';
import useWrapperProps from './useWrapperProps';

export interface WrapperProps {
  index: number;
  children?: JSX.Element | JSX.Element[];
}

const Wrapper: FunctionComponent<WrapperProps> = function ({
  index,
  children,
}) {
  const { classNames, containerStyle } = useWrapperProps(index);

  return (
    <div className={classNames.container} style={containerStyle}>
      <div className={classNames.flex}>{children}</div>
    </div>
  );
};

export default Wrapper;

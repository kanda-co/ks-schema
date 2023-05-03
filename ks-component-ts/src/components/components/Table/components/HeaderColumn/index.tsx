import { SkeletonLoader } from '@kanda-libs/ks-design-library';
import type { FunctionComponent, ReactNode } from 'react';
import type { TableHeaderProps } from 'react-table';
import useMobileFullWidthCellStyle from '~/hooks/useMobileFullWidthCellStyle';
import HeaderButton from '../HeaderButton';
import useHeaderColumnProps from './useHeaderColumnProps';

export interface HeaderColumnProps extends TableHeaderProps {
  index: number;
  isLoading?: boolean;
  popoverButtons?: boolean;
  label: ReactNode;
}

const HeaderColumn: FunctionComponent<HeaderColumnProps> = function ({
  index,
  isLoading = false,
  popoverButtons = false,
  label,
  ...props
}) {
  const { classNames } = useHeaderColumnProps(index, popoverButtons);

  const { style: unformattedStyle, ...formattedProps } = props;
  const style = useMobileFullWidthCellStyle(unformattedStyle);

  return (
    <div {...formattedProps} style={style} className={classNames.main}>
      <SkeletonLoader
        isLoading={isLoading}
        wrapperClassName={classNames.loading}
        afterLoading={
          <HeaderButton.Wrapper index={index}>
            <HeaderButton.Button label={label} />
          </HeaderButton.Wrapper>
        }
      />
    </div>
  );
};

export default HeaderColumn;

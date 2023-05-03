import type { FunctionComponent, ReactNode } from 'react';
import type { TableCellProps } from 'react-table';
import { SkeletonLoader, Text } from '@kanda-libs/ks-design-library';
import useCellClassNames from './useCellClassNames';
import useMobileFullWidthCellStyle from '~/hooks/useMobileFullWidthCellStyle';

export interface CellProps extends TableCellProps {
  index: number;
  render: () => ReactNode;
  compact?: boolean;
  isLoading?: boolean;
  label?: string;
}

const Cell: FunctionComponent<CellProps> = function ({
  render,
  index,
  compact = false,
  isLoading = false,
  label,
  ...props
}) {
  const classNames = useCellClassNames(index, compact, isLoading);

  const { style: unformattedStyle, ...formattedProps } = props;
  const style = useMobileFullWidthCellStyle(unformattedStyle);

  return (
    <div {...formattedProps} style={style} className={classNames.cell}>
      <div className={classNames.container}>
        <div className={classNames.render}>
          <SkeletonLoader
            isLoading={isLoading}
            afterLoading={
              <>
                <Text text={`${label}:`} className={classNames.mobileLabel} />
                {render()}
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Cell;

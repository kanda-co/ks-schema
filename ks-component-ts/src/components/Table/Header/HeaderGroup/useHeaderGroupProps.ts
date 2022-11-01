import type { HeaderGroup, HeaderGroupProps } from './types';

export interface HeaderGroupPropsHook {
  headerGroupProps: HeaderGroupProps;
  headers: HeaderGroup['headers'];
  totalVisible: number;
}

export default function useHeaderGroupProps(
  headerGroup: HeaderGroup,
  allColumns: HeaderGroup['headers'],
): HeaderGroupPropsHook {
  const { headers, getHeaderGroupProps } = headerGroup;
  const headerGroupProps = getHeaderGroupProps({});

  const totalVisible = allColumns.filter((column) => column.isVisible).length;

  return {
    headerGroupProps,
    headers,
    totalVisible,
  };
}

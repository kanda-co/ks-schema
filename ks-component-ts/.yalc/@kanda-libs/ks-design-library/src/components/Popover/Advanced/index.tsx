import React, { FunctionComponent } from 'react';
import useAdvancedProps from '~/components/Popover/Advanced/useAdvancedProps';
import PopoverMenu from '~/components/PopoverMenu';
import type { PopoverMenuItemProps } from '~/components/PopoverMenu/PopoverMenuItem';
import type { AdvancedItem, AdvancedProps } from './types';

export type { AdvancedProps };

const Advanced: FunctionComponent<AdvancedProps> = function ({
  button,
  above = false,
  right = false,
  onAction,
  items: originalItems = [],
  wrapper: ButtonWrapper = ({ children }) => children,
  search: SearchResults,
  searchInput: SearchInput,
  searchPlaceholder = 'Search..',
  searchDebounceInterval = 200,
  size = 'xs',
  ...props
}) {
  const {
    classNames,
    showPopover,
    button: Button,
    panel,
    ref,
    handleClose,
    panelStyle,
    items,
    debouncedSearch,
    onSearch,
    clearSearch,
    showPanel,
    value,
  } = useAdvancedProps({
    button,
    above,
    right,
    items: originalItems as AdvancedItem[],
    onAction,
    searchDebounceInterval,
  });

  const SearchResultsTag = SearchResults as unknown as FunctionComponent<any>;
  const SearchInputTag = SearchInput as unknown as FunctionComponent<any>;

  return (
    <div className={classNames.wrapper}>
      {showPopover && (
        <div ref={ref} className={classNames.container}>
          <div className={classNames.panelWrapper}>
            <div className={classNames.popover}>
              <PopoverMenu
                header={
                  SearchResults && (
                    <SearchInputTag
                      value={value}
                      placeholder={searchPlaceholder}
                      onChange={onSearch}
                    />
                  )
                }
                size="xs"
                items={items as PopoverMenuItemProps[]}
                onClose={handleClose}
                {...props}
                content={
                  debouncedSearch ? (
                    <SearchResultsTag
                      query={debouncedSearch}
                      clearSearch={clearSearch}
                      handleClose={handleClose}
                    />
                  ) : null
                }
                {...props}
              />
            </div>
            {showPanel && (
              <div style={panelStyle} className={classNames.panel}>
                {panel({ handleClose })}
              </div>
            )}
          </div>
        </div>
      )}
      <ButtonWrapper>{Button as JSX.Element}</ButtonWrapper>
    </div>
  );
};

export default Advanced;

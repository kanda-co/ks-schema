import React, { FunctionComponent } from 'react';
import type { PopoverMenuProps } from './types';
import usePopoverMenu from './usePopoverMenu';
import PopoverMenuItem from './PopoverMenuItem';
import type { NavigationLinkProps } from '~/components/NavigationLink';
import type { StringIndexedObject } from '~/types';

const PopoverMenu: FunctionComponent<PopoverMenuProps> = function ({
  items,
  className = '',
  onClose,
  size,
  header,
  content,
  notice: Notice,
}) {
  const { linkComponent: LinkComponent, classNames } =
    usePopoverMenu(className);

  const LinkComponentTag =
    LinkComponent as FunctionComponent<NavigationLinkProps>;

  return (
    <div className={classNames.container}>
      {Notice && <Notice />}
      <div className={classNames.paddingContainer}>
        {header && (
          <>
            {header}
            <div className={classNames.seperatorWrapper}>
              <div className={classNames.seperator} />
            </div>
          </>
        )}
        <div onClick={onClose} className={classNames.content}>
          {content ||
            items.map(
              ({ icon, name, arrow, selected, seperator, ...linkProps }) => (
                <React.Fragment key={name}>
                  {seperator ? (
                    <div className={classNames.seperatorWrapper}>
                      <div className={classNames.seperator} />
                    </div>
                  ) : (
                    <>
                      {linkProps.onClick ? (
                        <div
                          key={name}
                          {...linkProps}
                          className={classNames.link}
                        >
                          <PopoverMenuItem
                            icon={icon}
                            name={name}
                            size={size}
                            arrow={arrow}
                            selected={selected}
                          />
                        </div>
                      ) : (
                        <LinkComponentTag
                          key={name}
                          {...(linkProps as StringIndexedObject<string>)}
                          className={classNames.link}
                        >
                          <PopoverMenuItem
                            icon={icon}
                            name={name}
                            size={size}
                            arrow={arrow}
                            selected={selected}
                          />
                        </LinkComponentTag>
                      )}
                    </>
                  )}
                </React.Fragment>
              ),
            )}
        </div>
      </div>
    </div>
  );
};

export default PopoverMenu;

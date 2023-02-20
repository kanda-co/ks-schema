import React, { FunctionComponent } from 'react';
import type { DesktopHeaderProps } from './types';
import Logo from '~/components/Logo';
import HelpButton from '~/components/HelpButton';
import type { HomeLinkProps } from '~/components/ConfigWrapper';
import useDesktopHeaderProps from './useDesktopHeaderProps';
import CompanyInfo from './CompanyInfo';
import DesktopMenu from './DesktopMenu';
import { CLASS_NAMES } from './constants';

const DesktopHeader: FunctionComponent<DesktopHeaderProps> = function ({
  items = [],
  help = true,
  hideHomeLink = false,
  noLinkLogo = false,
  showAvatar = true,
  ...companyInfo
}) {
  const {
    options,
    linkComponent: LinkComponent,
    homeLinkProps,
  } = useDesktopHeaderProps();

  const LogoTag = Logo as unknown as FunctionComponent<HomeLinkProps>;

  return (
    <div className={CLASS_NAMES.container}>
      {!hideHomeLink && (
        <React.Fragment>
          {noLinkLogo ? (
            <div className={CLASS_NAMES.homeLink}>
              <LogoTag className={CLASS_NAMES.logo} />
            </div>
          ) : (
            <LinkComponent className={CLASS_NAMES.homeLink} {...homeLinkProps}>
              <LogoTag className={CLASS_NAMES.logo} />
            </LinkComponent>
          )}
        </React.Fragment>
      )}
      <div className={CLASS_NAMES.optionsWrapper}>
        <div className={CLASS_NAMES.options}>
          {help && <HelpButton />}
          {options.map((option, i) => (
            <div key={String(i)}>{option}</div>
          ))}
        </div>
        <CompanyInfo {...companyInfo} showAvatar={showAvatar} />
      </div>
      <DesktopMenu companyItems={items} linkComponent={LinkComponent} />
    </div>
  );
};

export default DesktopHeader;

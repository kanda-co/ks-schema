import React, { FunctionComponent } from 'react';
import { Img } from 'react-image';
import type { CompanyInfoProps } from '~/components/DesktopHeader/CompanyInfo/types';
import { CLASS_NAMES, SKELETONS } from './constants';
import SkeletonLoader from '~/components/SkeletonLoader';
import Icon from '~/components/Icon';
import CompanyInfoPopover from '../CompanyInfoPopover';
import { DEFAULT_AVATAR_ICON_PROPS } from '~/common/constants';
import useIsMounted from '~/hooks/useIsMounted';

const CompanyInfo: FunctionComponent<CompanyInfoProps> = function ({
  companyName = 'My Kanda',
  companyProfilePicture,
  isLoading,
  showAvatar = true,
  ...restProps
}) {
  const isMounted = useIsMounted();

  return (
    <div className={CLASS_NAMES.container}>
      <div className={CLASS_NAMES.content}>
        {showAvatar && (
          <SkeletonLoader
            isLoading={isLoading}
            {...SKELETONS.avatar}
            afterLoading={
              isMounted ? (
                <Img
                  key={companyProfilePicture}
                  alt={companyName}
                  className={CLASS_NAMES.companyProfilePicture}
                  src={companyProfilePicture as string}
                  loader={<SkeletonLoader isLoading {...SKELETONS.avatar} />}
                  unloader={
                    <div className={CLASS_NAMES.defaultAvatar}>
                      <Icon {...DEFAULT_AVATAR_ICON_PROPS} />
                    </div>
                  }
                />
              ) : (
                <></>
              )
            }
          />
        )}
        <p className={CLASS_NAMES.companyName}>
          <SkeletonLoader
            isLoading={isLoading}
            afterLoading={companyName || 'My Kanda'}
            {...SKELETONS.title}
          />
        </p>
        <Icon icon="chevron-down" size={16} className="my-auto ml-2" />
      </div>
      <CompanyInfoPopover {...restProps} />
    </div>
  );
};

export default CompanyInfo;

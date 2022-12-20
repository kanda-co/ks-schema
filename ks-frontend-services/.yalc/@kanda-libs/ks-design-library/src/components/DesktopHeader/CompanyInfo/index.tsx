import React, { FunctionComponent } from 'react';
import { Img } from 'react-image';
import type { CompanyInfoProps } from '~/components/DesktopHeader/CompanyInfo/types';
import { CLASS_NAMES, SKELETONS } from './constants';
import SkeletonLoader from '~/components/SkeletonLoader';
import Icon from '~/components/Icon';
import CompanyInfoPopover from '../CompanyInfoPopover';
import { DEFAULT_AVATAR_ICON_PROPS } from '~/common/constants';

const CompanyInfo: FunctionComponent<CompanyInfoProps> = function ({
  companyName = 'My Kanda',
  companyProfilePicture,
  isLoading,
  ...restProps
}) {
  return (
    <div className={CLASS_NAMES.container}>
      <div className={CLASS_NAMES.content}>
        <SkeletonLoader
          isLoading={isLoading}
          {...SKELETONS.avatar}
          afterLoading={
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
          }
        />
        <p className={CLASS_NAMES.companyName}>
          <SkeletonLoader
            isLoading={isLoading}
            afterLoading={companyName || 'My Kanda'}
            {...SKELETONS.title}
          />
        </p>
        <Icon icon="chevron-down" size={16} className="ml-2 my-auto" />
      </div>
      <CompanyInfoPopover {...restProps} />
    </div>
  );
};

export default CompanyInfo;

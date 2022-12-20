import React, { FunctionComponent } from 'react';
import HelpCrunch from '~/components/HelpCrunch';
import ToastContainer from '~/components/ToastContainer';
import ModalsWrapper, {
  type ModalsWrapperProps,
} from '~/components/ModalsWrapper';

export interface CommonWrapperProps extends ModalsWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const CommonWrapper: FunctionComponent<CommonWrapperProps> = function ({
  children,
  ...modalsWrapperProps
}) {
  return (
    <ModalsWrapper {...modalsWrapperProps}>
      <HelpCrunch />
      <ToastContainer />
      <>{children}</>
    </ModalsWrapper>
  );
};

export default CommonWrapper;

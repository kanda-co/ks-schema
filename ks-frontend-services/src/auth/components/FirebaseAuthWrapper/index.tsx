import React, { FunctionComponent } from 'react';
import useFirebaseAuthWrapper from './useFirebaseAuthWrapper';

export interface Props {
  children: JSX.Element;
}

const FirebaseAuthWrapper: FunctionComponent<Props> = function ({ children }) {
  const isUserLoggedIn = useFirebaseAuthWrapper();

  return isUserLoggedIn ? children : null;
};

export default FirebaseAuthWrapper;

import React, { type FunctionComponent } from 'react';
import type { StringIndexedObject } from '../../../types';
import FirebaseAuthWrapper from '.';

function withFirebaseAuthWrapper<T extends StringIndexedObject>(
  Component: FunctionComponent<T>,
) {
  return (props: T) => (
    <FirebaseAuthWrapper>
      <Component {...props} />
    </FirebaseAuthWrapper>
  );
}

export default withFirebaseAuthWrapper;

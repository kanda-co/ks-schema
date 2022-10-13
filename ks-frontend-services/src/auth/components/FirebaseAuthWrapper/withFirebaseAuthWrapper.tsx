import React, { FunctionComponent } from 'react';
import { StringIndexedObject } from 'types';
import FirebaseAuthWrapper from '.';

const withFirebaseAuthWrapper =
  (Component: FunctionComponent<unknown>) => (props: StringIndexedObject) =>
    (
      <FirebaseAuthWrapper>
        <Component {...props} />
      </FirebaseAuthWrapper>
    );

export default withFirebaseAuthWrapper;

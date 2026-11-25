import React, { type FunctionComponent } from 'react';
import type { StringIndexedObject } from '../../../types';
declare function withFirebaseAuthWrapper<T extends StringIndexedObject>(Component: FunctionComponent<T>): (props: T) => React.JSX.Element;
export default withFirebaseAuthWrapper;

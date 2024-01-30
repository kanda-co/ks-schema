import { type FunctionComponent } from 'react';
import type { StringIndexedObject } from '../../../types';
declare function withFirebaseAuthWrapper<T extends StringIndexedObject>(Component: FunctionComponent<T>): (props: T) => import("react/jsx-runtime").JSX.Element;
export default withFirebaseAuthWrapper;

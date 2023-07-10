import { type FunctionComponent } from 'react';
import { type StringIndexedObject } from '@kanda-libs/ks-component-ts';

import AuthWrapper from '.';

function withAuthWrapper<T extends StringIndexedObject>(
  Component: FunctionComponent<T>,
) {
  return (props: T) => (
    <AuthWrapper>
      <Component {...props} />
    </AuthWrapper>
  );
}

export default withAuthWrapper;

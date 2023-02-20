import React, { FunctionComponent } from 'react';
import LoaderContainer from './LoaderContainer';

export interface LoaderProps {
  isLoading: boolean;
}

const Loader: FunctionComponent<LoaderProps> = function ({ isLoading }) {
  return (
    <LoaderContainer isLoading={isLoading}>
      {({ width, classNames }) => (
        <>
          {isLoading && <div className={classNames.overlay} />}
          <div data-cy="loader" className={classNames.container}>
            <div className={classNames.bar} style={{ width }} />
          </div>
        </>
      )}
    </LoaderContainer>
  );
};

export default Loader;

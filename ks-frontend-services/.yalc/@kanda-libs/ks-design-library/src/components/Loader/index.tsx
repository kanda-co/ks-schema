import React, { FunctionComponent, useContext, useEffect } from 'react';
import { ModalsWrapperContext } from '~/components/ModalsWrapper';

export interface LoaderProps {
  isLoading?: boolean;
}

const Loader: FunctionComponent<LoaderProps> = function ({
  isLoading = false,
}) {
  const { setShowLoader } = useContext(ModalsWrapperContext);

  useEffect(() => {
    setShowLoader(isLoading);
  }, [isLoading, setShowLoader]);

  useEffect(
    () => () => {
      setShowLoader(false);
    },
    [setShowLoader],
  );

  return <></>;
};

export default Loader;

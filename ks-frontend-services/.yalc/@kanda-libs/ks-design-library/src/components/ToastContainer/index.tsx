import React, { FunctionComponent } from 'react';
import {
  ToastContainer as ReactToastifyToastContainer,
  type ToastContainerProps,
} from 'react-toastify';
import useToastContainerState from '~/components/ToastContainer/useToastContainerState';

const ToastContainer: FunctionComponent<ToastContainerProps> = function (
  props,
) {
  const state = useToastContainerState(props);

  return <ReactToastifyToastContainer {...state} />;
};

export default ToastContainer;

import { ToastOptions } from 'react-toastify';
import { MessageProps } from '~/hooks/useToast/Message';
import { TOAST_MESSAGE_FUNCTION_PROPS } from '~/hooks/useToast/constants';

export type ToastMessageFunction = (
  message: string,
  messageProps?: Omit<MessageProps, 'message'>,
  options?: ToastOptions,
) => void;

export type ToastMessageFunctionType =
  keyof typeof TOAST_MESSAGE_FUNCTION_PROPS;

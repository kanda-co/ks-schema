import React from 'react';
import { toast, type ToastOptions } from 'react-toastify';
import type { Id, ToastContent } from 'react-toastify/dist/types';
import Message, { type MessageProps } from './Message';
import { TOAST_MESSAGE_FUNCTION_PROPS } from './constants';
import type { ToastMessageFunction, ToastMessageFunctionType } from './types';

export interface ToastHook {
  toast: (content: ToastContent, options?: ToastOptions) => Id;
  showInfo: ToastMessageFunction;
  showError: ToastMessageFunction;
  showWarning: ToastMessageFunction;
  showSuccess: ToastMessageFunction;
}

export default function useToast(): ToastHook {
  function createToastMessageFunction(
    type: ToastMessageFunctionType,
  ): ToastMessageFunction {
    return (
      message: string,
      messageProps: Omit<MessageProps, 'message'> = {},
      options: ToastOptions = {},
    ): void => {
      const props = {
        ...TOAST_MESSAGE_FUNCTION_PROPS[type],
        ...messageProps,
      };

      toast[type](<Message message={message} {...props} />, options);
    };
  }

  return {
    toast,
    showInfo: createToastMessageFunction('info'),
    showError: createToastMessageFunction('error'),
    showWarning: createToastMessageFunction('warning'),
    showSuccess: createToastMessageFunction('success'),
  };
}

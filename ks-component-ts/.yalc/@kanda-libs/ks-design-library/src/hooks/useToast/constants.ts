const BASE_PROPS = {
  showIcon: true,
  container: {
    className: 'flex flex-row w-full',
  },
  icon: {
    size: 24,
    className: 'my-auto mr-3',
  },
  span: {
    className: 'text-style-g-em text-neutral-900 my-auto',
  },
};

const INFO_MESSAGE_PROPS = {
  ...BASE_PROPS,
  icon: {
    ...BASE_PROPS.icon,
    icon: 'info',
    stroke: 'neutral-600',
  },
};

const ERROR_MESSAGE_PROPS = {
  ...BASE_PROPS,
  icon: {
    ...BASE_PROPS.icon,
    icon: 'error',
    stroke: 'red-200',
  },
};

const SUCCESS_MESSAGE_PROPS = {
  ...BASE_PROPS,
  icon: {
    ...BASE_PROPS.icon,
    icon: 'check',
    stroke: 'turquoise-300',
  },
};

const WARNING_MESSAGE_PROPS = {
  ...BASE_PROPS,
  icon: {
    ...BASE_PROPS.icon,
    icon: 'warning',
    stroke: 'orange-200',
  },
};

export const TOAST_MESSAGE_FUNCTION_PROPS = {
  info: INFO_MESSAGE_PROPS,
  error: ERROR_MESSAGE_PROPS,
  success: SUCCESS_MESSAGE_PROPS,
  warning: WARNING_MESSAGE_PROPS,
};

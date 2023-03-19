import { useCallback, useState } from "react";

export interface OptionalHiddenFieldHook {
  visible: boolean;
  onClick: () => void;
}

export default function useOptionalHiddenField(
  hasValue = false
): OptionalHiddenFieldHook {
  const [visible, setVisible] = useState(hasValue);

  const onClick = useCallback(() => {
    setVisible(true);
  }, [setVisible]);

  return {
    visible,
    onClick,
  };
}

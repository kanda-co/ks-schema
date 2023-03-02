import { useCallback, useState } from "react";

export interface OptionalHiddenFieldHook {
  visible: boolean;
  onClick: () => void;
}

export default function useOptionalHiddenField(): OptionalHiddenFieldHook {
  const [visible, setVisible] = useState(false);

  const onClick = useCallback(() => {
    setVisible(true);
  }, [setVisible]);

  return {
    visible,
    onClick,
  };
}

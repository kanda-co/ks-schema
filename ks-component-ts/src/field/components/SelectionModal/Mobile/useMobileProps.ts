import { SelectOption } from "~/field/components/Select/types";
import useButtonText from "~/field/components/SelectionModal/useButtonText";

export interface MobilePropsHook {
  ids: {
    modal: string;
    button: string;
  };
  buttonText: string;
}

export default function useMobileProps(
  name: string,
  options: SelectOption[]
): MobilePropsHook {
  const buttonText = useButtonText(name, options);

  const ids = {
    modal: `${name}-modal`,
    button: `${name}-button`,
  };

  return {
    ids,
    buttonText,
  };
}

import useButtonText from "~/field/components/SelectionModal/useButtonText";
import { SelectOption } from "~/field/components/Select/types";

export interface DesktopPropsHook {
  buttonText: string;
  buttonId: string;
}

export default function useDesktopProps(
  name: string,
  options: SelectOption[]
): DesktopPropsHook {
  const buttonText = useButtonText(name, options);

  const buttonId = `${name}-button`;

  return {
    buttonText,
    buttonId,
  };
}

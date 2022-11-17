import { SelectOption } from "~/field/components/Select/types";
import { useWatch } from "react-hook-form";
import { useEffect, useState } from "react";
import { extractName } from "./helpers";

export type ButtonTextHook = string;

export default function useButtonText(
  name: string,
  options: SelectOption[]
): ButtonTextHook {
  const value = useWatch({
    name,
  });

  const [buttonText, setButtonText] = useState(extractName(options, value));

  useEffect(() => {
    setButtonText(extractName(options, value));
  }, [value, name, options]);

  return buttonText;
}

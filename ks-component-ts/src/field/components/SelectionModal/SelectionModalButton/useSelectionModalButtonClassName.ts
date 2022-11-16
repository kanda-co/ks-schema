import useFormTheme from "~/hooks/useFormTheme";

export type SelectModalButtonClassNameHook = string;

export default function useSelectModalButtonClassName(): SelectModalButtonClassNameHook {
  const { paddingClasses } = useFormTheme();

  return paddingClasses;
}

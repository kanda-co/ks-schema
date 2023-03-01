import useFormTheme from "~/hooks/useFormTheme";

export default function useWarningClassName(): string | null {
  const { wrapperClasses } = useFormTheme();

  const className = wrapperClasses?.warning;

  if (className && className.indexOf("hidden") !== -1) {
    return null;
  }

  return className as string;
}

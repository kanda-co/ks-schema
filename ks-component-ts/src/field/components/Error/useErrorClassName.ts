import useFormTheme from "~/hooks/useFormTheme";

export default function useErrorClassName(): string | null {
  const { wrapperClasses } = useFormTheme();

  const className = wrapperClasses?.error;

  if (className && className.indexOf("hidden") !== -1) {
    return null;
  }

  return className as string;
}

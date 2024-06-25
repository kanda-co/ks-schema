import React, { createContext, FunctionComponent } from "react";
import { Theme } from "~/types";
import { DEFAULT_THEME, FORM_THEME_VARIANTS } from "./constants";

export const FormThemeContext = createContext<Theme>(DEFAULT_THEME);

export interface FormThemeProps {
  variant?: string;
  children?: JSX.Element | JSX.Element[];
}

const FormTheme: FunctionComponent<FormThemeProps> = function ({
  variant = "default",
  children,
}) {
  const theme = variant ? FORM_THEME_VARIANTS[variant] : DEFAULT_THEME;

  return (
    <FormThemeContext.Provider
      value={{
        ...theme,
        variant,
      }}
    >
      {children}
    </FormThemeContext.Provider>
  );
};

export default FormTheme;

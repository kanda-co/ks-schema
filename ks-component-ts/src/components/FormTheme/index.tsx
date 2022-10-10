import React, { createContext, FunctionComponent } from "react";
import { Theme } from "~/types";
import { DEFAULT_THEME, FORM_THEME_VARIANTS } from "./constants";

export const FormThemeContext = createContext<Theme>(DEFAULT_THEME);

export interface FormThemeProps {
  variant?: string;
}

const FormTheme: FunctionComponent<FormThemeProps> = function ({
  variant,
  children,
}) {
  const theme = variant ? FORM_THEME_VARIANTS[variant] : DEFAULT_THEME;

  return (
    <FormThemeContext.Provider value={theme}>
      {children}
    </FormThemeContext.Provider>
  );
};

export default FormTheme;

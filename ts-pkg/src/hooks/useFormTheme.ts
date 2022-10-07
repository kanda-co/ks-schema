import { useContext } from "react";
import { FormThemeContext } from "~/components/FormTheme";
import { DEFAULT_THEME } from "~/components/FormTheme/constants";
import { Theme } from "../types";

const useFormTheme = () => useContext<Theme>(FormThemeContext) || DEFAULT_THEME;

export default useFormTheme;

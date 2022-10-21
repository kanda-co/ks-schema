import { zxcvbn, ZxcvbnOptions, type ZxcvbnResult } from "@zxcvbn-ts/core";
import { useWatch, useFormContext } from "react-hook-form";
import { useEffect, useMemo } from "react";
import { useClasses } from "@kanda-libs/ks-design-library";
import { StringIndexedObject } from "~/types";
import { CLASS_NAMES, SCORE_LABELS, SCORE_COLORS } from "./constants";
import useDictionaries from "./useDictionaries";
import { PasswordStrengthIndicatorProps } from "./types";

export type PasswordStrengthIndicatorArgs = Omit<
  PasswordStrengthIndicatorProps,
  "description"
>;

export interface PasswordStrengthIndicatorHook {
  classNames: StringIndexedObject<string>;
  score: number;
  label: string;
  isLoading: boolean;
}

export default function usePasswordStrengthIndicator({
  className,
  userInputs,
  passwordFieldName,
  passwordScoreFieldName,
  userInputFieldNames,
}: PasswordStrengthIndicatorArgs): PasswordStrengthIndicatorHook {
  const { isLoading, dictionaries } = useDictionaries();

  const [password, ...userInputValues] = useWatch({
    name: [passwordFieldName as string, ...(userInputFieldNames || [])],
  });

  const { setValue } = useFormContext();

  /**
   * Update password options
   */
  useEffect(() => {
    const options = {
      dictionary: {
        ...dictionaries,
        userInputs: [...(userInputs || []), ...userInputValues],
      },
    };

    ZxcvbnOptions.setOptions(options);
  }, [userInputValues, userInputs, dictionaries]);

  const { score: strengthScore } = useMemo(
    () => zxcvbn(password || "") as ZxcvbnResult,
    [password]
  );

  const hasPasswordScore = password ? 1 : 0;

  const score = hasPasswordScore + strengthScore;

  const label = SCORE_LABELS[score];
  const color = SCORE_COLORS[score];

  const classNames = useClasses(CLASS_NAMES, {
    container: [".baseContainer", className],
    label: [".baseLabel", `text-${color}`],
  });

  useEffect(() => {
    if (!setValue) return;
    setValue(passwordScoreFieldName as string, score);
  }, [score, setValue, passwordScoreFieldName]);

  return {
    classNames,
    score,
    label,
    isLoading,
  };
}

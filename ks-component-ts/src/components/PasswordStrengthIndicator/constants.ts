export const CLASS_NAMES = {
  baseContainer: "flex flex-1 flex-col w-full items-start mb-6 -mt-3 text-left",
  info: "flex flex-1 flex-row w-full items-center mb-1",
  baseLabel: "w-16 text-right text-style-g-em",
  description: "text-style-h w-full text-neutral-600",
};

export const DICTIONARIES = [
  "https://raw.githubusercontent.com/zxcvbn-ts/zxcvbn/master/packages/languages/common/src/passwords.json",
  "https://raw.githubusercontent.com/zxcvbn-ts/zxcvbn/master/packages/languages/en/src/commonWords.json",
  "https://raw.githubusercontent.com/zxcvbn-ts/zxcvbn/master/packages/languages/en/src/firstnames.json",
  "https://raw.githubusercontent.com/zxcvbn-ts/zxcvbn/master/packages/languages/en/src/lastnames.json",
];

export const DESCRIPTION =
  "Must be at least 8 characters and contain at least one uppercase letter, one lowercase letter and one number";

export const SCORE_LABELS = [
  "Weak",
  "Weak",
  "Simple",
  "Good",
  "Strong",
  "Perfect",
];

export const SCORE_COLORS = [
  "neutral-200",
  "red-200",
  "red-200",
  "orange-200",
  "turquoise-300",
  "turquoise-400",
];

export const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

export const RETRY_INTERVAL = 100;

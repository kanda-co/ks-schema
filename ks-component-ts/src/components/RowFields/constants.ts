export interface RowFieldsClassNames {
  container: string;
  field: string;
}

export const CLASS_NAMES: RowFieldsClassNames = {
  container: "flex flex-row w-full",
  field: "flex w-full mr-4 last:mr-0",
};

export const LEFT_ALIGNED_CLASS_NAMES: RowFieldsClassNames = {
  container: "flex flex-row",
  field: "flex mr-4 last:mr-0",
};

export const VERTICALLY_CENTERED_CLASS_NAME = "items-center";

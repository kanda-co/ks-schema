import React, { createContext, FunctionComponent, useEffect } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { type StringIndexedObject } from "~/types";
import { type ChildrenArgs } from "./types";

interface ArrayWrapperContextValue {
  arrayName: string;
}

export const ArrayWrapperContext = createContext<ArrayWrapperContextValue>({
  arrayName: "",
});

export interface ArrayWrapperProps {
  arrayName: string;
  initialData?: StringIndexedObject;
  children: (args: ChildrenArgs) => JSX.Element;
}

const ArrayWrapper: FunctionComponent<ArrayWrapperProps> = function ({
  arrayName,
  initialData = {},
  children,
}) {
  const { getValues, setValue } = useFormContext();
  const { fields, ...arrayProps } = useFieldArray({
    name: arrayName,
  });

  const showRemove = fields.length > 1;

  /**
   * Effect to set the value if no value has previously been set
   */
  useEffect(() => {
    const values = getValues(arrayName);
    if (values) return;
    setValue(arrayName, [{}]);
  }, [arrayName, getValues, setValue]);

  /**
   * Effect to set the initial data
   */
  useEffect(() => {
    if (!initialData) return;
    const values = getValues(arrayName);
    if (values) return;
    setValue(arrayName, initialData);
  }, [arrayName, getValues, setValue, initialData]);

  return (
    <ArrayWrapperContext.Provider
      value={{
        arrayName,
      }}
    >
      {children({
        arrayName,
        fields,
        arrayProps: { ...arrayProps, showRemove },
      })}
    </ArrayWrapperContext.Provider>
  );
};

export default ArrayWrapper;

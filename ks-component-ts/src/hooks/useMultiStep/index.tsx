import { useCallback, useEffect, useState } from "react";
import { DeepPartial, useForm, useWatch } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import type { StringIndexedObject } from "~/types";
import { getInitalData, getLocalStorageKey } from "./helpers";
import type { MultiStepRouterState } from "./types";

export interface MultiStepHook<T extends StringIndexedObject> {
  data: T;
  form: ReturnType<typeof useForm<Partial<T>>>;
  onNextPage: (data: T) => void;
  onSubmit: (data: T) => void;
  formWrapperProps: {
    name: string;
    page: keyof T;
    form: ReturnType<typeof useForm<Partial<T>>>;
    onSubmit: (data: StringIndexedObject) => void;
  };
  handleFormSubmit: (data: StringIndexedObject) => void;
  isLoading: boolean;
  isSubmitting: boolean;
}

export default function useMultiStep<T extends StringIndexedObject>(
  name: string,
  currentPage: keyof T,
  handleSubmit: (data: T, cleanup: () => void) => void,
  urls: Record<keyof T, string>,
  isLoading = false,
  isSubmitting = false
): MultiStepHook<T> {
  const localStorageKey = getLocalStorageKey(name);
  const pages = Object.keys(urls);
  const currentPageIndex = pages.findIndex((page) => page === currentPage);

  const { push } = useHistory();
  const { state } = useLocation<MultiStepRouterState<T>>();

  const [data] = useState<Partial<T>>(getInitalData<T>(name, state));

  const form = useForm<Partial<T>>({
    defaultValues: data as DeepPartial<Partial<T>>,
  });

  const values = useWatch({
    control: form.control,
  });

  useEffect(() => {
    // Save the data to local storage on change
    if (values) {
      localStorage.setItem(localStorageKey, JSON.stringify(values));
    }
  }, [values, localStorageKey]);

  const onNextPage = useCallback(
    (currentData: T) => {
      const nextPage = urls[pages[currentPageIndex + 1]];

      const formattedData = {
        ...data,
        ...currentData,
      };

      localStorage.setItem(localStorageKey, JSON.stringify(formattedData));

      push(nextPage, {
        page: currentPage,
        data: formattedData,
      });
    },
    [currentPage, data, currentPageIndex, localStorageKey, push, urls, pages]
  );

  const removeItem = useCallback(
    () => localStorage.removeItem(localStorageKey),
    [localStorageKey]
  );

  const onSubmit = useCallback(
    (finalData: T) => {
      handleSubmit(finalData, removeItem);
    },
    [handleSubmit, removeItem]
  );

  const handleFormSubmit = useCallback(
    (currentData: StringIndexedObject) => {
      const formattedData = currentData as T;
      const lastItem = currentPageIndex === pages.length - 1;

      if (lastItem) {
        onSubmit(formattedData);
        return;
      }

      onNextPage(formattedData);
    },
    [currentPageIndex, pages, onSubmit, onNextPage]
  );

  const formWrapperProps = {
    name,
    form,
    page: currentPage,
    onSubmit: handleFormSubmit,
  };

  return {
    data: data as T,
    form,
    onNextPage,
    onSubmit,
    formWrapperProps,
    handleFormSubmit,
    isLoading,
    isSubmitting,
  };
}

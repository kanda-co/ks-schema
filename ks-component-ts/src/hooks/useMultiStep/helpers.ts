import type { StringIndexedObject } from "@kanda-libs/ks-design-library";
import type { MultiStepRouterState } from "./types";
import { LOCAL_STORAGE_KEY_PREFIX } from "./constants";

export const getLocalStorageKey = (name: string) =>
  [LOCAL_STORAGE_KEY_PREFIX, name].join("-");

export const getInitalData = <T extends StringIndexedObject>(
  name: string,
  state: MultiStepRouterState<T>
) => {
  const localStorageKey = getLocalStorageKey(name);
  const localStorageData = localStorage.getItem(localStorageKey);
  const localStorageDataParsed = localStorageData
    ? JSON.parse(localStorageData)
    : {};

  if (localStorageDataParsed) {
    return localStorageDataParsed as Partial<T>;
  }

  if (state) {
    return state.data as Partial<T>;
  }

  return {} as Partial<T>;
};

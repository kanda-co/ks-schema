import { DICTIONARIES } from "./constants";
import { Dictionaries } from "./types";

/**
 * Returns dictionaries needed to generate password strength score
 */
export const loadDictionaries = async (): Promise<Dictionaries> => {
  const promises = DICTIONARIES.map(async (url: string) => {
    const response = await fetch(url);

    return response.json();
  });

  return Promise.all(promises) as unknown as Promise<Dictionaries>;
};

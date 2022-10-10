import { BASE_RATES } from "./constants";
import { StringIndexedObject } from "~/types";

/**
 * Map the rates to the correct format
 */
export const getRates = (rates: string[]): StringIndexedObject<string[]> => {
  // If no rates are provided, return the base rates
  if (!rates || rates.length === 0) return BASE_RATES;
  // Map the available rates into an object
  const mappedRates = rates.reduce((all, rate) => {
    const [term, apr] = rate.toLowerCase().includes("free")
      ? [rate.split("_").slice(-1)[0], "FREE"]
      : rate.split("_").slice(-2);

    if (all[apr]) {
      all[apr].push(`${parseInt(term, 10)}`);
      return all;
    }
    return { ...all, [apr]: [`${parseInt(term, 10)}`] };
  }, {} as StringIndexedObject<string[]>);
  // If mapped rates is empty, return BASE_RATES
  if (Object.keys(mappedRates).length === 0) return BASE_RATES;

  return mappedRates;
};

/**
 * Function to calculate deposit from price
 * @param price Price of the job
 * @param deposit Percentage deposit
 * @returns deposit price
 */
export const calculateDeposit = (
  price: number,
  deposit: number
): number | null => {
  if (!deposit) return null;
  return Math.ceil((price * deposit) / 100);
};

export interface AprOption {
  name: string;
  value: string;
}

/**
 * Function to create APR options object for radio select
 * @param aprs Array of strings representing APRs
 * @returns  APR options
 */
export const createAprOptions = (aprs: string[]): AprOption[] =>
  aprs
    // Map APR values to array of objects containing name and value
    .map((apr) => {
      if (apr.toLowerCase() === "free") return { name: "0%", value: "0" };
      return {
        name: `${(parseInt(apr, 10) / 100).toString()}%`,
        value: `${parseInt(apr, 10) / 100}`,
      };
    })
    // Sort by the APR value
    .sort((apr1, apr2) => {
      if (parseFloat(apr1.value) < parseFloat(apr2.value)) return -1;
      if (parseFloat(apr1.value) > parseFloat(apr2.value)) return 1;
      return 0;
    });

/**
 * Function to create terms options object for radio select
 * @param rates Object containing available rates
 * @param {String|Number} apr The selected APR
 * @returns {Number} deposit price
 */
export const createTermOptions = (
  rates: StringIndexedObject<string[]>
): StringIndexedObject<AprOption[]> =>
  Object.keys(rates).reduce((allTerms, key) => {
    const access = key === "FREE" ? "0" : `${parseInt(key, 10) / 100}`;
    const currentRates = rates[key].sort(
      (term1, term2) =>
        (term1 as unknown as number) - (term2 as unknown as number)
    );
    const terms = currentRates.map((term) => {
      if (parseInt(term as unknown as string, 10) < 12)
        return { name: `${term} mo`, value: term };
      if (parseInt(term as unknown as string, 10) === 12)
        return { name: `1 yr`, value: "12" };
      return {
        name: `${(term as unknown as number) / 12} yrs`,
        value: term,
      };
    });
    return {
      ...allTerms,
      [access]: terms,
    };
  }, {});

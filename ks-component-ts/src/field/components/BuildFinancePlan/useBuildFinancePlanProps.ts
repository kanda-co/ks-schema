import { useMemo, useEffect, useRef } from "react";
import { useWatch, useFormContext } from "react-hook-form";
import { useClasses } from "@kanda-libs/ks-design-library";
import type { StringIndexedObject } from "~/types";
import {
  getRates,
  calculateDeposit,
  createAprOptions,
  createTermOptions,
  AprOption,
} from "./helpers";
import useFieldNames, { FieldNamesHook } from "./useFieldNames";
import { CLASS_NAMES, BASE_RATES } from "./constants";

import type { BuildFinancePlanProps } from "./index";

export type BuildFinancePlanPropsArgs = BuildFinancePlanProps;

export interface BuildFinancePlanPropsHook {
  classNames: StringIndexedObject<string>;
  fields: FieldNamesHook;
  depositValue: number | null;
  showDeposit: boolean;
  aprs: AprOption[];
  terms: AprOption[];
}

export default function useBuildFinancePlanProps({
  name,
  availableRates,
  price,
  className,
  depositTaken,
  isLoading,
}: BuildFinancePlanPropsArgs): BuildFinancePlanPropsHook {
  const fields = useFieldNames(name as string);

  const { setValue } = useFormContext();

  const classNames = useClasses(CLASS_NAMES, {
    container: [".container", className],
  });

  /**
   * Gets current form values
   */

  const [deposit, depositPercentage, rate] = useWatch({
    name: [fields.deposit, fields.depositPercentage, fields.rate],
  });

  const showDeposit = !depositTaken;

  /**
   * Determines the value of the deposit
   */
  const depositValue = useMemo(() => {
    if (depositTaken) return depositTaken;
    return calculateDeposit(price as number, depositPercentage);
  }, [price, depositTaken, depositPercentage]);

  const [rates, aprs, terms] = useMemo(() => {
    if (isLoading)
      return [
        BASE_RATES,
        createAprOptions(Object.keys(BASE_RATES)),
        createTermOptions(BASE_RATES),
      ];
    return [
      getRates(availableRates as string[]),
      createAprOptions(Object.keys(getRates(availableRates as string[]))),
      createTermOptions(getRates(availableRates as string[])),
    ];
  }, [isLoading, availableRates]);

  const rateRef = useRef(rate);

  /**
   * When deposit value changes, which happens when user clicks a deposit
   * percentage, update the deposit field
   */
  useEffect(() => {
    setValue(fields.deposit, depositValue);
  }, [setValue, fields, depositValue]);

  /**
   * When rate is changed, set the term
   */
  useEffect(() => {
    if (isLoading || !rate) return;
    // console.log('Not loading.');
    if (rate === rateRef.current) {
      // console.log('Same rate');
      return;
    }
    // console.log('Rate chosen: ', rate);
    rateRef.current = rate;
    const initialTerm = terms[rate][0].value.toString();
    setValue(fields.term, initialTerm);
  }, [rate, fields, setValue, terms, isLoading]);

  /**
   * Set initial values
   */
  useEffect(() => {
    // reset values on isLoading
    if (isLoading) {
      setValue(fields.deposit, undefined);
      setValue(fields.rate, undefined);
      setValue(fields.term, undefined);
      return;
    }

    // If deposit is set, return
    if (deposit) return;

    // Extract intiial values
    const initialApr = aprs[0].value.toString();
    const initialTerm = terms[initialApr][0].value.toString();

    // set rate reference
    rateRef.current = initialApr;

    // Set values
    if (depositTaken) {
      setValue(fields.deposit, depositTaken);
      setValue(fields.rate, initialApr);
      setValue(fields.term, initialTerm);
      return;
    }
    setValue(fields.depositPercentage, 10);
    setValue(fields.deposit, (10 * (price as number)) / 100);
    setValue(fields.rate, initialApr);
    setValue(fields.term, initialTerm);
  }, [
    fields,
    deposit,
    depositTaken,
    rates,
    aprs,
    terms,
    price,
    setValue,
    isLoading,
  ]);

  return {
    classNames,
    fields,
    depositValue,
    showDeposit,
    aprs,
    terms: terms[rate || "11.9"],
  };
}

import { useState, useRef, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { useWatch } from "react-hook-form";
import { DEBOUNCE_INTERVAL, NO_ADDRESSES } from "./constants";
import { validatePostcode, checkPostcodesMatch } from "./helpers";
import type { PostcodeInputProps } from "../types";

export type PostcodeInputArgs = Omit<
  PostcodeInputProps,
  "label" | "warning" | "icon" | "isLoading"
>;

export type PostcodeInputHook = Omit<
  PostcodeInputProps,
  "data" | "error" | "isValidating" | "callback"
>;

export default function usePostcodeInput({
  name,
  callback,
  data,
  error: apiError,
  isValidating: isLoading,
  ...restProps
}: PostcodeInputArgs): PostcodeInputHook {
  /**
   * Gets postcode value
   */
  const postalCode = useWatch({ name });

  /**
   * Debounces values to reduce number of calls
   */
  const [debouncedPostalCode] = useDebounce(postalCode, DEBOUNCE_INTERVAL);

  const isPostcodeValid = validatePostcode(debouncedPostalCode || "");

  const postCodeRef = useRef(debouncedPostalCode);

  const [toSearch, setToSearch] = useState(null);

  const warning = apiError
    ? "This postcode returned no results - you'll have to enter your address manually"
    : null;

  /**
   * Effect passes fetched data back through callback
   */
  useEffect(() => {
    if (!callback) return;
    if (apiError) {
      callback(NO_ADDRESSES);
      return;
    }
    if (isPostcodeValid && data?.postcode) {
      postCodeRef.current = data.postcode;
    }
    callback({
      ...data,
      isLoading,
    });
  }, [
    callback,
    isLoading,
    isPostcodeValid,
    data,
    apiError,
    debouncedPostalCode,
  ]);

  useEffect(() => {
    if (!isPostcodeValid) {
      setToSearch(null);
      return;
    }
    if (checkPostcodesMatch(debouncedPostalCode, postCodeRef.current)) return;
    setToSearch(debouncedPostalCode.trim());
  }, [debouncedPostalCode, isPostcodeValid]);

  useEffect(() => {
    if (toSearch) return;
    if (!postCodeRef.current) return;
    setToSearch(postCodeRef.current);
  }, [toSearch]);

  return {
    ...restProps,
    name,
    warning,
  };
}

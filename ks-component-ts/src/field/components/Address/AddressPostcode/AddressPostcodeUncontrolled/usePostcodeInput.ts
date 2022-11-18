import { useState, useRef, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { useWatch } from "react-hook-form";
import { DEBOUNCE_INTERVAL, NO_ADDRESSES } from "./constants";
import { validatePostcode, checkPostcodesMatch } from "./helpers";
import type { PostcodeProps } from "~/field/components/Address/types";
import {
  Address,
  Service,
  services,
  useLoadData,
} from "@kanda-libs/ks-frontend-services";
import { StringIndexedObject } from "~/types";

export type PostcodeInputArgs = Omit<
  PostcodeProps,
  "label" | "warning" | "icon" | "isLoading"
>;

export interface PostcodeInputHook
  extends Omit<PostcodeProps, "data" | "error" | "isValidating" | "callback"> {
  error?: string;
}

export default function usePostcodeInput({
  name = "",
  callback,
  onPostcodeSearch,
  ...restProps
}: PostcodeInputArgs): PostcodeInputHook {
  /**
   * Gets postcode value
   */
  const postCode = useWatch({ name });

  /**
   * Debounces values to reduce number of calls
   */
  const [debouncedPostalCode] = useDebounce(postCode, DEBOUNCE_INTERVAL);

  const isPostcodeValid = validatePostcode(debouncedPostalCode || "");

  const {
    data,
    error: apiError,
    isValidating,
    mutate,
  } = useLoadData(
    isPostcodeValid &&
      (services.address.find as unknown as Service<
        Address,
        StringIndexedObject,
        StringIndexedObject
      >),
    {
      shouldRetryOnError: false,
      useParamsAsKey: true,
    },
    {
      params: { postCode: debouncedPostalCode },
    }
  );

  const postCodeRef = useRef(debouncedPostalCode);

  const [toSearch, setToSearch] = useState(null);

  const error =
    isPostcodeValid && apiError
      ? "This postcode returned no results - you'll have to enter your address manually"
      : "";

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
      isLoading: isValidating,
    });
  }, [
    toSearch,
    callback,
    isValidating,
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
    if (onPostcodeSearch) {
      onPostcodeSearch(debouncedPostalCode.trim());
    }
  }, [debouncedPostalCode, isPostcodeValid]);

  useEffect(() => {
    if (!toSearch || !onPostcodeSearch) return;

    onPostcodeSearch(toSearch);
  }, [toSearch, onPostcodeSearch]);

  useEffect(() => {
    if (toSearch) return;
    if (!postCodeRef.current) return;
    setToSearch(postCodeRef.current);
  }, [toSearch]);

  return {
    ...restProps,
    name,
    error,
  };
}

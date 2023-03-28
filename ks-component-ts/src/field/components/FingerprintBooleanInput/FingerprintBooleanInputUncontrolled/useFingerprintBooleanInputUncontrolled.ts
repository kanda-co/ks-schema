import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import useFormTheme from "~/hooks/useFormTheme";
import clsx from "clsx";
import { DEFAULT_IP, CLASS_NAMES } from "./constants";
import { getCurrentTimeStamp } from "~/field/components/FingerprintBooleanInput/FingerprintBooleanInputUncontrolled/helpers";
import { HandleComponent, HandleType } from "~/components/Handle/types";
import { getHandle } from "~/field/components/BooleanInput/BooleanInputUncontrolled/helpers";
import {
  InfoIP,
  Service,
  services,
  useSubmit,
} from "@kanda-libs/ks-frontend-services";
import { StringIndexedObject } from "~/types";

export interface Hook {
  Handle: HandleComponent;
  skeletonClassName: string;
}

export default function useFingerprintBooleanInputUncontrolled(
  name: string,
  handleType: HandleType
): Hook {
  const [ip, setIp] = useState(DEFAULT_IP);
  const { skeletonClasses } = useFormTheme();

  const { setValue } = useFormContext();

  const { submit: getIp } = useSubmit(
    services.infoIP.infoIP as unknown as Service<
      InfoIP,
      StringIndexedObject,
      StringIndexedObject
    >
  );

  const skeletonClassName = clsx(skeletonClasses, CLASS_NAMES.skeleton);

  /**
   * Set the value of the field to the current ip as a default or when the
   * response comes back from the API
   */
  useEffect(() => {
    if (!ip) {
      setValue(`${name.split(".")[0]}.ip`, DEFAULT_IP);
      setValue(`${name.split(".")[0]}.timestamp`, 0);
      return;
    }
    setValue(`${name.split(".")[0]}.ip`, ip);
    setValue(`${name.split(".")[0]}.timestamp`, getCurrentTimeStamp());
  }, [name, setValue, ip]);

  /**
   * A useEffect hook for calling the API to get the IP address
   */
  useEffect(() => {
    getIp({})
      .then(({ data }: StringIndexedObject) => {
        setIp(data?.ipv4 || DEFAULT_IP);
      })
      .catch((err) => console.log(err));
    7;
  }, []);

  return {
    Handle: getHandle(handleType),
    skeletonClassName,
  };
}

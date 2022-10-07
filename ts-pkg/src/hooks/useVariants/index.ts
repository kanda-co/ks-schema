import { useContext } from "react";
import { useIsDesktop, LoadingProvider } from "@kanda-libs/ks-design-library";
import { StringIndexedObject } from "~/types";

export interface Hook extends StringIndexedObject {
  media: string;
  loading: boolean;
}

export default function useVariants(variants: StringIndexedObject): Hook {
  const isDesktop = useIsDesktop();
  const loading = useContext(LoadingProvider.Context);

  const media = isDesktop ? "desktop" : "mobile";

  return { media, loading, ...variants };
}

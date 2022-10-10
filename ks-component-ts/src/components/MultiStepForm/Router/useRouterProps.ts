import {
  FunctionComponent,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { DEFAULT_SLIDER_PROPS } from "./constants";
import { Context } from "../Context";
import { Pages, SliderProps } from "~/components/MultiStepForm/types";

export interface RouterPropsHook {
  allPages: FunctionComponent<any>[];
  CurrentSlide: FunctionComponent<any>;
  sliderProps: SliderProps;
}

export default function useRouterProps(
  pages: Pages,
  initialSliderProps: SliderProps
): RouterPropsHook {
  const {
    step,
    sliderRef,
    setCurrentStepIndex,
    currentStepIndex,
    lockButtons,
  } = useContext(Context);

  const [initialSlide] = useState(currentStepIndex);

  const CurrentSlide = pages[step];

  const allPages = useMemo(() => Object.values(pages), [pages]);

  const options = useMemo(
    () => ({
      ...DEFAULT_SLIDER_PROPS,
      ...initialSliderProps,
    }),
    [initialSliderProps]
  );
  /**
   * Updates step index when slide is swiped and
   * disables next and previous buttons while animating
   */
  const beforeChange = useCallback(
    (_, next) => {
      setTimeout(() => {
        if (lockButtons) {
          lockButtons.current = false;
        }
      }, options.speed);

      if (lockButtons) {
        lockButtons.current = true;
      }

      if (!setCurrentStepIndex) {
        return;
      }

      setCurrentStepIndex(next);
    },
    [setCurrentStepIndex, lockButtons, options]
  );

  const sliderProps = {
    ...options,
    initialSlide,
    beforeChange,
    ref: sliderRef,
  };

  return {
    allPages,
    CurrentSlide,
    sliderProps,
  };
}

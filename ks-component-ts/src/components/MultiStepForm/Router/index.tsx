import React, { type FunctionComponent, Suspense } from "react";
import { Pages, SliderProps } from "~/components/MultiStepForm/types";
import useRouterProps from "~/components/MultiStepForm/Router/useRouterProps";

const LazySlider = React.lazy(() => import("react-slick"));

export interface RouterProps {
  /**
   * Pages
   */
  pages: Pages;
  /**
   * Slider props
   */
  sliderProps?: SliderProps;
  /**
   * Display as slider
   */
  slider?: boolean;
  /**
   * Loading component
   */
  fallback?: JSX.Element;
}

const Router: FunctionComponent<RouterProps> = function ({
  pages,
  fallback = null,
  slider = false,
  sliderProps: initialSliderProps = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    infinite: false,
  },
}) {
  const { allPages, CurrentSlide, sliderProps } = useRouterProps(
    pages,
    initialSliderProps
  );
  return (
    <>
      {slider ? (
        <>
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <Suspense fallback={fallback}>
            <LazySlider {...sliderProps}>
              {allPages.map((Page, i) => (
                <React.Fragment key={String(i)}>
                  <Page />
                </React.Fragment>
              ))}
            </LazySlider>
          </Suspense>
        </>
      ) : (
        <CurrentSlide />
      )}
    </>
  );
};

export default Router;

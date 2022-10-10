import React, { FunctionComponent } from "react";
import useIndicatorItems from "./useIndicatorItems";
import { CLASS_NAMES } from "./constants";

export interface IndicatorProps {}

const Indicator: FunctionComponent<IndicatorProps> = function ({}) {
  const items = useIndicatorItems();

  return (
    <div className={CLASS_NAMES.container}>
      <div className={CLASS_NAMES.content}>
        {items.map((className, i) => (
          <div key={String(i)} className={className} />
        ))}
      </div>
    </div>
  );
};

export default Indicator;

import { FunctionComponent } from "react";
import { CLASS_NAMES, SKELETONS } from "./constants";
import { StringIndexedObject } from "~/types";

interface ChildrenArgs {
  classNames: StringIndexedObject<string>;
  skeletons: StringIndexedObject<string | number>;
}

export interface Props {
  small?: boolean;
  children: (args: ChildrenArgs) => JSX.Element;
}

const Container: FunctionComponent<Props> = function ({ small, children }) {
  const classNames = small ? CLASS_NAMES.small : CLASS_NAMES.default;

  const skeletons = small ? SKELETONS.small : SKELETONS.default;

  return children({
    classNames,
    skeletons,
  });
};

export default Container;

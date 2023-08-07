import type { FunctionComponent } from "react";
import { createRoutedApp } from "@kanda-libs/ks-frontend-services";

const {
  router: { Router },
} = createRoutedApp<RootState, PageKeys>(
  store,
  // TODO: requiredRoles
  args,
  NotFoundPage
);

const RoutedApp: FunctionComponent = function () {
  return <div></div>;
};

export default RoutedApp;

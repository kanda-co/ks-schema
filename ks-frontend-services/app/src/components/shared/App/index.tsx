import type { FunctionComponent } from 'react';
import {
  actions,
  createAction,
  createRoutedApp,
} from '@kanda-libs/ks-frontend-services';
import { RootState, store } from '../../../store';
import { PageKeys, URLS } from '../../../config';

import Home from '../../../pages/Home';
import Login from '../../../pages/Login';

const {
  pages,
  router: { Router },
} = createRoutedApp<RootState, PageKeys>(store, {
  home: {
    path: URLS.home,
    PageComponent: Home,
    requiredRoles: [],
    loadingDependencies: [],
    initialDataActions: [],
  },

  login: {
    path: URLS.login,
    PageComponent: Login,
    loadingDependencies: [],
    initialDataActions: [],
  },
});

export { pages };

const App: FunctionComponent = function () {
  return <Router />;
};

export default App;

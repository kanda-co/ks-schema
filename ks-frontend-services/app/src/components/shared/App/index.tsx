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

const x = createAction(actions.getJob, {}, true, (job) => [
  createAction(actions.getLead, {
    params: { id: job.quoted_to },
  }),
]);

const {
  pages,
  router: { Router },
} = createRoutedApp<RootState, PageKeys>(store, {
  home: {
    path: URLS.home,
    PageComponent: Home,
    idRequired: true,
    requiredRoles: [],
    loadingDependencies: [],
    initialDataActions: [
      createAction(actions.getJob, {}, true, (job) => {
        console.log('job', job);
        alert('test');
        return [
          createAction(actions.getLead, {
            params: { id: job.quoted_to },
          }),
        ];
      }),
    ],
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

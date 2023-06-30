import { Switch, Route } from 'react-router-dom';

import Services from './Services';
import Login from './Login';
import SignUp from './SignUp';
import Logout from './Logout';
import PdfCreate from './PdfCreate';
import Sheets from './Sheets';

import { AuthWrapper } from '../components';
import config from '../config';

function Pages() {
  return (
    <Switch>
      <Route path={config.URLS.HOME}>
        <AuthWrapper>
          <Services />
        </AuthWrapper>
      </Route>
      <Route path={config.URLS.SIGNUP}>
        <SignUp />
      </Route>
      <Route path={config.URLS.LOGIN}>
        <Login />
      </Route>
      <Route path={config.URLS.LOGOUT}>
        <Logout />
      </Route>
      <Route path={config.URLS.PDF_CREATE}>
        <PdfCreate />
      </Route>
      <Route path={config.URLS.SHEETS}>
        <Sheets />
      </Route>
    </Switch>
  );
}

export default Pages;

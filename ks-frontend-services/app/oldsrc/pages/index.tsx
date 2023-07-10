import { Switch, Route } from 'react-router-dom';

import Services from './Services';
import Login from './Login';
import SignUp from './SignUp';
import Logout from './Logout';
import PdfCreate from './PdfCreate';
import Sheets from './Sheets';
import Enterprise from './Enterprise';
import Address from './Address';

import { AuthWrapper } from '../components';
import config from '../config';

function Pages() {
  return (
    <Switch>
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
      <Route path={config.URLS.ENTERPRISE}>
        <Enterprise />
      </Route>
      <Route path={config.URLS.ADDRESS}>
        <Address />
      </Route>
      <Route path={config.URLS.HOME}>
        <AuthWrapper>
          <Services />
        </AuthWrapper>
      </Route>
    </Switch>
  );
}

export default Pages;

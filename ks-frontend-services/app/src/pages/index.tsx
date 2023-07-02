import { Switch, Route } from 'react-router-dom';

import Services from './Services';
import Login from './Login';
import SignUp from './SignUp';
import Logout from './Logout';
import PdfCreate from './PdfCreate';
import Sheets from './Sheets';
import Lead from './Lead';

import { AuthWrapper } from '../components';
import config from '../config';

function Pages() {
  return (
    <Switch>
      <Route path={config.URLS.LOGIN}>
        <Login />
      </Route>
      <Route path={config.URLS.LOGOUT}>
        <Logout />
      </Route>
      <Route path={config.URLS.SIGNUP}>
        <SignUp />
      </Route>
      <Route path={config.URLS.PDF_CREATE}>
        <PdfCreate />
      </Route>
      <Route path={config.URLS.SHEETS}>
        <Sheets />
      </Route>
      <Route path={config.URLS.LEAD}>
        <Lead />
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

// <Route path={config.URLS.LEAD}>
// <AuthWrapper>
//   <Services />
// </AuthWrapper>
// </Route>

//   /* <Route path={config.URLS.HOME}>
// <AuthWrapper>
//   <Services />
// </AuthWrapper>
// </Route> */
//

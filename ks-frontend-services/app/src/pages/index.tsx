import { Routes, Route } from 'react-router-dom';

import Services from './Services';
import Login from './Login';
import SignUp from './SignUp';
import Logout from './Logout';

import { AuthWrapper } from '../components';
import config from '../config';

function Pages() {
  return (
    <Routes>
      <Route
        path={config.URLS.HOME}
        element={
          <AuthWrapper>
            <Services />
          </AuthWrapper>
        }
      />
      <Route path={config.URLS.SIGNUP} element={<SignUp />} />
      <Route path={config.URLS.LOGIN} element={<Login />} />
      <Route path={config.URLS.LOGOUT} element={<Logout />} />
    </Routes>
  );
}

export default Pages;

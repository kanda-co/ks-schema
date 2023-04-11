import { Routes, Route } from 'react-router-dom';

import Services from './Services';
import Login from './Login';
import SignUp from './SignUp';
import Logout from './Logout';
import PdfCreate from './PdfCreate';
import Address from './Address';

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
      <Route path={config.URLS.PDF_CREATE} element={<PdfCreate />} />
      <Route path={config.URLS.ADDRESS} element={<Address />} />
    </Routes>
  );
}

export default Pages;

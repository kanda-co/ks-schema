import { BrowserRouter } from 'react-router-dom';
import {
  AmplitudeProvider,
  CommonWrapper,
} from '@kanda-libs/ks-design-library';

import { Nav } from './components';
import Pages from './pages';
import './App.css';
import './styles/library.css';

function App() {
  return (
    <AmplitudeProvider>
      <CommonWrapper>
        <div className="App">
          <BrowserRouter>
            <Nav />
            <Pages />
          </BrowserRouter>
        </div>
      </CommonWrapper>
    </AmplitudeProvider>
  );
}

export default App;

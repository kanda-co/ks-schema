import { BrowserRouter } from 'react-router-dom';
import { CommonWrapper } from '@kanda-libs/ks-design-library';

import { Nav } from './components';
import Pages from './pages';
import './App.css';
import './styles/library.css';

function App() {
  return (
    <CommonWrapper>
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Pages />
        </BrowserRouter>
      </div>
    </CommonWrapper>
  );
}

export default App;

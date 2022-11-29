import './App.css';
import { services } from '@kanda-libs/ks-frontend-services';

function App() {
  return (
    <div className="App">
      <p className="read-the-docs">ks-frontend-services</p>
      <pre>{JSON.stringify(services)}</pre>
    </div>
  );
}

export default App;

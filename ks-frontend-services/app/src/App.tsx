import { useState } from 'react';
import './App.css';

import { FirebaseAuthWrapper } from '@kanda-libs/ks-frontend-services';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p className="read-the-docs">ks-frontend-services</p>
      <FirebaseAuthWrapper>
        <div>Hello world</div>
      </FirebaseAuthWrapper>
    </div>
  );
}

export default App;

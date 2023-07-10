import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/shared/App';
import { store } from './store';
import './index.css';

const root = ReactDOM.createRoot(document.querySelector('#root') as Element);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

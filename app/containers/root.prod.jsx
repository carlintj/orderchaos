import {Provider} from 'react-redux';
import App from './app.jsx';

export default ({store}) =>
  <Provider store={store}>
    <App />
  </Provider>
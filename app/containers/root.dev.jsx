import {Provider} from 'react-redux';
import App from './app';
//import DevTools from './devtools';
//<DevTools />
export default ({store}) =>
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>
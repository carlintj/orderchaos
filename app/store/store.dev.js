import {createStore, compose} from 'redux';
import rootReducer from '../reducers';
import DevTools from '../containers/devtools';

const createStoreWithMiddleware = compose(
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  window.devToolsExtension ? window.devToolsExtension() : f => f

  if(module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers/index').default;

      store.replaceReducer(nextReducer);
    });


  }

  return store;
}

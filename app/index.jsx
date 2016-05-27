import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/root';
import configureStore from './store/store';

const store = configureStore();

//store.subscribe(() =>  store.getState())
ReactDOM.render(
  <div>
    <Root store={store} />
  </div>,
  document.getElementById('app')
);

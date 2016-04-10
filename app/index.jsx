

import React from 'react';
import ReactDOM from 'react-dom';
import GameStage from './components/gameStage';

//const store = configureStore(storage.get(APP_STORAGE) || {});
/*
store.subscribe(() => {
  if(!storage.get('debug')) {
    storage.set(APP_STORAGE, store.getState());
  }
});
*/
ReactDOM.render(
  <div><GameStage /></div>,
  document.getElementById('app')
);

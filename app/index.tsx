import * as ReactDOM from 'react-dom';
import * as React from 'react';
import Root from './containers/root';
import configureStore from './store/store';
import {orderplayer, chaosplayer} from './ai/index';
import * as actions from './actions/game';
import {ORDER, CHAOS} from './constants/gameConstants'
import * as aistates from './ai/constants'

const store = configureStore();

//this hack watches the store and dispatches commands if the auto flags are true
//not sure if I can move this to the store to reduce the number of paints though
let lastPlayer = -1;
let watcher = () => {
  let state = store.getState();
  let aistate : any = null;

  if(state.gameReducer.isOver) {
    if(lastPlayer == state.gameReducer.winner) {
      aistate = aistates.WIN;
    } else {
      aistate = aistates.LOSE;
    }
  } else {
    aistate = aistates.ALIVE;
  }
  
  switch(lastPlayer) {
    case CHAOS:
      chaosplayer.recordResult(aistate);
    case ORDER:
      orderplayer.recordResult(aistate);
  }

  if(!state.gameReducer.isOver) {
    if(state.gameReducer.turn % 2 == ORDER && state.gameReducer.autoplayOrder) {
      let {x,y,color} = orderplayer.makeMove(state.gameReducer);
      let action = actions.makeMove(x,y,color, ORDER);
      store.dispatch(action);
      lastPlayer = ORDER;
    } else if(state.gameReducer.turn % 2 == CHAOS && state.gameReducer.autoplayChaos) {
      let {x,y,color} = chaosplayer.makeMove(state.gameReducer);
      let action = actions.makeMove(x,y,color, CHAOS);
      store.dispatch(action);
      lastPlayer = CHAOS
    }
  } else if(state.gameReducer.autoRestart) {
    let action = actions.restartGame();
    store.dispatch(action);
  }

  window.setTimeout(watcher, 0);
};

window.setTimeout(watcher, 0);

ReactDOM.render(
  <div>
    <Root store={store} />
  </div>,
  document.getElementById('app')
);

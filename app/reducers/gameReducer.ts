import * as types from '../actions/game';
import {initialState} from './initialState';
import performMove from './performMove';
import isOver from './isOver';
import dumpState from './dumpState';
import restartGame from './restartGame';

//need a base type for actions to leverage patern matching
export default function (state = initialState, action : any) {
  let newState = {...state};
  switch (action.type) {
    case types.MAKE_MOVE:
      let {x, y, color, player} = action;
      return isOver(performMove(newState, x,y,color,player));
    case types.DUMP_STATE:
      return dumpState(newState);
    case types.IS_OVER:
      return isOver(newState);
    case types.CLICK_AUTOPLAY_ORDER:
      newState.autoplayOrder = !newState.autoplayOrder;
      return newState;
    case types.CLICK_AUTOPLAY_CHAOS:
      newState.autoplayChaos = !newState.autoplayChaos;
      return newState;
    case types.CLICK_AUTORESTART: 
      newState.autoRestart = !newState.autoRestart;
      return newState;
    case types.RESTART_GAME: 
      restartGame(newState);
      return newState;
    default:
      return newState;
  }
}
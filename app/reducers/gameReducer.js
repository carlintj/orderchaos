import * as types from '../actions/game';
import {initialState} from './initialState';
import performMove from './performMove';
import isOver from './isOver';

export default function (state = initialState, action) {
  switch (action.type) {
    case types.MAKE_MOVE:
      let {x, y, color, player} = action;
      return isOver(performMove(state, x,y,color,player));
    default:
    return {
      ...state
    };
  }
}
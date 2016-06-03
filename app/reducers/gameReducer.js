import * as types from '../actions/game';
import {initialState} from './initialState';
import performMove from './performMove';
import isOver from './isOver';
import dumpState from './dumpState';
import testAsync from './testAsync';
import _ from 'lodash';

export default function (state = initialState, action) {
  let newState =_.cloneDeep(state);
  switch (action.type) {
    case types.MAKE_MOVE:
      let {x, y, color, player} = action;
      return isOver(performMove(newState, x,y,color,player));
    case types.DUMP_STATE:
      return dumpState(newState);
    case types.IS_OVER:
      return isOver(newState);
    case types.TEST_ASYNC_SUCCESS:
      //return testAsync(newState, action.message)
      testAsync(newState, action.message);
      return newState;
    default:
      console.warn('Unknown action', action)
      return newState;
  }
}
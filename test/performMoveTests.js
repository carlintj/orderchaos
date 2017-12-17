/* global describe */
/* global it */
import expect from 'expect';
import * as actions from '../app/actions/game';
import {initialState} from '../app/reducers/initialState';
import gameReducer from '../app/reducers/gameReducer';
import {RED, BLUE} from '../app/constants/gameConstants';
import isOver from '../app/reducers/isOver';

global._ = require('lodash');


describe('perform move', () => {
  it('move by correct player should change board', () => {
    let action = actions.makeMove(0, 0, RED, 1);
    let testState = _.cloneDeep(initialState);
    let s1 = gameReducer(testState, action);
    expect(s1.board[0][0]).toEqual(RED);

    let action2 = actions.makeMove(0, 1, BLUE, 2);
    let s2 = gameReducer(s1, action2);
    expect(s2.board[0][0]).toEqual(RED);
    expect(s2.board[0][1]).toEqual(BLUE);
  });

  it('move by incorrect player should not change board', () => {
    let state = _.cloneDeep(initialState);
    let action = actions.makeMove(0, 0, BLUE, 2);
    let s1 = gameReducer(state, action);
    expect(s1.board[0][0]).toEqual('');

    state.turn++;
    action = actions.makeMove(0, 0, BLUE, 1);
    let s2 = gameReducer(state, action);
    expect(s1.board[0][0]).toEqual('');
  });

  it('should calculate array pos from x y properly', () => {
    let x = 5, y = 5;
    let action = actions.makeMove(x, y, BLUE, 1);
    let state = _.cloneDeep(initialState);
    let s1 = gameReducer(state, action);
    expect(s1.board[x][y]).toEqual(BLUE);
  });

  it('should advance turns', () => {
    let state = _.cloneDeep(initialState);
    let useRed = false;
    for(let x = 0; x < 6; x++) {
      for(let y = 0; y < 6; y++) {
        let action = actions.makeMove(x, y, useRed ? RED : BLUE, (y + 1) % 2);
        state = gameReducer(state, action);
        useRed = !useRed;
      }
    }

    expect(state.turn).toEqual(37);
  });

  
});
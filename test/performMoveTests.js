/* global describe */
/* global it */
import expect from 'expect';
import * as actions from '../app/actions/game';
import {initialState} from '../app/reducers/initialState';
import gameReducer from '../app/reducers/gameReducer';
import {RED, BLUE} from '../app/constants/gameConstants';

const stateOverOffByOne = {
  'isOver': false,
  'turn': 6,
  'player1': 0,
  'player2': 0,
  'board': [
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', BLUE, BLUE, BLUE, BLUE, BLUE],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', '']
  ]
}

describe('perform move', () => {
  it('move by correct player should change board', () => {
    let action = actions.makeMove(0, 0, RED, 1);
    let s1 = gameReducer(initialState, action);
    expect(s1.board[0][0]).toEqual(RED);
  });

  //test not applicable
  /*
  it('move by incorrect player should not change board', () => {
    let action = actions.makeMove(0, 0, BLUE, 2);
    let s1 = gameReducer(initialState, action);
    expect(s1.board[0][0]).toEqual('');
  });
  */

  it('should calculate array pos from x y properly', () => {
    let x = 5, y = 5;
    let action = actions.makeMove(x, y, BLUE, 1);
    let s1 = gameReducer(initialState, action);
    expect(s1.board[x][y]).toEqual(BLUE);
  });

  it('should detect game over for vert. lines', () => {
    for (let x = 0; x < 5; x++) {
      let state = initialState;
      for (let y = 0; y < 5; y++) {
        let action = actions.makeMove(x, y, BLUE, (y + 1) % 2);
        state = gameReducer(state, action);
      }
      expect(state.isOver).toEqual(true);
      for (let y = 1; y < 6; y++) {
        let action = actions.makeMove(x, y, BLUE, (y + 1) % 2);
        state = gameReducer(state, action);
      }
      expect(state.isOver).toEqual(true);
    }
  });

  it('should detect game over for horz. lines', () => {
    for (let x = 0; x < 5; x++) {
      let state = initialState;
      for (let y = 0; y < 5; y++) {
        let action = actions.makeMove(y, x, BLUE, (y + 1) % 2);
        state = gameReducer(state, action);
      }
      expect(state.isOver).toEqual(true);
      for (let y = 1; y < 6; y++) {
        let action = actions.makeMove(y, x, BLUE, (y + 1) % 2);
        state = gameReducer(state, action);
      }
      expect(state.isOver).toEqual(true);
    }
  });

  it('should detect game over for diag. lines', () => {
    let offsets = [0, 1];
    for (let offset of offsets) {
      let state = initialState;
      for (let i = 0; i < 5; i++) {
        let action = actions.makeMove(i + offset, i + offset, BLUE, (i + 1) % 2);
        state = gameReducer(state, action);
      }
      expect(state.isOver).toEqual(true);
    }
  });

  it('should detect game over for 5 in a row starting off by 1', () => {
    let action = actions.isOver();
    let state = gameReducer(stateOverOffByOne, action);
    expect(state.isOver).toEqual(true);
  });
});
/* global describe */
/* global it */
import expect from 'expect';
import * as actions from '../app/actions/game';
import {initialState} from '../app/reducers/initialState';
import gameReducer from '../app/reducers/gameReducer';

describe('perform move', () => {
  it('move by correct player should change board', () => {
    let action = actions.makeMove(0, 0, 'B', 1);
    let s1 = gameReducer(initialState, action).toJS();
    expect(s1.board[0][0]).toEqual('B');
  });

  it('move by incorrect player should not change board', () => {
    let action = actions.makeMove(0, 0, 'B', 2);
    let s1 = gameReducer(initialState, action).toJS();
    expect(s1.board[0][0]).toEqual('');
  });

  it('should calculate array pos from x y properly', () => {
    let x = 5, y = 5;
    let action = actions.makeMove(x, y, 'B', 1);
    let s1 = gameReducer(initialState, action).toJS();
    expect(s1.board[x][y]).toEqual('B');
  });

  it('should detect game over for vert. lines', () => {
    for (let x = 0; x < 5; x++) {
      let state = initialState;
      for (let y = 0; y < 5; y++) {
        let action = actions.makeMove(x, y, 'B', (y + 1) % 2);
        state = gameReducer(state, action);
      }
      expect(state.toJS().isOver).toEqual(true);
      for (let y = 1; y < 6; y++) {
        let action = actions.makeMove(x, y, 'B', (y + 1) % 2);
        state = gameReducer(state, action);
      }
      expect(state.toJS().isOver).toEqual(true);
    }
  });

  it('should detect game over for horz. lines', () => {
    for (let x = 0; x < 5; x++) {
      let state = initialState;
      for (let y = 0; y < 5; y++) {
        let action = actions.makeMove(y, x, 'B', (y + 1) % 2);
        state = gameReducer(state, action);
      }
      expect(state.toJS().isOver).toEqual(true);
      for (let y = 1; y < 6; y++) {
        let action = actions.makeMove(y, x, 'B', (y + 1) % 2);
        state = gameReducer(state, action);
      }
      expect(state.toJS().isOver).toEqual(true);
    }
  });

  it('should detect game over for diag. lines', () => {
    let offsets = [0, 1];
    for (let offset of offsets) {
      let state = initialState;
      for (let i = 0; i < 5; i++) {
        let action = actions.makeMove(i + offset, i + offset, 'B', (i + 1) % 2);
        state = gameReducer(state, action);
      }
      expect(state.toJS().isOver).toEqual(true);
    }
  });
});
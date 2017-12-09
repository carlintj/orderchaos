/* global describe */
/* global it */
import expect from 'expect';
import * as actions from '../app/actions/game';
import {initialState} from '../app/reducers/initialState';
import gameReducer from '../app/reducers/gameReducer';
import {RED, BLUE, ORDER, CHAOS} from '../app/constants/gameConstants';
import isOver from '../app/reducers/isOver'

describe('order wins', () => {
    it('should detect order win for vert. lines', () => {
        for (let x = 0; x < 5; x++) {
          let state = _.cloneDeep(initialState);
          for (let y = 0; y < 5; y++) {
            let action = actions.makeMove(x, y, BLUE, (y + 1) % 2);
            state = gameReducer(state, action);
          }
          expect(state.isOver).toEqual(true);
          
          state = _.cloneDeep(initialState);
          for (let y = 1; y < 6; y++) {
            let action = actions.makeMove(x, y, BLUE, (y) % 2);
            state = gameReducer(state, action);
          }
          expect(state.isOver).toEqual(true);
          expect(state.winner).toEqual(ORDER);
        }
      });
    
      it('should detect order win for horz. lines', () => {
        for (let x = 0; x < 5; x++) {
          let state = _.cloneDeep(initialState);
          for (let y = 0; y < 5; y++) {
            let action = actions.makeMove(y, x, BLUE, (y + 1) % 2);
            state = gameReducer(state, action);
          }
          expect(state.isOver).toEqual(true);
    
          state = _.cloneDeep(initialState);
          for (let y = 1; y < 6; y++) {
            let action = actions.makeMove(y, x, BLUE, (y) % 2);
            state = gameReducer(state, action);
          }
          if(!state.isOver) console.log(state.board)
          expect(state.isOver).toEqual(true);
          expect(state.winner).toEqual(ORDER);
        }
      });
    
      it('should detect order win for diag. lines', () => {
        let offsets = [0, 1];
        for (let offset of offsets) {
          let state = _.cloneDeep(initialState);
          for (let i = 0; i < 5; i++) {
            let action = actions.makeMove(i + offset, i + offset, BLUE, (i + 1) % 2);
            state = gameReducer(state, action);
          }
          expect(state.isOver).toEqual(true);
          expect(state.winner).toEqual(ORDER);
        }
      });
    
      it('should detect order win for 5 in a row starting off by 1', () => {
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
    
        let action = actions.isOver();
        let state = gameReducer(stateOverOffByOne, action);
        expect(state.isOver).toEqual(true);
        expect(state.winner).toEqual(ORDER);
      });
});
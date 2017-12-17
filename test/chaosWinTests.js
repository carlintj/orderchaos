/* global describe */
/* global it */
import expect from 'expect';
import * as actions from '../app/actions/game';
import {initialState} from '../app/reducers/initialState';
import gameReducer from '../app/reducers/gameReducer';
import {RED, BLUE, ORDER, CHAOS} from '../app/constants/gameConstants';
import isOver from '../app/reducers/isOver';



describe('order wins', () => {
    it('should detect chaos win for full board', () => {
        const stateFullBoard = {...initialState,
            board: [
              [RED, BLUE, RED, BLUE, RED, BLUE],
              [BLUE, RED, BLUE, RED, BLUE, RED],
              [BLUE, RED, BLUE, RED, BLUE, RED],
              [RED, BLUE, RED, BLUE, RED, BLUE],
              [BLUE, RED, BLUE, RED, BLUE, RED],
              [RED, BLUE, RED, BLUE, RED, BLUE]
            ]
          }
      
        let action = actions.isOver();
        let state = gameReducer(stateFullBoard, action);
        expect(state.isOver).toEqual(true);
        expect(state.winner).toEqual(CHAOS);
    });
});
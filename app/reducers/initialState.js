import Immutable from 'immutable';

export const BOARD_SIZE = 6;
export const RED = 'R';
export const BLUE = 'B';

export const initialState = Immutable.fromJS({
  isOver: false,
  turn: 1,
  player1: 0,
  player2: 0,
  board:[
    ['','','','','',''],
    ['','','','','',''],
    ['','','','','',''],
    ['','','','','',''],
    ['','','','','',''],
    ['','','','','',''],
  ]
});
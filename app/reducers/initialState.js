export const BOARD_SIZE = 6;

export const initialState = {
  winner: '',
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
  ],
  autoplayChaos: false,
  autoplayOrder: false,
  autoRestart: false,
  numberofGamesFinished: 0,
  orderWins: 0,
  chaosWins: 0
};
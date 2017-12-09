import {ORDER, CHAOS} from '../constants/gameConstants'
let starts = [];
for (let x = 0; x < 2; x++) {
  for (let y = 0; y < 2; y++) {
    if (x + y < 3) {
      starts.push({ x, y });
    }
  }
}

function isSliceComplete(slice) {
  const color = slice[0];
  if (color === '') return false; //blanks don't count
    for (let i = 1; i < 5; i++) {
    if (color !== slice[i]) {
      return false;
    }
  }
  return true;
}

const isStraightComplete = (board) => {
  for (let x = 0; x < 6; x++) {
    for (let y = 0; y < 2; y++) {
      let slice = _.slice(board[x], y, 5 + y);
      if (isSliceComplete(slice)) return true;
    }
  }
  return false;
}

const isDiagonalComplete = (board) => {
  for (let start of starts) {
    let slice = [];
    for (let i = 0; i < 5; i++) {
      let color = board[start.x + i][start.y + i];
      //quit this check since we've hit a blank or a chaos piece
      if (color === '') continue; 
      slice.push(color);
    }
    if (slice.length === 5 && (isSliceComplete(slice))) {
      return true;
    }
  }
  return false;
}

let isOrderWinner = (state) => {
  let board = state.board;
  let t = _.zip.apply(_, state.board);

  return isStraightComplete(board) ||
    isStraightComplete(t) ||
    isDiagonalComplete(board) ||
    isDiagonalComplete(t);
}

let isBoardFull = (state) => {
  for(let x = 0; x < 6; x++) {
    for(let y = 0; y < 6; y++) {
      if(state.board[x][y] == '') {
        return false;
      }
    }
  }
  return true;
}

let isChaosWinner = (state) => {
  return isBoardFull(state);
}

export default function (state) {
  let orderWon = isOrderWinner(state);
  let chaosWon = false;

  if(!orderWon) {
   chaosWon = isChaosWinner(state); 
  }

  state.isOver = orderWon || chaosWon;
  if(state.isOver) {
    state.winner = orderWon ? ORDER : CHAOS;

    state.numberofGamesFinished++;
    if(state.winner == ORDER) {
      state.orderWins++;
    } else {
      state.chaosWins++;
    }

  }
  return state;
}
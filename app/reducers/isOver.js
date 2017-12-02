import _ from 'lodash';
import {ORDER, CHAOS} from '../constants/gameConstants';

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
  if (color != ORDER) return false; //only want ORDER straights
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
      if ((color === '') || (color != ORDER)) continue; 
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

export default function (state) {
  let newState = state;
  let orderWon = isOrderWinner(state);
  let chaosWon = false; //todo
  newState.isOver = orderWon || chaosWon;
  if(newState.isOver) {
    newState.winner = orderWon ? 'ORDER' : 'CHAOS';
  }
  
  return newState;
}
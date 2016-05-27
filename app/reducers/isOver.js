import _ from 'lodash';

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
  if (color === '') return false;
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
      var slice = _.slice(board[x], y, 5 + y);
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
      if (color === '') continue; //quit this check since we've hit a blank
      slice.push(color);
    }
    if (slice.length === 5 && (isSliceComplete(slice))) {
      return true;
    }
  }
  return false;
}

let isOver = (state) => {
  let board = state.board;
  let t = _.zip.apply(_, state.board);
  return isStraightComplete(board) ||
    isStraightComplete(t) ||
    isDiagonalComplete(board) ||
    isDiagonalComplete(t);
}

let winner = (state) => {
  if(state.isOver) {
    return state.turn % 2;
  }
  return state.winner;
}


export default function (state) {
  var newState = _.cloneDeep(state)
  newState.isOver = isOver(state);
  newState.winner = winner(newState);

  return newState;
}
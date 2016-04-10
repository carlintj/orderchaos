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
  for (let i = 0; i < 5; i++) {
    if (color !== slice[i]) {
      return false;
    }
  }
  return true;
}

function isStraightComplete(board) {
  for (let x = 0; x < 6; x++) {
    for (let y = 0; y < 2; y++) {
      var slice = _.slice(board[x], 0, 5);
      if (isSliceComplete(slice)) return true;
    }
  }
  return false;
}

function isDiagonalComplete(board) {
  for (let start of starts) {
    let slice = [];
    for (let i = 0; i < 5; i++) {
      let color = board[start.x + i][start.y + i];
      if(color === '') continue; //quit this check since we've hit a blank
      slice.push(color);
    }
    if (isSliceComplete(slice)) return true;
  }
}

function isOver(state) {
  //find vertical
  if (isStraightComplete(state.board)) {
    return true;
  }

  //transpose the array
  let t = _.zip.apply(_, state.board);

  if (isStraightComplete(t)) return true;

  if (isDiagonalComplete(state.board)) return true;
  if (isDiagonalComplete(t)) return true;

  return false;
}

export default function(state) {
  return state.set('isOver', isOver(state.toJS()));
}
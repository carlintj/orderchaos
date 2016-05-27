export default function performMove(state, x, y, color, player) {
  if(((state.turn + player) % 2) !==0) {
    return state;
  }

  if(state.board[x][y] !== '') {
    return state;
  }


  state.turn = state.turn +  1;
  state.board[x][y] = color;
  return state;
}
export default function performMove(state, x, y, color, player) {
  if(state.get('turn') % 2 !== player) {
    return state;
  }

  return state
      .set('turn', state.get('turn') + 1)
      .setIn(['board', x, y], color);
}
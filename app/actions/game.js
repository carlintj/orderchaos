export const MAKE_MOVE = 'MAKE_MOVE';

export function makeMove(x, y, color, player) {
  return {
    type: MAKE_MOVE,
    x,
    y,
    color,
    player
  }
}
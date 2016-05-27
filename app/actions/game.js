export const MAKE_MOVE = 'MAKE_MOVE';
export const DUMP_STATE = 'DUMP_STATE';
export const IS_OVER = 'IS_OVER';


export function makeMove(x, y, color, player) {
  return {
    type: MAKE_MOVE,
    x,
    y,
    color,
    player
  }
}

export function dumpState() {
  return {
    type: DUMP_STATE
  }
}

export function isOver() {
  return {
    type: IS_OVER
  }
}
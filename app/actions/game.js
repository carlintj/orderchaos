export const MAKE_MOVE = 'MAKE_MOVE';
export const DUMP_STATE = 'DUMP_STATE';
export const IS_OVER = 'IS_OVER';
export const TEST_ASYNC = 'TEST_ASYNC';
export const TEST_ASYNC_SUCCESS = 'TEST_ASYNC_SUCCESS';
export const CLICK_AUTOPLAY_ORDER = 'CLICK_AUTOPLAY_ORDER';
export const CLICK_AUTOPLAY_CHAOS = 'CLICK_AUTOPLAY_CHAOS';
export const CLICK_AUTORESTART = 'CLICK_AUTORESTART';
export const RESTART_GAME = 'RESTART_GAME';

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

export function clickAutoplayOrder() {
  return {
    type: CLICK_AUTOPLAY_ORDER
  }
}

export function clickAutoplayChaos() {
  return {
    type: CLICK_AUTOPLAY_CHAOS
  }
}

export function clickAutorestart() {
  return {
    type: CLICK_AUTORESTART
  }
}

export function restartGame() {
  return {
    type: RESTART_GAME
  }
}

export function testAsyncSuccess(message) {
  return {
    type: TEST_ASYNC_SUCCESS,
    message
  }
}

export function testAsync(message) {
  return function(dispatch) {
    return fetch('/api/').then(() => {
      var ed = testAsyncSuccess(message);
      dispatch(ed);
    });
  }
}
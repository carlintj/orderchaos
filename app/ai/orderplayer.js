import * as actions from '../actions/game';
import {RED, BLUE} from '../constants/gameConstants'
import hashboard from './hashboard';
import createplayer from './baseplayer'

let moves = [];
let games = [];

let orderPlayer = createplayer((state) => {
    let foundSpot = false;
    let x = 0, y = 0;

    while(!foundSpot) {
        x = Math.floor(Math.random()*6);
        y = Math.floor(Math.random()*6);
        foundSpot = state.board[x][y] == '';
    }
    return ({x, y, color: RED});
});

// let makeMove = (gameReducer) => {
//     let {x,y} = performMove(gameReducer);
//     let color = RED;
    
//     let move = {x, y, color};
//     let board = hashboard(gameReducer.board);
//     moves.push({board, ... move});

//     return move;
// }


// let recordResult = (result) => {
//     moves[moves.length-1].result = result;
// }

// let finalizeGame = () => {
//     games.push(moves);
//     moves = [];
// }

// let performMove = (state) => {
//     let foundSpot = false;
//     let x = 0, y = 0;
//     while(!foundSpot) {
//         x = Math.floor(Math.random()*6);
//         y = Math.floor(Math.random()*6);
//         foundSpot = state.board[x][y] == '';
//     }
//     return ({x, y});
// }

let {makeMove, recordResult, finalizeGame} = orderPlayer;

export default orderPlayer;
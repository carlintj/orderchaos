import * as actions from '../actions/game';
import {RED, BLUE} from '../constants/gameConstants'
import hashboard from './hashboard';
import GameBoard from '../components/gameBoard';

let findMoves = (gameReducer) => {
    let freespaces = [];
    _.forEach(gameReducer.board,(row, x) => {
        _.forEach(row, (cell, y) => {
            if(cell === '') {
                freespaces.push({x,y});
            }
        })
    })

    return freespaces;
}

let createPlayer = (logic) => {
    let moves = [];
    let games = [];
    return {
        recordResult: (result) => {
            moves[moves.length-1].result = result;
        },
        finalizeGame:  () => {
            games.push(moves);
            moves = [];
        },
        makeMove: (gameReducer) => {
            let freespaces = findMoves(gameReducer);
            let move =  logic(gameReducer,freespaces);
            let board = hashboard(gameReducer.board);
            moves.push({board,freespaces, ... move});
        
            return move;
        }
    }
}


export default createPlayer;
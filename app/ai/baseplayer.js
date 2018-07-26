/* global _ */
import {RED, BLUE} from '../constants/gameConstants';
import hashboard from './hashboard';
import hashmove from './hashmove';

let findMoves = (gameReducer) => {
    let freespaces = [];
    _.forEach(gameReducer.board,(row, x) => {
        _.forEach(row, (cell, y) => {
            if(cell === '') {
                freespaces.push({x,y, color: RED});
                freespaces.push({x,y, color: BLUE});
            }
        });
    });

    return freespaces;
}

let createPlayer = (logic, scoreReward) => {
    let moves = [];
    let games = [];
    let states = {}
    
    //AI control factors
    let discount = 0.2;
    let alpha = 1;
    
    
    let lastState = {};
    let lastMove = {};


    return {
        moves: () => moves,
        states: () => states,
        recordResult: (result) => {
            //moves[moves.length-1].result = result;
            let hash = hashmove(lastMove);
            let moveScore = lastState.moves[hash] || 0;

            let curBestChoice = _.max(lastState.moves) || 0;

            let points = (1 - discount) * moveScore + alpha * (scoreReward(result) + discount + curBestChoice);
            points = ((points * 1000 | 0) / 1000);
            //console.log('awarding', points, 'to', hash);
            lastState.moves[hash] = points;
        },
        makeMove: (gameReducer) => {
            //hash board
            //see if we've had board before
            //if yes then pick highest value move with some randomness
            //else create board with list of moves and pick random move
            
            let board = hashboard(gameReducer.board);
            if(!states[board]) {
                states[board] = {moves : {}};
            }

            let state = states[board];
            let freespaces = findMoves(gameReducer);

            let move =  logic(gameReducer,freespaces);
        
            lastState = state;
            lastMove = move;

            return move;
        }
    }
}


export default createPlayer;
import * as _ from 'lodash';
import {RED, BLUE} from '../constants/gameConstants';
import hashboard from './hashboard';
import hashmove from './hashmove';

import gameMove from '../types/gameMove';
import PieceColor from '../types/pieceColor'

type scoredGameMove = gameMove & { score : number};

let findMoves = (gameReducer) => {
    let freespaces : gameMove[] = [];
    _.forEach(gameReducer.board,(row, x : number) => {
        _.forEach(row, (cell: string, y : number) => {
            if(cell === '') {
                freespaces.push({x,y, color: PieceColor.Red});
                freespaces.push({x,y, color: PieceColor.Blue});
            }
        });
    });

    return freespaces;
}

let createPlayer = (logic : (reducer: any, freespaces: gameMove[]) => any, scoreReward : (result: string) => number) => {
    //let moves = gameMove[];
    let games = [];
    //states should be a dictionary of boards
    //each board has a list of moves performed and the score of the move
    let states : {
            [board : string] :  {
                moves: {[move: string] : scoredGameMove}
            }
        } = {};
    
    //AI control factors
    let discount = 0.2;
    let alpha = 1;
    
    //last state should be a pointer to an object that exists on states
    //used to track the score of the last move
    let lastState : {
        moves: {[key : string] :  scoredGameMove}
    }
    
    let lastMove : gameMove;


    return {
        moves: () => null,
        states: () => states,
        recordResult: (result : string) => {
            //moves[moves.length-1].result = result;
            let hash = hashmove(lastMove);
            let moveScore = lastState.moves[hash] ? lastState.moves[hash].score : 0;

            let curBestChoice = _.max(_.map(lastState.moves, m => m.score)) || 0;

            let points = (1 - discount) * moveScore + alpha * (scoreReward(result) + discount + curBestChoice);
            points = ((points * 1000 | 0) / 1000);
            //console.log('awarding', points, 'to', hash);
            lastState.moves[hash].score = points;
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
import * as actions from '../app/actions/game';
import { initialState } from '../app/reducers/initialState';
import gameReducer from '../app/reducers/gameReducer';
import { RED, BLUE, ORDER, CHAOS } from '../app/constants/gameConstants';
import isOver from '../app/reducers/isOver';
import { orderplayer, chaosplayer } from '../app/ai';
import * as aistates from '../app/ai/constants';
import _ from 'lodash';
import jsonfile from 'jsonfile';

global._ = _;

let learning = true;
let lastPlayer = -1;

let gamesToRun = 0;

let state = _.cloneDeep(initialState);
for (let x = 0; x < gamesToRun; x++) {
    let aistate = aistates.ALIVE;
    while (!state.isOver) {
        switch (lastPlayer) {
            case CHAOS:
                chaosplayer.recordResult(aistate);
            case ORDER:
                orderplayer.recordResult(aistate);
        }

        if (state.turn % 2 == ORDER) {
            let { x, y, color } = orderplayer.makeMove(state);
            let action = actions.makeMove(x, y, color, ORDER);
            state = gameReducer(state, action);
            lastPlayer = ORDER;
        }
        else if (state.turn % 2 == CHAOS) {
            let { x, y, color } = chaosplayer.makeMove(state);
            let action = actions.makeMove(x, y, color, CHAOS);
            state = gameReducer(state, action);
            lastPlayer = CHAOS;
        }
    }
    
    if (lastPlayer == state.winner) {
        aistate = aistates.WIN;
    }
    else {
        aistate = aistates.LOSE;
    }
    
     switch (lastPlayer) {
            case CHAOS:
                chaosplayer.recordResult(aistate);
                break;
            case ORDER:
                orderplayer.recordResult(aistate);
                break;
        }

    let action = actions.restartGame();
    state = gameReducer(state, action);
}

jsonfile.writeFileSync('orderstates.json', orderplayer.states(),{spaces: 2});

jsonfile.writeFileSync('chaosstates.json', chaosplayer.states(),{spaces: 2});

//let orderMoves = _.flatMap(orderplayer.states(), (state) => state.moves);
//console.log(orderMoves);
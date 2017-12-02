import React from 'react';
import GamePiece from './gamePiece';
import { ORDER, CHAOS } from '../constants/gameConstants';


let gamePiecePicker = (props) => {
    return <div>
      <GamePiece color={ORDER} enabled={props.turn % 2 == 0} />
      <GamePiece color={CHAOS} enabled={props.turn % 2 == 1}/>
    </div>;
};


export default gamePiecePicker;
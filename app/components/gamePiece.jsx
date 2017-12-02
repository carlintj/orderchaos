import React from 'react';
import DragableGamePiece from './dragableGamePiece';
import StaticGamePiece from './staticGamePiece';

let gamePiece = (props) => props.enabled ? <DragableGamePiece color={props.color} /> : <StaticGamePiece color={props.color}/>;

export default gamePiece;
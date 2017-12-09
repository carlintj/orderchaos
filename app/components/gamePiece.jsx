import DragableGamePiece from './dragableGamePiece';
import StaticGamePiece from './staticGamePiece';

let gamePiece = (props) => true ? <DragableGamePiece color={props.color} /> : <StaticGamePiece color={props.color}/>;

export default gamePiece;
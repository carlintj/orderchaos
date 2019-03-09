import gameMove from '../types/gameMove'

let hashMove = (move : gameMove) => `${move.x}${move.y}${move.color}`;

export default hashMove;
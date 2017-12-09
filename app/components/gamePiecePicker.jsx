import GamePiece from './gamePiece';
import { RED, BLUE } from '../constants/gameConstants';


let gamePiecePicker = (props) => {
    return <div>
      <GamePiece color={RED} />
      <GamePiece color={BLUE}/>
    </div>;
};


export default gamePiecePicker;
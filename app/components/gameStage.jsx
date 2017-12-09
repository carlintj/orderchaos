import GameBoard from './gameBoard';
import GamePiecePicker from './gamePiecePicker';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class GameStage extends React.Component {
    render() {
        const { board, handleClick, dumpState } = this.props;
        return (
            <div>
                <GamePiecePicker />
                <GameBoard board={board} handleClick={handleClick}/>
                <div onClick={dumpState}>Dump State</div>
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(GameStage);
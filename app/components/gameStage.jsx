import React from 'react';
import GameBoard from './gameBoard';
import GamePiecePicker from './gamePiecePicker';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class GameStage extends React.Component {
    render() {
        const { board, handleClick, dumpState, turn } = this.props;
        return (
            <div>
                <GamePiecePicker turn={turn} />
                <GameBoard board={board} handleClick={handleClick}/>
                <div onClick={dumpState}>Dump State</div>
            </div>
        );
    }

}

export default DragDropContext(HTML5Backend)(GameStage);
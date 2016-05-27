import React, {PropTypes} from 'react';
import GameBoard from './gameBoard';
import GamePiecePicker from './gamePiecePicker';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

let gameStage = React.createClass({
    propTypes: {
        board: PropTypes.array,
        handleClick: PropTypes.func.isRequired,
        dumpState: PropTypes.func.isRequired
    },
    render: function () {
        const {board, handleClick, dumpState} = this.props;
        return (
            <div>
                <GamePiecePicker />
                <GameBoard board={board} handleClick={handleClick}/>
                <div onClick={dumpState}>Dump State</div>
            </div>
        );
    }
});

export default DragDropContext(HTML5Backend)(gameStage);
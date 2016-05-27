import React from 'react';
import GameSquare from './gameSquare';

var PropTypes = React.PropTypes;

const styles = {
    board: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
    },
    boardContainer: {
        width: '400px',
        height: '400px',
        border: '1px solid black'
    },
    cell: {
        borderWidth: '1px',
        borderStyle: 'solid'
    },
}

let gameBoard = React.createClass({
    propTypes: {
        board: PropTypes.array,
        handleMove: PropTypes.func
    },
    render: function() {
        let renderedBoard = [];
        const {board,handleClick} = this.props;
        let black = false;
        for(let x = 0; x < board.length; x++) {
            for(let y = 0; y < board[x].length; y++) {
                let key = `cell.${x}.${y}`;
                let cell;
                if(board[x][y] === '') {
                    cell = 'X';
                } else {
                    cell = board[x][y];
                }
                renderedBoard.push(<GameSquare key={key} black={black} handleClick={handleClick.bind(null,x,y)}>{cell}</GameSquare>);
                black = !black;
            }
            black = (x % 2 == 0);
        }
        return <div style={styles.boardContainer}><div style={styles.board}>{renderedBoard}</div></div>;
    }
});

export default gameBoard;
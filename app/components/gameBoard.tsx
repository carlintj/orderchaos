import GameSquare from './gameSquare';
import * as React from 'react';


const styles = {
    board: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'revert'
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
};

export default class GameBoard extends React.Component<any, any>{
    render () {
        let renderedBoard : JSX.Element[] = [];
        const {board,handleClick} = this.props;
        let black = false;
        for(let x = 0; x < board.length; x++) {
            for(let y = 0; y < board[x].length; y++) {
                let key = `cell.${x}.${y}`;
                let cell : string;
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

        //having an issue with the flexWrap style
        // @ts-ignore
        return <div style={styles.boardContainer}><div style={styles.board }>{renderedBoard}</div></div>;
    }
};

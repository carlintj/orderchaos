import React from 'react';
var PropTypes = React.PropTypes;

let board = [
    ['B','R','','','',''],
    ['','','','','',''],
    ['','','','B','',''],
    ['','','','','',''],
    ['','','','','',''],
    ['','','','','','R'],
  ]

var gameBoard = React.createClass({
    propTypes: {
        board: PropTypes.object
    },
    render: function() {
        let renderedBoard = [];
        for(let row of board) {
            let cells = [];
            for(let column of row) {
                let cell;
                if(column === '') {
                    cell = '-';
                } else {
                    cell = column;
                }
                cells.push(<span>{cell}</span>);
            }
            renderedBoard.push(<div>{cells}</div>);
        }
        return <div>{renderedBoard}</div>;
    }
});

export default gameBoard;
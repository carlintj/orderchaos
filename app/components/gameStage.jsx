import React from 'react';
var PropTypes = React.PropTypes;
import GameBoard from './gameBoard';

var gameStage = React.createClass({
    propTypes: {
        board: PropTypes.object
    },
    render: function() {
        console.log('render');
        return (<div>
            <GameBoard />
        </div>);
    }
});


export default gameStage;
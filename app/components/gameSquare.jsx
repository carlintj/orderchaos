import React from 'react';
var DropTarget = require('react-dnd').DropTarget;

const squareTarget = {
  drop: function (props, monitor) {
    let {handleClick} = props;
    let {color} = monitor.getItem();
    handleClick(color);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

let gameSquare = (props) => props.connectDropTarget(
      <div style={{width: '16.6%', height: '16.6%', textAlign: 'center', backgroundColor: props.black ? 'black' : 'white'}}>
        <span style={{fontSize: '2em', color: props.black ? 'white' : 'black'}}>{props.children}</span>
      </div>
    );

export default DropTarget('gamePiece', squareTarget, collect)(gameSquare);
import React from 'react';
var DragSource = require('react-dnd').DragSource;

const pieceSource = {
  beginDrag(props) {
    return {color: props.color};
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

let gamePieceSL = (props) => props.connectDragSource(
  <span style={{fontSize: '3em', fontWeight: props.isDragging ? 'bold' : '', cursor: 'move'}}>
    {props.color}
  </span>);


export default DragSource('gamePiece', pieceSource, collect)(gamePieceSL);
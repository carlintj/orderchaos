import {DragSource} from 'react-dnd';
import * as React from 'react';
const pieceSource = {
  beginDrag(props) {
    return {color: props.color};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
};

let gamePieceSL = (props) => props.connectDragSource(
  <span style={{fontSize: '3em', fontWeight: props.isDragging ? 'bold' : 'normal', cursor: 'move'}}>
    {props.color}
  </span>);

export default DragSource('gamePiece', pieceSource, collect)(gamePieceSL);
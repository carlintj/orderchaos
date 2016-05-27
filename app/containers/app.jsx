import React from 'react';
import {connect} from 'react-redux';
import GameStage from '../components/gameStage';
import {makeMove, dumpState} from '../actions/game';

@connect(state => state)
export default class App extends React.Component {
  move(x, y, color) {
    let {dispatch, gameReducer} = this.props;
    var action = makeMove(x, y, color, gameReducer.turn);
    dispatch(action);
  }

  dumpState() {
    let {dispatch} = this.props;
    let action = dumpState();
    dispatch(action);
  }

  render() {
    const {gameReducer} = this.props;
    return (
      <div>
        <div>
          <div>Turn: {gameReducer.turn}</div>
          <div>isOver: {gameReducer.isOver.toString() }</div>
        </div>
        <GameStage board={gameReducer.board} handleClick={this.move.bind(this) } dumpState={this.dumpState.bind(this) }/>
      </div>
    );
  }
}
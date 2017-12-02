import React from 'react';
import {connect} from 'react-redux';
import GameStage from '../components/gameStage';
import {makeMove, dumpState, testAsync} from '../actions/game';

@connect(state => state)
export default class App extends React.Component {
  move(x, y, color) {
    let {dispatch, gameReducer} = this.props;
    var action = makeMove(x, y, color, gameReducer.turn);
    dispatch(action);
  }
  
  testAsync() {
    let {dispatch} = this.props;
    let action = testAsync('hi');
    dispatch(action);
  }

  dumpState() {
    let {dispatch} = this.props;
    let action = dumpState();
    dispatch(action);
  }
//          {{ gameReducer.isOver ? <div>Winner: gameReducer.winner</div> : null }}
  render() {
    const {gameReducer} = this.props;
    return (
      <div>
        <div>
          <div>Turn: {gameReducer.turn}</div>
          <div>isOver: {gameReducer.isOver ? 'Yes' : 'No' }</div>
          <div onClick={this.testAsync.bind(this)}>test asyc</div>
        </div>
        <GameStage 
          board={gameReducer.board} 
          handleClick={this.move.bind(this) } 
          dumpState={this.dumpState.bind(this) }
          turn={gameReducer.turn}
          
        />
      </div>
    );
  }
}
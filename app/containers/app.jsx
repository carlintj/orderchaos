import {connect} from 'react-redux';
import GameStage from '../components/gameStage';
//import {makeMove, dumpState, testAsync, clickAutoplayOrder, clickAutoplayChaos, clickAutorestart} from '../actions/game';
import * as actions from '../actions/game';

@connect(state => state)
export default class App extends React.Component {
  move(x, y, color) {
    let {dispatch, gameReducer} = this.props;
    var action = actions.makeMove(x, y, color, gameReducer.turn);
    dispatch(action);
  }
  
  dumpState() {
    let {dispatch} = this.props;
    let action = actions.dumpState();
    dispatch(action);
  }

  onClickAutoplayOrder() {
    let {dispatch} = this.props;
    let action = actions.clickAutoplayOrder();
    dispatch(action);
  }

  onClickAutoPlayChaos() {
    let {dispatch} = this.props;
    let action = actions.clickAutoplayChaos();
    dispatch(action);
  }

  onClickAutorestart() {
    let {dispatch} = this.props;
    let action = actions.clickAutorestart();
    dispatch(action);
  }

  onClickRestart() {
    let {dispatch} = this.props;
    let action = actions.restartGame();
    dispatch(action);
  }

  render() {
    const {gameReducer} = this.props;

    return (
      <div>
        <div>
          <div>Turn: {gameReducer.turn}</div>
          <div>isOver: {gameReducer.isOver ? 'Yes' : 'No' }</div>
          <div>Winner: {gameReducer.isOver ? gameReducer.winner : 'N/A' }</div>
          <div>No. of Games: {gameReducer.numberofGamesFinished}</div>
          <div>Order - Chaos wins: {gameReducer.orderWins} - {gameReducer.chaosWins}</div>
          <div>
              <label><input type="checkbox" name="checkbox" checked={gameReducer.autoplayOrder} onClick={this.onClickAutoplayOrder.bind(this)}/>Autoplay Order</label> <br/>
              <label><input type="checkbox" name="checkbox" checked={gameReducer.autoplayChaos} onClick={this.onClickAutoPlayChaos.bind(this)}/>Autoplay Chaos</label> <br/>
              <label><input type="checkbox" name="checkbox" checked={gameReducer.autoRestart} onClick={this.onClickAutorestart.bind(this)}/>Auto Restart</label> <br/>
              <div onClick={this.onClickRestart.bind(this)}>Restart Game</div>
          </div>

        </div>
        <GameStage 
          board={gameReducer.board} 
          handleClick={this.move.bind(this) } 
          dumpState={this.dumpState.bind(this) }
        />
      </div>
    );
  }
}
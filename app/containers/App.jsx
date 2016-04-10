import React from 'react';
import {connect} from 'react-redux';

@connect((state) => ({
  gameState: state.lanes
}))
export default class App extends React.Component {
  render() {
    const {gameState} = this.props;

    return (
      <div>
        <GameStage gameState />
      </div>
    );
  }
}
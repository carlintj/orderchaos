import express from 'express';
import initialState from '../app/reducers/initialState';

//this needs to be persisted at some point
const app = express()

app.get('/api', (req, res) => {
    res.send({
      message: 'hi!'
    })
})

export default app

/*
app.get('*', (req, res) => {
  console.log('yay');
  res.send('api!!!!');
})

app.listen(8081, function() {
  console.log('Example app listening on port 8081!');
});
*/
/*
let gameManager = () => {
  let games = {};
  let players = {};

  return {
    createGameId: () => {

    },
    createPlayerId: () => {

    },
    createGame: () => ({
      ...initialState,
      gameId: this.createGameId(),
    }),
    startGame: (playerId1) => {
      var game = {
        ...this.createGame(),
          internalPlayerId1: playerId1,
          internalPlayerId2: null
      };

      this.games[game.gameId] = game;
    },
    runCommand: (command) => {
      switch(command.type) {
        case 'FIND_GAME':
          let openGames = _.find(this.games, {internalPlayerId2: null});
          
          if(!!openGames) {
            let game = _.random(openGames);
            game.internalPlayerId2 = command.playerId;
            return game.gameId;
          } else {
            let game = this.createGame();
            game.internalPlayerId1 = command.playerId;
            this.games.push(game);
            
            return game.gameId;
          }
          case 'GAME_STATUS':
            let game = _.find(this.games, {gameId: command.gameId});
            
            return game;
      }
    }
  };
}

app.get('/api/', function(req, res) {
  res.send('api index!');
});

app.get('/api/findGame/', function(req, res) {
  let command = {
      type: 'FIND_GAME',
      playerId: req.playerId,
      gameId: req.gameId //optional
    }
    //get player id
    //see if any open games
    //if open game add player as player 2
    //if no open games create game and tell client to wait
});

app.get('/api/gameStatus/', function(req, res) {
  let command = {
      type: 'GAME_STATUS',
      gameId: req.gameId
    }
    // look up game by id
    //return if found
    //error if not
});

app.post('/api/makeMove/', function(req, res) {
  let command = {
    type: 'MAKE_MOVE',
    playerId: req.playerId,
    space: req.space,
    color: req.color
  }
});

app.get('*', function(req, res) {
  res.send(req.originalUrl);
});


app.listen(8081, function() {
  console.log('Example app listening on port 8081!');
});
*/
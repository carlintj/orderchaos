export default function restartGame(state) {
    for(let x = 0; x < 6; x++) {
        for(let y = 0; y < 6; y++) {
            state.board[x][y] = '';
        }
    }

    state.turn = 0;
    state.winner = '';
    state.isOver = false;
}
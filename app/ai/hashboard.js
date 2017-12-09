let hashboard = (board) => _.flatMap(board, (piece) => piece === '' ? '-' : piece);

export default hashboard;
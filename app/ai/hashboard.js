let hashboard = (board) => _(board).flatten().map(piece  => piece == '' ? '-' : piece).value().join('');

export default hashboard;
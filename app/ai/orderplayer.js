import createplayer from './baseplayer';

let moves = [];
let games = [];

let orderPlayer = createplayer((state, freespaces) => {
    let index = Math.floor(Math.random() * freespaces.length);
    return freespaces[index];
}, (result) => {
    switch (result) {
        case 'ALIVE':
            return 1
        case 'LOSE':
            return -100;
        case 'WIN':
            return 100;
    }
});


export default orderPlayer;
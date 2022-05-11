const Frame = require('./frame');
const BowlingGame = require('./bowling_game');

const frames = new Array(10).fill(new Frame(0));
const juego = new BowlingGame(frames);
juego.play();
console.log(juego.showScores);

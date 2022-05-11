const Frame = require('./frame');

class BowlingGame {
  constructor(frames) {
    this.frames = frames;
    this.score = 0;
  }

  play() {
    let acum = 0;
    this.frames = this.frames.map((frame) => {
      const derribados = frame.tiro_uno();
      const derribadosDos = frame.tiro_dos(derribados);
      const scoreTemporal = derribados + derribadosDos;
      const jugada = frame.mostrarJugada();
      acum += 1;
      return `TURNO(${acum}) = Tiro 1: ${derribados}  |  Tiro 2:  ${derribadosDos}/ Score:  ${scoreTemporal} | Jugada: ${jugada}`;
    });
  }

  get showScores() {
    return this.displayFrames();
  }

  displayFrames() {
    return this.frames;
  }
}

module.exports = BowlingGame;

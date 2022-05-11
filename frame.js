class Frame {
  constructror(score) {
    this.score = score;
    this.shot_1 = 0;
    this.shot_2 = 0;
    this.shot_3 = 0;
    this.strike = false;
    this.spare = false;
    this.normal = false;
    this.frame_number = 1;
  }

  tiro_uno() {
    this.shot_1 = Math.floor(Math.random() * 11);
    this.strike = this.isStrike(this.shot_1);
    return this.shot_1;
  }

  isStrike(pinosDerribados) {
    return (pinosDerribados === 10);
  }

  isSpare(tiroUno, tiroDos) {
    return (tiroUno + tiroDos === 10);
  }

  tiro_dos(derribados) {
    if (derribados < 10) {
      const max = 10 - derribados;
      this.shot_2 = Math.floor(Math.random() * max + 1);
      this.spare = this.isSpare(derribados, this.shot_2);
      return this.shot_2;
    }
    return 0;
  }

  get displayScore() {
    return this.showScore();
  }

  showScore() {
    return this.score;
  }

  mostrarJugada() {
    if (this.strike) { return 'STRIKE'; }
    if (this.spare) { return 'SPARE'; }
    return 'NORMAL';
  }

  set addScore(score) {
    this.score = score;
  }
}

module.exports = Frame;

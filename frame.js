class Frame {
  constructror({
    score = 0,
    shotOne = 0,
    shotTwo = 0,
    shotThree = 0,
    strike = false,
    spare = false,
    normalGame = false,
    frameNumber = 1,
  }) {
    this.score = score;
    this.shotOne = shotOne;
    this.shotTwo = shotTwo;
    this.shotThree = shotThree;
    this.strike = strike;
    this.spare = spare;
    this.normalGame = normalGame;
    this.frameNumber = frameNumber;
  }

  tiro_uno() {
    this.shotOne = 0;
    this.shotTwo = 0;
    this.shotThree = 0;
    this.score = 0;
    //this.shotOne = Math.floor(Math.random() * 11);
    this.shotOne = 10;
    this.strike(this.shotOne);
  }

  strike(shot) {
    this.strike = shot === 10;
    if (this.strike) {
      this.spare = false;
      this.normalGame = false;
    }
  }

  spare(shotOne, shotTwo) {
    this.spare = shotOne + shotTwo === 10;
  }

  normal() {
    this.normalGame = this.shotOne + this.shotTwo < 10;
  }

  tiro_dos() {
    if (this.shotOne < 10) {
      this.shotTwo = Math.floor(Math.random() * (11 - this.shotOne));
      this.spare(this.shotOne, this.shotTwo);
    }
    if (this.frameNumber === 9) {
      this.shotTwo = Math.floor(Math.random() * (11 - this.shotOne));
      this.spare(this.shotOne, this.shotTwo);
      if (this.strike || this.spare) {
        this.tiro_tres();
      }
    }
    this.normal();
  }

  tiro_tres() {
    this.shotThree = Math.floor(Math.random() * 11);
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

  set setScore(newScore) { this.score = newScore; }

  get getScore() { return this.score; }

  set setShotOne(newShot) { this.shotOne = newShot; }

  get getShotOne() { return this.shotOne; }

  set getShotTwo(newShot) { this.shotTwo = newShot; }

  get getShotTwo() { return this.shotTwo; }

  set setShotThree(newShot) { this.shotThree = newShot; }

  get getShotThree() { return this.shotThree; }

  set setStrike(newStrike) { this.strike = newStrike; }

  get getStrike() { return this.strike; }

  set setNormal(newNormal) { this.normalGame = newNormal; }

  get getNormal() { return this.normalGame; }

  set setSpare(newSpare) { this.spare = newSpare; }

  get getSpare() { return this.spare; }

  set setFrameNumber(newFrameNumber) { this.frameNumber = newFrameNumber; }

  get getFrameNumber() { return this.frameNumber; }
}

module.exports = Frame;

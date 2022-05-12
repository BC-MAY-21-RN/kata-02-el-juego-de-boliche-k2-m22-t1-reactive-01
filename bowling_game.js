const Frame = require('./frame');

class BowlingGame {
  constructor(frames = new Array(10).fill('').map(() => new Frame()), score = 0) {
    this.frames = frames;
    this.score = score;
  }

  play() {
    this.frames.map((frame, index, array) => {
      frame.tiro_uno();
      frame.tiro_dos();
      frame.frameNumber = index;
    });
    this.calScore();
  }

  calScore() {
    this.frames.forEach(frame => {
      if (frame.getNormal) this.normalGameCalc(frame);
      if (frame.getSpare) this.spareGameCalc(frame);
      if (frame.getStrike) this.strikeGameCalc(frame);
    });
    console.log(this.frames);
  }

  normalGameCalc(frame) {
    if (frame.getNormal) {
      this.score += frame.getShotOne + frame.getShotTwo;
      this.frames[frame.getFrameNumber].setScore = this.score;
    }
  }

  spareGameCalc(frame) {
    if (frame.getSpare) {
      if (frame.getFrameNumber === 0) {
        this.score += 10 + this.frames[frame.getFrameNumber + 1].getShotOne;
        this.frames[frame.getFrameNumber].setScore = this.score;
      }
      if (frame.getFrameNumber < 9 && frame.getFrameNumber > 0) {
        this.score += 10 + this.frames[frame.getFrameNumber + 1].getShotOne;
        this.frames[frame.getFrameNumber].setScore = this.score;
      }
      if (frame.getFrameNumber === 9) {
        const oneOne = this.frames[frame.getFrameNumber].getShotOne;
        const oneTwo = this.frames[frame.getFrameNumber].getShotTwo;
        const oneThree = this.frames[frame.getFrameNumber].getShotThree;
        this.score += oneOne + oneTwo + oneThree;
        this.frames[frame.getFrameNumber].setScore = this.score;
      }
    }
  }

  strikeGameCalc(frame) {
    if (frame.getStrike) {
      const currentFrame = this.frames[frame.getFrameNumber];
      if (frame.getFrameNumber < 9) {
        const nextFrame = this.frames[frame.getFrameNumber + 1];

        if (nextFrame.getSpare || nextFrame.getNormal) {
          this.score += nextFrame.getShotOne + nextFrame.getShotTwo;
          currentFrame.setScore = this.score;
        }
        if (nextFrame.getStrike) {
          if (frame.getFrameNumber === 8) {
            this.score += 10 + nextFrame.getShotOne + nextFrame.getShotTwo + nextFrame.getShotThree;
            currentFrame.setScore = this.score;
          } else {
            const nextFrame2 = this.frames[frame.getFrameNumber + 2];
            this.score += 20 + nextFrame2.getShotOne;
            currentFrame.setScore = this.score;
          }
        }
      }
      if (frame.getFrameNumber === 9) {
        let oneOne = currentFrame.getShotOne;
        let oneThree = currentFrame.getShotThree;
        this.score += oneOne + oneThree;
        console.log("Shot One:" + oneOne + " Shot Three: " + oneThree + " Score:" + this.score);
        this.frames[frame.getFrameNumber].setScore = this.score;
      }
    }
  }
  /*
    Frame {
    shotOne: 5,
    strike: false,
    shotTwo: 4,
    spare: false,
    normalGame: true,
    frameNumber: 5,
    score: 43
  },
  Frame {
    shotOne: 3,
    strike: false,
    frameNumber: 9,
    shotThree: 8,
    score: NaN
  }
  */

  get showScores() {
    return this.score;
  }
}

module.exports = BowlingGame;

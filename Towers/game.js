var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Game {
  constructor() {
    this.towers = [[3,2,1], [], []];
  }

  pomptMove() {
    console.log(this.towers);
    reader.question("Please enter from tower: ", function (startTowerIdx, endTowerIdx) {
      if (isValidMove(startTowerIdx, endTowerIdx)) {
        move(startTowerIdx, endTowerIdx);

      }
    });
  }

  move(startTowerIdx, endTowerIdx)
}

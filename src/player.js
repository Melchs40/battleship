import Gameboard from './gameboard';

// import Ship from './ships';

export default class Player {
  constructor(name) {
    this.name = `Captain ${name}`;
    this.game = '';
    this.board = '';
  }

  sayName() {
    return this.name;
  }

  startGame() {
    this.game = new Gameboard();
    this.game.createBoard();
    this.game.placeShip(1, 1, 3, true);
    this.game.placeShip(3, 1, 3, true);
    this.game.placeShip(7, 1, 3, true);
    this.board = this.game.board;
  }

  takeTurn() {
    let legalMoves = [];
    for (let i = 0; i < this.game.board.length; i++) {
      if (
        this.game.board[i][2] == 'empty' ||
        typeof this.game.board[i][2] == 'object'
      ) {
        legalMoves.push(this.board[i]);
      }
    }
    let move = Math.floor(Math.random() * legalMoves.length);
    return this.game.receiveAttack(
      this.game.board[move][0],
      this.game.board[move][1]
    );
  }
}

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
    return [
      this.game.receiveAttack(legalMoves[move][0], legalMoves[move][1]),
      legalMoves[move][3],
    ];
  }
}

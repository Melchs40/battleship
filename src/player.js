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
    console.log('this.board');
    console.log(this.board);
    let move = '';
    let legalMoves = [];
    let smartMoves = [];
    let smarterMoves = [];
    for (let i = 0; i < this.game.board.length; i++) {
      if (this.game.board[i][4] == 'none' || this.game.board[i][4] == 'ship') {
        legalMoves.push(this.board[i]);
      }
    }
    for (let i = 0; i < this.game.board.length; i++) {
      if (
        i + 2 <= 99 &&
        this.game.board[i + 1][4] == 'hit' &&
        this.game.board[i + 2][4] == 'hit' &&
        (this.game.board[i][4] == 'none' || this.game.board[i][4] == 'ship')
      ) {
        smarterMoves.push(this.game.board[i]);
      }
      if (
        i - 2 >= 0 &&
        this.game.board[i - 2][4] == 'hit' &&
        this.game.board[i - 1][4] == 'hit' &&
        (this.game.board[i][4] == 'none' || this.game.board[i][4] == 'ship')
      ) {
        smarterMoves.push(this.game.board[i]);
      }
      if (
        i + 20 <= 99 &&
        this.game.board[i + 10][4] == 'hit' &&
        this.game.board[i + 20][4] == 'hit' &&
        (this.game.board[i][4] == 'none' || this.game.board[i][4] == 'ship')
      ) {
        smarterMoves.push(this.game.board[i]);
      }
      if (
        i - 20 >= 0 &&
        this.game.board[i - 20][4] == 'hit' &&
        this.game.board[i - 10][4] == 'hit' &&
        (this.game.board[i][4] == 'none' || this.game.board[i][4] == 'ship')
      ) {
        smarterMoves.push(this.game.board[i]);
      }
    }
    for (let i = 0; i < this.game.board.length; i++) {
      if (
        i + 1 <= 99 &&
        this.game.board[i + 1][4] == 'hit' &&
        (this.game.board[i][4] == 'none' || this.game.board[i][4] == 'ship')
      ) {
        smartMoves.push(this.game.board[i]);
      }
      if (
        i - 1 >= 0 &&
        this.game.board[i - 1][4] == 'hit' &&
        (this.game.board[i][4] == 'none' || this.game.board[i][4] == 'ship')
      ) {
        smartMoves.push(this.game.board[i]);
      }
      if (
        i + 10 <= 99 &&
        this.game.board[i + 10][4] == 'hit' &&
        (this.game.board[i][4] == 'none' || this.game.board[i][4] == 'ship')
      ) {
        smartMoves.push(this.game.board[i]);
      }
      if (
        i - 10 >= 0 &&
        this.game.board[i - 10][4] == 'hit' &&
        (this.game.board[i][4] == 'none' || this.game.board[i][4] == 'ship')
      ) {
        smartMoves.push(this.game.board[i]);
      }
    }
    if (smarterMoves.length > 0) {
      move = Math.floor(Math.random() * smarterMoves.length);
      return [
        this.game.receiveAttack(smarterMoves[move][0], smarterMoves[move][1]),
        smarterMoves[move][3],
      ];
    } else if (smartMoves.length > 0) {
      move = Math.floor(Math.random() * smartMoves.length);
      return [
        this.game.receiveAttack(smartMoves[move][0], smartMoves[move][1]),
        smartMoves[move][3],
      ];
    } else {
      move = Math.floor(Math.random() * legalMoves.length);
      return [
        this.game.receiveAttack(legalMoves[move][0], legalMoves[move][1]),
        legalMoves[move][3],
      ];
    }
  }
}

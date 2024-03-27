import Ship from './ships';

export default class Gameboard {
  constructor() {
    this.board = null;
  }

  createBoard() {
    let board = [];
    let boardSize = 10;

    for (let i = 1; i <= boardSize; i++) {
      for (let j = 1; j <= boardSize; j++) {
        board.push([i, j, 'empty']);
      }
    }

    this.board = board;
  }

  placeShip(x, y, size, direction) {
    let ship = new Ship(size);
    let board = this.board;
    let shipCoords = [];
    if (direction == true && y >= 1 && y <= 7) {
      for (let i = y; i < y + ship.length; i++) {
        for (let j = 0; j < board.length; j++) {
          if (x == board[j][0] && i == board[j][1] && board[j][2] == 'empty') {
            shipCoords.push(ship);
          } else if (
            x == board[j][0] &&
            i == board[j][1] &&
            board[j][2] !== 'empty'
          ) {
            shipCoords = [];
            return 'A ship has already been placed here, captain!';
          }
        }
      }
      for (let i = y; i < y + ship.length; i++) {
        for (let j = 0; j < board.length; j++) {
          if (
            shipCoords.length == ship.length &&
            x == board[j][0] &&
            i == board[j][1]
          ) {
            board[j][2] = ship;
          }
        }
      }
    } else if (direction == false && x >= 1 && x <= 7) {
      for (let i = x; i < x + ship.length; i++) {
        for (let j = 0; j < board.length; j++) {
          if (i == board[j][0] && y == board[j][1] && board[j][2] == 'empty') {
            shipCoords.push(ship);
          } else if (
            i == board[j][0] &&
            y == board[j][1] &&
            board[j][2] !== 'empty'
          ) {
            shipCoords = [];
            return 'A ship has already been placed here, captain!';
          }
        }
      }
      for (let i = x; i < x + ship.length; i++) {
        for (let j = 0; j < board.length; j++) {
          if (
            shipCoords.length == ship.length &&
            i == board[j][0] &&
            y == board[j][1]
          ) {
            board[j][2] = ship;
          }
        }
      }
    } else return 'position not valid';
  }

  receiveAttack(x, y) {
    let board = this.board;
    if (x < 0 || x > 10 || y < 0 || y > 10) {
      return 'Cannot fire here, captain!';
    } else
      for (let i = 0; i < board.length; i++) {
        if (x == board[i][0] && y == board[i][1] && board[i][2] == 'empty') {
          board[i][2] = 'miss';
          return board[i][2];
        } else if (
          x == board[i][0] &&
          y == board[i][1] &&
          (board[i][2] == 'hit' || board[i][2] == 'miss')
        ) {
          return 'Cannot fire here, captain!';
        } else if (x == board[i][0] && y == board[i][1]) {
          board[i][2].hit();
          board[i][2].isSunk();
          if (board[i][2].sunk == true) {
            board[i][2] = 'hit';
            return "You've sunk my battleship!";
          } else board[i][2] = 'hit';
          return board[i][2];
        }
      }
  }
}

import Ship from './ships';

export default class Gameboard {
  constructor() {
    this.board = null;
  }

  createBoard() {
    let board = [];
    let boardSize = 10;
    let k = 0;

    for (let i = 1; i <= boardSize; i++) {
      for (let j = 1; j <= boardSize; j++) {
        board.push([i, j, 'empty', k++]);
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
    } else console.log([x, y]);
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
        let checkWin = [];
        for (let i = 0; i < board.length; i++) {
          if (typeof board[i][2] == 'object') {
            checkWin.push('ship');
          }
        }
        if (checkWin.length == 1) {
          board[i][2] = 'hit';
          checkWin = [];
          return "You've sunk their last ship, captain! The war is over!";
        } else if (board[i][2].sunk == true) {
          board[i][2] = 'hit';
          return "You've sunk their battleship!";
        } else board[i][2] = 'hit';
        return board[i][2];
      }
    }
  }
}

//I do believe you missed their ships, sir.
//Miss. We must be getting close to one, captain.
//Captain, we can't afford to keep missing like this.
//We've missed. Where must their ships be?

//You gotten a hit, captain!
//Brilliant shot!
//A hit, we've got them on their heels now.
//Bloody good hit.

//More of those and this war will be done in no time!
//Captain, you've sunk one of their ships!
//Their ship appears to be sunk, sir.
//This will turn the tide of battle, lets sink another.

//You've sunk their last ship, captain! The war is over!
//That's their last one, we can finally go home!
//They're waving the white flag, sir. Victory!
//We'll be remembered forever as heroes, Captain!

//Our last ship is sunk. Captain, it's been an honor.
//Oh no! That was our last ship, captain!
//We fought to the bitter end.
//We must abandon ship, we've lost the battle.

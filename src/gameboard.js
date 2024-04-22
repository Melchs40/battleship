import Ship from './ships';

export default class Gameboard {
  constructor() {
    this.board = null;
    this.lastMove = null;
    this.checkWin = [];
  }

  createBoard() {
    let board = [];
    let boardSize = 10;
    let k = 0;

    for (let i = 1; i <= boardSize; i++) {
      for (let j = 1; j <= boardSize; j++) {
        board.push([i, j, 'empty', k++, 'none']);
      }
    }
    this.board = board;
  }

  placeShip(x, y, size, direction) {
    let ship = new Ship(size);
    let board = this.board;
    let shipCoords = [];
    if (direction == true && y + size >= 1 && y + size <= 11) {
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
            return 'A ship has already been placed here, Captain!';
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
            board[j][4] = 'ship';
          }
        }
      }
    } else if (direction == false && x + size >= 1 && x + size <= 11) {
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
            return 'A ship has already been placed here, Captain!';
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
            board[j][4] = 'ship';
          }
        }
      }
    } else {
      return 'The whole ship must be on the board, Captain!';
    }
    this.lastMove = [x, y, size, direction];
  }

  receiveAttack(x, y) {
    let board = this.board;
    if (x < 0 || x > 10 || y < 0 || y > 10) {
      return 'Cannot fire here, captain!';
    } else console.log([x, y]);
    for (let i = 0; i < board.length; i++) {
      if (x == board[i][0] && y == board[i][1] && board[i][4] == 'none') {
        board[i][4] = 'miss';
        let misses = [];
        misses.push('I do believe you missed their ships, sir.');
        misses.push('Miss. We must be getting close to one, Captain.');
        misses.push("Captain, we can't afford to keep missing like this.");
        misses.push("We've missed. Where must their ships be?");
        return ['miss', misses[Math.floor(Math.random() * misses.length)]];
      } else if (
        x == board[i][0] &&
        y == board[i][1] &&
        (board[i][4] == 'hit' || board[i][4] == 'miss' || board[i][4] == 'sunk')
      ) {
        return 'Cannot fire here, captain!';
      } else if (x == board[i][0] && y == board[i][1]) {
        board[i][2].hit();
        board[i][2].isSunk();
        this.checkWin.push('hit');
        if (this.checkWin.length == 17) {
          board[i][4] = 'hit';
          this.checkWin = [];
          let lastSink = [];
          lastSink.push(
            "You've sunk their last ship, Captain! The war is over!"
          );
          lastSink.push("That's their last one, we can finally go home!");
          lastSink.push("They're waving the white flag, sir. Victory!");
          lastSink.push("We'll be remembered forever as heroes, Captain!");
          let lastPCSink = [];
          lastPCSink.push(
            "Our last ship is sunk. Captain, it's been an honor."
          );
          lastPCSink.push('Oh no! That was our last ship, captain!');
          lastPCSink.push('We fought to the bitter end.');
          lastPCSink.push("We must abandon ship, we've lost the battle.");
          return [
            'hit',
            lastSink[Math.floor(Math.random() * lastSink.length)],
            lastPCSink[Math.floor(Math.random() * lastPCSink.length)],
            true,
            [x, y],
          ];
        } else if (board[i][2].sunk == true) {
          //   for (let i = 0; i < board.length; i++) {
          //     if (board[i][2].sunk == true) {
          //       board[i][4] = 'sunk';
          //     }
          //   }
          board[i][4] = 'hit';
          let hitShip = board[i][2];
          let sinks = [];
          sinks.push('More of those and this war will be done in no time!');
          sinks.push("Captain, you've sunk one of their ships!");
          sinks.push('Their ship appears to be sunk, sir.');
          sinks.push('This will turn the tide of battle, lets sink another.');
          return [
            'hit',
            sinks[Math.floor(Math.random() * sinks.length)],
            hitShip.length,
            [x, y],
          ];
        } else {
          let testShip = board[i][2];
          board[i][4] = 'hit';
          let hits = [];

          hits.push("I say you've gotten a hit, Captain!");
          hits.push("Brilliant shot! Let's hit them again!");
          hits.push("A hit, we've got them on their heels now.");
          hits.push('Bloody good hit. They must be reeling.');
          return [
            'hit',
            hits[Math.floor(Math.random() * hits.length)],
            [x, y],
            testShip.hits,
            testShip.sunk,
            testShip.sunk,
          ];
        }
      }
    }
  }
}

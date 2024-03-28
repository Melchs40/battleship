import Ship from './ships';

import Gameboard from './gameboard';

test('test gameboard creation', () => {
  let newBoard = new Gameboard();
  newBoard.createBoard();
  expect(newBoard.board.length).toBe(100);
  expect(newBoard.board[62]).toEqual([7, 3, 'empty']);
});

test('test ship creation and placement horiztontally and vertically', () => {
  let newBoard = new Gameboard();
  newBoard.createBoard();
  newBoard.placeShip(1, 5, 3, true);
  expect(newBoard.board[4][2]).toEqual({ hits: 0, length: 3, sunk: false });
  expect(newBoard.board[5][2]).toEqual({ hits: 0, length: 3, sunk: false });
  expect(newBoard.board[6][2]).toEqual({ hits: 0, length: 3, sunk: false });
  newBoard.placeShip(5, 1, 3, false);
  expect(newBoard.board[40][2]).toEqual({ hits: 0, length: 3, sunk: false });
  expect(newBoard.board[50][2]).toEqual({ hits: 0, length: 3, sunk: false });
  expect(newBoard.board[60][2]).toEqual({ hits: 0, length: 3, sunk: false });
});

test('test to make sure ships cannot be placed on top of one another', () => {
  let newBoard = new Gameboard();
  newBoard.createBoard();
  newBoard.placeShip(1, 5, 3, true);
  expect(newBoard.placeShip(1, 5, 3, true)).toBe(
    'A ship has already been placed here, captain!'
  );
  newBoard.placeShip(2, 1, 3, false);
  expect(newBoard.placeShip(4, 1, 3, false)).toBe(
    'A ship has already been placed here, captain!'
  );
});

test('check if attacks return proper value for hits, misses, and invalid locations', () => {
  let newBoard = new Gameboard();
  newBoard.createBoard();
  newBoard.placeShip(1, 5, 2, true);
  newBoard.placeShip(2, 2, 1, true);
  expect(newBoard.receiveAttack(1, 6)).toBe('hit');
  expect(newBoard.receiveAttack(1, 8)).toBe('miss');
  expect(newBoard.receiveAttack(1, 6)).toBe('Cannot fire here, captain!');
  expect(newBoard.receiveAttack(1, 17)).toBe('Cannot fire here, captain!');
  expect(newBoard.receiveAttack(1, 5)).toBe("You've sunk my battleship!");
});

test('check if all ships have been sunk on the gameboard', () => {
  let newBoard = new Gameboard();
  newBoard.createBoard();
  newBoard.placeShip(1, 5, 1, true);
  newBoard.placeShip(3, 5, 1, true);
  newBoard.receiveAttack(1, 5);
  expect(newBoard.receiveAttack(3, 5)).toBe(
    "You've sunk their last ship, captain! The war is over!"
  );
});

import Player from './player';

test('check whether the player is correctly assigned a name', () => {
  let player = new Player('Ahab');
  expect(player.name).toBe('Captain Ahab');
});

test('test if a board has been created from startGame function', () => {
  let player = new Player('Ahab');
  player.startGame();
  expect(player.board.length).toBe(100);
  expect(player.board[82]).toEqual([9, 3, 'empty']);
});

test('test if takeTurn function correctly hits, misses, sinks on gameboard', () => {
  let player = new Player('Ahab');
  player.startGame();
  player.game.placeShip(1, 1, 2, true);
  player.game.placeShip(2, 1, 1, true);
  jest
    .spyOn(player.game, 'receiveAttack')
    .mockReturnValueOnce('hit')
    .mockReturnValueOnce('miss')
    .mockReturnValueOnce("You've sunk my battleship!")
    .mockReturnValueOnce(
      "You've sunk their last ship, captain! The war is over!"
    );
  expect(player.takeTurn()).toBe('hit');
  expect(player.takeTurn()).toBe('miss');
  expect(player.takeTurn()).toBe("You've sunk my battleship!");
  expect(player.takeTurn()).toBe(
    "You've sunk their last ship, captain! The war is over!"
  );
});

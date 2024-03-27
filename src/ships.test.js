import Ship from './ships';

test("add hits to the ship's hit counter", () => {
  let sub = new Ship(3);
  sub.hit();
  expect(sub.hit()).toBe(2);
});

test('check if a ship has been sunk', () => {
  let dingy = new Ship(1);
  dingy.hit();
  expect(dingy.isSunk()).toBe(true);
});

import './style.css';
import Gameboard from './gameboard';
import Ship from './ships';
import Player from './player';

let content = document.getElementById('content');

let pcTurn = false;
let user = '';
let pcUser = '';
let testLength = 3;

//create the user interface
let ui = document.createElement('div');
ui.classList.add('interface');

let title = document.createElement('header');
title.innerHTML = 'Battleship';
title.setAttribute('id', 'title');

let introContainer = document.createElement('div');
introContainer.classList.add('intro-container');

let intro = document.createElement('div');
intro.innerHTML = 'Welcome to the war. What is your name, Captain?';
intro.classList.add('intro');

let input = document.createElement('input');
input.type = 'text';
input.setAttribute('id', 'input-name');
intro.appendChild(input);

let startButton = document.createElement('button');
startButton.setAttribute('id', 'start');
startButton.innerHTML = 'START';
intro.appendChild(startButton);
startButton.addEventListener('click', function () {
  intro.classList.remove('intro');
  let player = new Player(input.value);
  player.startGame();
  playerName.innerHTML = `Captain ${input.value}`;
  playerName.style.visibility = 'visible';
  playerBoard.style.visibility = 'visible';
  playerShips.style.visibility = 'visible';
  createPlayerBoard();
  let player2 = new Player('Admiral von Eval');
  player2.startGame();
  computerName.style.visibility = 'visible';
  computerBoard.style.visibility = 'visible';
  computerShips.style.visibility = 'visible';
  createComputerBoard();
  console.log(player.board);
  user = player;
  pcUser = player2;
  intro.innerHTML = 'Place your ships on the grid to the left';
  intro.classList.add('intro');
});

let gameBoards = document.createElement('div');
gameBoards.setAttribute('id', 'game-container');

let playerContainer = document.createElement('div');
playerContainer.setAttribute('id', 'player-container');
playerContainer.classList.add('containers');

let playerName = document.createElement('div');
playerName.setAttribute('id', 'player-name');
playerName.style.visibility = 'hidden';
playerContainer.appendChild(playerName);

let playerBoard = document.createElement('div');
playerBoard.setAttribute('id', 'player-board');
playerBoard.style.visibility = 'hidden';
playerContainer.appendChild(playerBoard);

let playerShips = document.createElement('div');
playerShips.setAttribute('id', 'player-ships');
playerShips.style.visibility = 'hidden';
playerContainer.appendChild(playerShips);

let playerCarrier = document.createElement('div');
playerCarrier.setAttribute('id', 'player-carrier');
playerCarrier.classList.add('ships');
playerShips.appendChild(playerCarrier);

for (let i = 0; i < 5; i++) {
  let piece = document.createElement('div');
  piece.classList.add('piece');
  playerCarrier.appendChild(piece);
}

let playerBattleship = document.createElement('div');
playerBattleship.setAttribute('id', 'player-battleship');
playerBattleship.classList.add('ships');
playerBattleship.addEventListener('click', () => {
  playerBattleship.classList.add('active');
});
playerShips.appendChild(playerBattleship);

for (let i = 0; i < 4; i++) {
  let piece = document.createElement('div');
  piece.classList.add('piece');
  playerBattleship.appendChild(piece);
}

let playerCruiser = document.createElement('div');
playerCruiser.setAttribute('id', 'player-cruiser');
playerCruiser.classList.add('ships');
playerShips.appendChild(playerCruiser);

for (let i = 0; i < 3; i++) {
  let piece = document.createElement('div');
  piece.classList.add('piece');
  playerCruiser.appendChild(piece);
}

let playerSubmarine = document.createElement('div');
playerSubmarine.setAttribute('id', 'player-submarine');
playerSubmarine.classList.add('ships');
playerShips.appendChild(playerSubmarine);

for (let i = 0; i < 3; i++) {
  let piece = document.createElement('div');
  piece.classList.add('piece');
  playerSubmarine.appendChild(piece);
}

let playerDestroyer = document.createElement('div');
playerDestroyer.setAttribute('id', 'player-destroyer');
playerDestroyer.classList.add('ships');
playerShips.appendChild(playerDestroyer);
for (let i = 0; i < 2; i++) {
  let piece = document.createElement('div');
  piece.classList.add('piece');
  playerDestroyer.appendChild(piece);
}

function createPlayerBoard() {
  for (let i = 0; i < 100; i++) {
    let square = document.createElement('button');
    square.classList.add('square');
    square.classList.add('player-square');
    square.setAttribute('id', 'player-' + i);
    square.addEventListener('click', function () {
      console.log(square.id);
    });
    playerBoard.appendChild(square);
  }
}

if (pcTurn == true) {
  console.log(user.takeTurn());
  pcTurn = false;
}

let computerContainer = document.createElement('div');
computerContainer.setAttribute('id', 'computer-container');
computerContainer.classList.add('containers');

let computerName = document.createElement('div');
computerName.setAttribute('id', 'computer-name');
computerName.innerHTML = 'Admiral Wicked von Eval';
computerName.style.visibility = 'hidden';
computerContainer.appendChild(computerName);

let computerBoard = document.createElement('div');
computerBoard.setAttribute('id', 'computer-board');
computerBoard.style.visibility = 'hidden';
computerContainer.appendChild(computerBoard);

let computerShips = document.createElement('div');
computerShips.setAttribute('id', 'computer-ships');
computerShips.style.visibility = 'hidden';
computerContainer.appendChild(computerShips);

let computerCarrier = document.createElement('div');
computerCarrier.setAttribute('id', 'computer-carrier');
computerCarrier.classList.add('ships');
computerShips.appendChild(computerCarrier);

for (let i = 0; i < 5; i++) {
  let piece = document.createElement('div');
  piece.classList.add('piece');
  computerCarrier.appendChild(piece);
}

let computerBattleship = document.createElement('div');
computerBattleship.setAttribute('id', 'computer-battleship');
computerBattleship.classList.add('ships');
computerShips.appendChild(computerBattleship);

for (let i = 0; i < 4; i++) {
  let piece = document.createElement('div');
  piece.classList.add('piece');
  computerBattleship.appendChild(piece);
}

let computerCruiser = document.createElement('div');
computerCruiser.setAttribute('id', 'computer-cruiser');
computerCruiser.classList.add('ships');
computerShips.appendChild(computerCruiser);

for (let i = 0; i < 3; i++) {
  let piece = document.createElement('div');
  piece.classList.add('piece');
  computerCruiser.appendChild(piece);
}

let computerSubmarine = document.createElement('div');
computerSubmarine.setAttribute('id', 'computer-submarine');
computerSubmarine.classList.add('ships');
computerShips.appendChild(computerSubmarine);

for (let i = 0; i < 3; i++) {
  let piece = document.createElement('div');
  piece.classList.add('piece');
  computerSubmarine.appendChild(piece);
}

let computerDestroyer = document.createElement('div');
computerDestroyer.setAttribute('id', 'computer-destroyer');
computerDestroyer.classList.add('ships');
computerShips.appendChild(computerDestroyer);
for (let i = 0; i < 2; i++) {
  let piece = document.createElement('div');
  piece.classList.add('piece');
  computerDestroyer.appendChild(piece);
}

function createComputerBoard() {
  for (let i = 0; i < 100; i++) {
    let square = document.createElement('button');
    square.classList.add('square');
    square.classList.add('computer-square');
    square.setAttribute('id', 'computer-' + i);
    square.addEventListener('click', function () {
      let response = pcUser.game.receiveAttack(
        pcUser.game.board[i][0],
        pcUser.game.board[i][1]
      );
      intro.innerHTML = response;
      intro.classList.remove('pc-intro');
      intro.classList.add('intro');

      square.id = 'hit';
      if (pcUser.game.board[i][2] == 'hit') {
        square.innerHTML = 'X';
      } else square.innerHTML = '-';
      let activeSquares = document.getElementsByClassName('computer-square');
      for (let i = 0; i < activeSquares.length; i++) {
        activeSquares[i].disabled = true;
      }
      setTimeout(() => {
        let [first, second] = user.takeTurn();
        console.log(first);
        let playerSquare = document.getElementById('player-board').children;
        let playerSquareArray = Array.from(playerSquare);

        playerSquareArray[second].id = 'hit';
        if (first == 'hit') {
          playerSquareArray[second].innerHTML = 'X';
        } else playerSquareArray[second].innerHTML = '-';

        let activeSquares = document.getElementsByClassName('computer-square');
        for (let i = 0; i < activeSquares.length; i++) {
          activeSquares[i].disabled = false;
        }
        intro.classList.add('pc-intro');
        intro.classList.remove('intro');
      }, 3000);
    });

    computerBoard.appendChild(square);
  }
}

content.appendChild(ui);
ui.appendChild(title);
ui.appendChild(introContainer);
introContainer.appendChild(intro);
ui.appendChild(gameBoards);
gameBoards.appendChild(playerContainer);
gameBoards.appendChild(computerContainer);

//creates background image
let background = document.createElement('div');
background.classList.add('background');

let firstCircle = document.createElement('div');
firstCircle.classList.add('circle');
firstCircle.setAttribute('id', 'first');

let secondCircle = document.createElement('div');
secondCircle.classList.add('circle');
secondCircle.setAttribute('id', 'second');

let thirdCircle = document.createElement('div');
thirdCircle.classList.add('circle');
thirdCircle.setAttribute('id', 'third');

let fourthCircle = document.createElement('div');
fourthCircle.classList.add('circle');
fourthCircle.setAttribute('id', 'fourth');

let fifthCircle = document.createElement('div');
fifthCircle.classList.add('circle');
fifthCircle.setAttribute('id', 'fifth');

let vLine = document.createElement('div');
vLine.setAttribute('id', 'v-line');

let hLine = document.createElement('div');
hLine.setAttribute('id', 'h-line');

let moveLine = document.createElement('div');
moveLine.setAttribute('id', 'move-line');

content.appendChild(background);
background.appendChild(firstCircle);
firstCircle.appendChild(secondCircle);
secondCircle.appendChild(thirdCircle);
thirdCircle.appendChild(fourthCircle);
fourthCircle.appendChild(fifthCircle);
firstCircle.appendChild(vLine);
firstCircle.appendChild(hLine);
firstCircle.appendChild(moveLine);

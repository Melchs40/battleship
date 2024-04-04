import './style.css';
import Gameboard from './gameboard';
import Ship from './ships';
import Player from './player';

let content = document.getElementById('content');

let user = '';
let pcUser = '';
let testLength = 3;

//create the user interface
let ui = document.createElement('div');
ui.classList.add('interface');

let title = document.createElement('header');
title.innerHTML = 'Battleship';
title.setAttribute('id', 'title');

let intro = document.createElement('div');
intro.innerHTML = 'Welcome to the war. What is your name, Captain?';
intro.setAttribute('id', 'intro');

let input = document.createElement('input');
input.type = 'text';
input.setAttribute('id', 'input-name');
intro.appendChild(input);

let startButton = document.createElement('button');
startButton.setAttribute('id', 'start');
startButton.innerHTML = 'START';
intro.appendChild(startButton);
startButton.addEventListener('click', function () {
  let player = new Player(input.value);
  player.startGame();
  playerBoard.style.visibility = 'visible';
  createPlayerBoard();
  let player2 = new Player('PC');
  player2.startGame();
  computerBoard.style.visibility = 'visible';
  createComputerBoard();
  console.log(player.board);
  user = player;
  pcUser = player2;
});

let gameBoards = document.createElement('div');
gameBoards.setAttribute('id', 'game-container');

let playerContainer = document.createElement('div');
playerContainer.setAttribute('id', 'player-container');
playerContainer.classList.add('containers');

let playerBoard = document.createElement('div');
playerBoard.setAttribute('id', 'player-board');
playerBoard.style.visibility = 'hidden';
playerContainer.appendChild(playerBoard);

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

let computerContainer = document.createElement('div');
computerContainer.setAttribute('id', 'computer-container');
computerContainer.classList.add('containers');

let computerBoard = document.createElement('div');
computerBoard.setAttribute('id', 'computer-board');
computerBoard.style.visibility = 'hidden';
computerContainer.appendChild(computerBoard);

function createComputerBoard() {
  for (let i = 0; i < 100; i++) {
    let square = document.createElement('button');
    square.classList.add('square');
    square.classList.add('computer-square');
    square.setAttribute('id', 'computer-' + i);
    square.addEventListener('click', function () {
      console.log(
        pcUser.game.receiveAttack(
          pcUser.game.board[i][0],
          pcUser.game.board[i][1]
        )
      );
      square.id = 'hit';
      if (pcUser.game.board[i][2] == 'hit') {
        square.innerHTML = 'X';
      } else square.innerHTML = '-';
    });
    computerBoard.appendChild(square);
  }
}

content.appendChild(ui);
ui.appendChild(title);
ui.appendChild(intro);
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

import './style.css';
import Gameboard from './gameboard';
import Ship from './ships';
import Player from './player';
import { createPCShips, createPlayerShips } from './ship-ui';

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
  playerContainer.style.display = 'flex';
  createPlayerBoard();
  let player2 = new Player('Admiral von Eval');
  player2.startGame();
  computerContainer.style.display = 'flex';
  createComputerBoard();
  console.log(player.board);
  user = player;
  pcUser = player2;
  intro.innerHTML = 'Place your ships on the grid to the left';
  intro.classList.add('intro');
});

let gameBoards = document.createElement('div');
gameBoards.setAttribute('id', 'game-container');

export let playerContainer = document.createElement('div');
playerContainer.setAttribute('id', 'player-container');
playerContainer.style.display = 'none';
playerContainer.classList.add('containers');

let playerName = document.createElement('div');
playerName.setAttribute('id', 'player-name');
playerContainer.appendChild(playerName);

let playerBoard = document.createElement('div');
playerBoard.setAttribute('id', 'player-board');
playerContainer.appendChild(playerBoard);

createPlayerShips();

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

export let computerContainer = document.createElement('div');
computerContainer.setAttribute('id', 'computer-container');
computerContainer.style.display = 'none';
computerContainer.classList.add('containers');

let computerName = document.createElement('div');
computerName.setAttribute('id', 'computer-name');
computerName.innerHTML = 'Admiral Wicked von Eval';
computerContainer.appendChild(computerName);

let computerBoard = document.createElement('div');
computerBoard.setAttribute('id', 'computer-board');
computerContainer.appendChild(computerBoard);

createPCShips();

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

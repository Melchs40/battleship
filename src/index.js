import './style.css';
import Gameboard from './gameboard';
import Ship from './ships';
import Player from './player';
import { createPCShips, createPlayerShips } from './ship-ui';

let content = document.getElementById('content');

let pcTurn = false;
let user = '';
let pcUser = '';
export let pieceLength = 0;
export let setPiece = false;
let horizontal = true;
let beginButton2 = '';
let randomChance = Math.random() < 0.5;

let storedData = [];
storedData[1] = [];
storedData[4] = '';
let attackData = '';
let movePosition = '';
let direction = '';
let moveToMake = '';

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
startButton.addEventListener('click', function beginGame() {
  intro.classList.remove('intro');
  let player = new Player(input.value);
  player.startGame();
  playerName.innerHTML = `Captain ${input.value}`;
  playerContainer.style.display = 'flex';
  createPlayerBoard();
  let player2 = new Player('Admiral von Eval');
  player2.startGame();
  newBtn.style.display = 'flex';
  computerContainer.style.display = 'flex';
  createComputerBoard();
  console.log(player.board);
  user = player;
  pcUser = player2;
  intro.innerHTML = 'Place your ships on the grid to the left';
  intro.classList.add('intro');
  firstCircle.classList.add('mobile');
  secondCircle.classList.add('mobile');
  thirdCircle.classList.add('mobile');
  fourthCircle.classList.add('mobile');
  fifthCircle.classList.add('mobile');
  vLine.classList.add('mobile');
  hLine.classList.add('mobile');
  moveLine.classList.add('mobile');
  console.log(`Init random- ${randomChance}`);
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
  let startGame = 0;
  for (let i = 0; i < 100; i++) {
    let square = document.createElement('button');
    square.classList.add('square');
    square.classList.add('player-square');
    square.setAttribute('id', i);
    square.addEventListener('click', function () {
      intro.classList.remove('intro');
      intro.offsetWidth;
      intro.classList.add('intro');

      if (setPiece == true && square.id == user.game.board[square.id][3]) {
        intro.innerHTML = user.game.placeShip(
          user.game.board[square.id][0],
          user.game.board[square.id][1],
          pieceLength,
          horizontal
        );
        if (
          intro.innerHTML.indexOf('whole') !== -1 ||
          intro.innerHTML.indexOf('placed') !== -1
        ) {
        } else {
          function pcMove() {
            let pcPosition = Math.floor(Math.random() * 2);
            if (pcPosition == 0) {
              let move = pcUser.game.placeShip(
                Math.floor(Math.random() * 10) + 1,
                Math.floor(Math.random() * (11 - pieceLength)) + 1,
                pieceLength,
                true
              );
              if (move == 'A ship has already been placed here, Captain!') {
                console.log('repeat');
                return pcMove();
              }
            } else {
              let move = pcUser.game.placeShip(
                Math.floor(Math.random() * (11 - pieceLength)) + 1,
                Math.floor(Math.random() * 10) + 1,
                pieceLength,
                false
              );
              console.log(pcUser.game.lastMove);
              if (move == 'A ship has already been placed here, Captain!') {
                console.log('repeat');
                return pcMove();
              }
            }
          }
          pcMove();
          for (let i = 0; i < pcUser.game.board.length; i++) {
            if (pcUser.game.board[i][2] !== 'empty') {
              pcUser.game.board[i][4] = 'ship';
            }
          }
          console.log(pcUser.game.board);
          setPiece = false;
          const hoverSquares = document.querySelectorAll('.player-square');
          hoverSquares.forEach((square) => {
            square.classList.toggle('hover-enabled'); // Add/remove class for hover
          });
          for (let i = 0; i < user.game.board.length; i++) {
            if (user.game.board[i][2] !== 'empty') {
              let activePlayerSquares =
                document.getElementsByClassName('player-square');
              activePlayerSquares[i].classList.add('placed-ship');
            }
          }
          let activeClass = document.getElementsByClassName('active');
          while (activeClass.length > 0) {
            let newActive = activeClass[0].cloneNode(true);
            activeClass[0].parentNode.replaceChild(newActive, activeClass[0]);
            newActive.classList.add('used');
            activeClass[0].classList.remove('active');
            startGame++;
          }
          if (startGame < 5) {
            intro.innerHTML = 'Place your ships on the grid to the left';
          } else {
            let beginButton = newBtn.cloneNode(true);
            newBtn.parentNode.replaceChild(beginButton, newBtn);
            beginButton.innerHTML = 'Begin';
            beginButton.setAttribute('id', 'game-button');
            intro.innerHTML = 'Press the button to begin your offensive.';
            beginButton2 = beginButton;
            pieceLength = '';
            beginButton.addEventListener('click', () => {
              intro.classList.remove('intro');
              intro.offsetWidth;
              intro.innerHTML = 'I wish you good luck, sir. Fire away!';
              beginButton.style.display = 'none';
              intro.classList.add('intro');
              let playerShips = document.getElementsByClassName('ships');
              for (let i = 0; i <= 5; i++) {
                playerShips[i].classList.remove('used');
              }
              let activeSquares =
                document.getElementsByClassName('computer-square');
              let activePlayerSquares =
                document.getElementsByClassName('player-square');
              for (let i = 0; i < activeSquares.length; i++) {
                activeSquares[i].disabled = false;
                activePlayerSquares[i].disabled = true;
              }
            });
          }
        }
        // console.log(user.game.board);
      }
    });
    playerBoard.appendChild(square);
  }
}

if (pcTurn == true) {
  console.log(user.takeTurn());
  pcTurn = false;
}

let newBtnBox = document.createElement('div');
newBtnBox.setAttribute('id', 'game-button-box');

let newBtn = document.createElement('button');
newBtn.innerHTML = 'Horizontal';
newBtn.addEventListener('click', () => {
  if (newBtn.innerHTML == 'Horizontal') {
    newBtn.innerHTML = 'Vertical';
    horizontal = false;
  } else {
    newBtn.innerHTML = 'Horizontal';
    horizontal = true;
  }
});
newBtn.setAttribute('id', 'game-button');
newBtn.style.display = 'none';

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
    square.disabled = true;
    square.addEventListener(
      'click',
      function () {
        let response = pcUser.game.receiveAttack(
          pcUser.game.board[i][0],
          pcUser.game.board[i][1]
        );
        if (response.length == 5) {
          let win = document.createElement('div');
          win.setAttribute('id', 'win');
          win.style.display = 'flex';
          let winText = document.createElement('div');
          winText.setAttribute('id', 'win-text');
          winText.innerHTML = response[1];
          let winButton = document.createElement('div');
          winButton.setAttribute('id', 'win-button');
          winButton.innerHTML = 'Try Again?';
          intro.offsetWidth;
          intro.innerHTML = String('  ');
          intro.style.animation = 'none';

          winButton.addEventListener('click', function beginGame() {
            let playerStuff = document.getElementById('player-board');
            let pcStuff = document.getElementById('computer-board');
            let shipStuff = document.getElementById('player-ships');
            let gameButtonBox = document.getElementById('game-button-box');
            let computerShips = document.getElementById('computer-ships');

            while (playerStuff.children.length > 0) {
              playerStuff.removeChild(playerStuff.firstChild);
              pcStuff.removeChild(pcStuff.firstChild);
            }
            while (shipStuff.children.length > 0) {
              shipStuff.removeChild(shipStuff.firstChild);
            }
            while (gameButtonBox.children.length > 0) {
              gameButtonBox.removeChild(gameButtonBox.firstChild);
            }
            for (let eachShip of computerShips.children) {
              eachShip.classList.remove('used');
            }
            playerContainer.removeChild(shipStuff);
            user.startGame();
            createPlayerBoard();
            pcUser.startGame();
            createComputerBoard();
            createPlayerShips();
            gameButtonBox.appendChild(newBtn);
            intro.innerHTML = 'Place your ships on the grid to the left';
            intro.classList.add('intro');
            win.style.display = 'none';
          });
          ui.appendChild(win);
          win.appendChild(winText);
          win.appendChild(winButton);
        } else {
          intro.innerHTML = response[1];
          let computerShips = document.getElementById('computer-ships');
          if (response.length == 4) {
            if (response[2] == 3) {
              if (randomChance == true) {
                let subPiece = document.getElementById('computer-submarine');
                subPiece.classList.add('used');
                randomChance = false;
              } else {
                let cruiserPiece = document.getElementById('computer-cruiser');
                cruiserPiece.classList.add('used');
                randomChance = true;
              }
              // if (randomChance == true) {
              //   randomChance = false;
              //   console.log(`f to t ${randomChance}`);
              // } else {
              //   (randomChance = true), console.log(`t to f ${randomChance}`);
              // }
            } else {
              for (let eachShip of computerShips.children) {
                if (eachShip.children.length == response[2]) {
                  eachShip.classList.add('used');
                }
              }
            }
          }
        }

        intro.classList.remove('intro');
        intro.offsetWidth;
        intro.classList.remove('pc-intro');
        intro.classList.add('intro');

        if (pcUser.game.board[i][4] == 'hit') {
          square.innerHTML = 'X';
          square.classList.add('hit');
        } else {
          square.innerHTML = '-';
          square.classList.add('miss');
        }
        let activeSquares = document.getElementsByClassName('computer-square');
        for (let i = 0; i < activeSquares.length; i++) {
          activeSquares[i].disabled = true;
        }
        setTimeout(() => {
          [attackData, movePosition] = user.takeTurn();
          let playerSquare = document.getElementById('player-board').children;
          let playerSquareArray = Array.from(playerSquare);

          if (attackData[0] == 'hit') {
            playerSquareArray[movePosition].innerHTML = 'X';
            playerSquareArray[movePosition].classList.add('hit');

            for (let i = 0; i < user.game.board.length; i++) {
              if (user.game.board[i][2].sunk == true) {
                user.game.board[i][4] = 'sunk';
                playerSquareArray[i].classList.add('sunk');
              }
            }
            console.log(user.game.board);

            if (attackData.length == 5) {
              intro.offsetWidth;
              intro.innerHTML = String('  ');
              intro.style.animation = 'none';
              let win = document.createElement('div');
              win.setAttribute('id', 'win');
              win.style.display = 'flex';
              let winText = document.createElement('div');
              winText.setAttribute('id', 'win-text');
              winText.innerHTML = attackData[2];
              let winButton = document.createElement('div');
              winButton.setAttribute('id', 'win-button');
              winButton.innerHTML = 'Try Again?';
              winButton.addEventListener('click', function beginGame() {
                let playerStuff = document.getElementById('player-board');
                let pcStuff = document.getElementById('computer-board');
                let shipStuff = document.getElementById('player-ships');
                let gameButtonBox = document.getElementById('game-button-box');
                let computerShips = document.getElementById('computer-ships');
                while (playerStuff.children.length > 0) {
                  playerStuff.removeChild(playerStuff.firstChild);
                  pcStuff.removeChild(pcStuff.firstChild);
                }
                while (shipStuff.children.length > 0) {
                  shipStuff.removeChild(shipStuff.firstChild);
                }
                while (gameButtonBox.children.length > 0) {
                  gameButtonBox.removeChild(gameButtonBox.firstChild);
                }
                for (let eachShip of computerShips.children) {
                  eachShip.classList.remove('used');
                }
                playerContainer.removeChild(shipStuff);
                user.startGame();
                createPlayerBoard();
                pcUser.startGame();
                createComputerBoard();
                createPlayerShips();
                gameButtonBox.appendChild(newBtn);
                intro.innerHTML = 'Place your ships on the grid to the left';
                intro.classList.add('intro');
                win.style.display = 'none';
              });
              ui.appendChild(win);
              win.appendChild(winText);
              win.appendChild(winButton);
            } else {
              let playerShips = document.getElementById('player-ships');
              if (attackData.length == 4) {
                if (attackData[2] == 3) {
                  if (randomChance == true) {
                    let subPiece = document.getElementById('player-submarine');
                    subPiece.classList.add('used');
                  } else {
                    let cruiserPiece =
                      document.getElementById('player-cruiser');
                    cruiserPiece.classList.add('used');
                  }
                  if (randomChance == true) {
                    randomChance = false;
                  } else randomChance = true;
                } else {
                  for (let eachShip of playerShips.children) {
                    if (eachShip.children.length == attackData[2]) {
                      eachShip.classList.add('used');
                    }
                  }
                }
              }
            }
          } else {
            playerSquareArray[movePosition].innerHTML = '-';
            playerSquareArray[movePosition].classList.add('miss');
          }
          let activeSquares =
            document.getElementsByClassName('computer-square');
          for (let i = 0; i < activeSquares.length; i++) {
            activeSquares[i].disabled = false;
          }
          intro.classList.add('pc-intro');
          intro.classList.remove('intro');
        }, 2000);
      },
      { once: true }
    );

    computerBoard.appendChild(square);
  }
}

let footer = document.createElement('div');
footer.classList.add('footer');
footer.innerHTML = "Copyright © Melchs40's Computer Whiz Coding 2024";

content.appendChild(ui);
ui.appendChild(title);
ui.appendChild(introContainer);
introContainer.appendChild(intro);
ui.appendChild(gameBoards);
gameBoards.appendChild(playerContainer);
gameBoards.appendChild(newBtnBox);
gameBoards.appendChild(computerContainer);
newBtnBox.appendChild(newBtn);

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

ui.appendChild(footer);

import { computerContainer, pieceLength, playerContainer, setPiece } from '.';

export function createPlayerShips() {
  let playerShips = document.createElement('div');
  playerShips.setAttribute('id', 'player-ships');
  playerContainer.appendChild(playerShips);

  let playerCarrier = document.createElement('div');
  playerCarrier.setAttribute('id', 'player-carrier');
  playerCarrier.classList.add('ships');
  playerCarrier.addEventListener('click', () => {
    if (playerCarrier.classList.contains('active')) {
      playerCarrier.classList.remove('active');
      playerCarrier.classList.remove('used');
      setPiece = false;
      pieceLength = null;
    } else {
      let activeClass = document.getElementsByClassName('active');
      while (activeClass.length > 0) {
        activeClass[0].classList.remove('active');
      }
      playerCarrier.classList.add('active');
      //   playerCarrier.classList.add('used');
      setPiece = true;
      pieceLength = 5;
    }
  });
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
    if (playerBattleship.classList.contains('active')) {
      playerBattleship.classList.remove('active');
      playerBattleship.classList.remove('used');
      setPiece = false;
      pieceLength = null;
    } else {
      let activeClass = document.getElementsByClassName('active');
      while (activeClass.length > 0) {
        activeClass[0].classList.remove('active');
      }
      playerBattleship.classList.add('active');
      //   playerBattleship.classList.add('used');
      setPiece = true;
      pieceLength = 4;
    }
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
  playerCruiser.addEventListener('click', () => {
    if (playerCruiser.classList.contains('active')) {
      playerCruiser.classList.remove('active');
      playerCruiser.classList.remove('used');
      setPiece = false;
      pieceLength = null;
    } else {
      let activeClass = document.getElementsByClassName('active');
      while (activeClass.length > 0) {
        activeClass[0].classList.remove('active');
      }
      playerCruiser.classList.add('active');
      //   playerCruiser.classList.add('used');
      setPiece = true;
      pieceLength = 3;
    }
  });
  playerShips.appendChild(playerCruiser);

  for (let i = 0; i < 3; i++) {
    let piece = document.createElement('div');
    piece.classList.add('piece');
    playerCruiser.appendChild(piece);
  }

  let playerSubmarine = document.createElement('div');
  playerSubmarine.setAttribute('id', 'player-submarine');
  playerSubmarine.classList.add('ships');
  playerSubmarine.addEventListener('click', () => {
    if (playerSubmarine.classList.contains('active')) {
      playerSubmarine.classList.remove('active');
      playerSubmarine.classList.remove('used');
      setPiece = false;
      pieceLength = null;
    } else {
      let activeClass = document.getElementsByClassName('active');
      while (activeClass.length > 0) {
        activeClass[0].classList.remove('active');
      }
      playerSubmarine.classList.add('active');
      //   playerSubmarine.classList.add('used');
      setPiece = true;
      pieceLength = 3;
    }
  });
  playerShips.appendChild(playerSubmarine);

  for (let i = 0; i < 3; i++) {
    let piece = document.createElement('div');
    piece.classList.add('piece');
    playerSubmarine.appendChild(piece);
  }

  let playerDestroyer = document.createElement('div');
  playerDestroyer.setAttribute('id', 'player-destroyer');
  playerDestroyer.classList.add('ships');
  playerDestroyer.addEventListener('click', () => {
    if (playerDestroyer.classList.contains('active')) {
      playerDestroyer.classList.remove('active');
      playerDestroyer.classList.remove('used');
      setPiece = false;
      pieceLength = null;
    } else {
      let activeClass = document.getElementsByClassName('active');
      while (activeClass.length > 0) {
        activeClass[0].classList.remove('active');
      }
      playerDestroyer.classList.add('active');
      //   playerDestroyer.classList.add('used');
      setPiece = true;
      pieceLength = 2;
    }
  });
  playerShips.appendChild(playerDestroyer);

  for (let i = 0; i < 2; i++) {
    let piece = document.createElement('div');
    piece.classList.add('piece');
    playerDestroyer.appendChild(piece);
  }
}

export function createPCShips() {
  let computerShips = document.createElement('div');
  computerShips.setAttribute('id', 'computer-ships');
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
}

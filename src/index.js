import './style.css';

let content = document.getElementById('content');
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

console.log('hello');

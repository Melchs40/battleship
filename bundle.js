(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>s});var i=n(601),r=n.n(i),a=n(314),o=n.n(a)()(r());o.push([e.id,'body {\n  margin: 0;\n  font-family: "Share Tech Mono", monospace;\n  font-weight: 400;\n  font-style: normal;\n}\n\n.interface {\n  position: absolute;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n}\n\n.ui {\n  position: relative;\n  z-index: 1;\n  display: flex;\n}\n\n#title {\n  text-align: center;\n  font-size: 64px;\n  color: rgb(17, 102, 17);\n}\n\n.intro-container {\n  display: flex;\n  justify-content: center;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.pc-intro {\n  text-align: center;\n  font-size: 24px;\n  color: rgb(1, 16, 4);\n  background-color: rgb(17, 102, 17);\n  overflow: hidden; /* Ensures the content is not revealed until the animation */\n  border-right: 0.15em solid transparent; /* The typwriter cursor */\n  white-space: nowrap; /* Keeps the content on a single line */\n  margin: 0 auto; /* Gives that scrolling effect as the typing happens */\n  letter-spacing: 0.15em; /* Adjust as needed */\n  animation: blink-caret 0.75s step-end infinite;\n}\n\n.intro {\n  text-align: center;\n  font-size: 24px;\n  color: rgb(1, 16, 4);\n  background-color: rgb(17, 102, 17);\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  overflow: hidden; /* Ensures the content is not revealed until the animation */\n  border-right: 0.15em solid transparent; /* The typwriter cursor */\n  white-space: nowrap; /* Keeps the content on a single line */\n  margin: 0 auto; /* Gives that scrolling effect as the typing happens */\n  letter-spacing: 0.15em; /* Adjust as needed */\n  animation: typing 2s steps(30, end), blink-caret 0.75s step-end infinite;\n}\n\n@keyframes typing {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n@keyframes blink-caret {\n  from, to {\n    border-color: transparent;\n  }\n  50% {\n    border-right: 0.15em solid rgb(25, 150, 25);\n  }\n}\n#input-name {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  color: rgb(17, 102, 17);\n  border: none;\n  background-color: rgb(1, 16, 4);\n  font-family: "Share Tech Mono", monospace;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 24px;\n  width: 150px;\n  margin-left: 10px;\n}\n\n#start {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  color: rgb(17, 102, 17);\n  border: 1px solid rgb(17, 102, 17);\n  background-color: rgb(1, 16, 4);\n  font-family: "Share Tech Mono", monospace;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 24px;\n  margin-left: 10px;\n}\n\n#game-container {\n  padding-top: 10vh;\n  height: 600px;\n  width: 100vw;\n  display: flex;\n  justify-content: space-around;\n}\n\n.containers {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 496px;\n  width: 45%;\n}\n\n#game-button-box {\n  display: flex;\n  width: 150px;\n  position: relative;\n  justify-content: center;\n  align-self: end;\n  margin-bottom: 64px;\n}\n\n#game-button {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border: none;\n  color: rgb(17, 102, 17);\n  border: 1px solid rgb(17, 102, 17);\n  background-color: rgb(1, 16, 4);\n  font-family: "Share Tech Mono", monospace;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 24px;\n  height: 32px;\n}\n\n#computer-name,\n#player-name {\n  color: rgb(17, 102, 17);\n  font-size: 20px;\n}\n\n#computer-board,\n#player-board {\n  display: flex;\n  flex-wrap: wrap;\n  height: 320px;\n  width: 320px;\n  border: none;\n  background-color: rgb(1, 16, 4);\n}\n\n.square {\n  height: 32px;\n  width: 32px;\n  border: 1px solid rgb(17, 102, 17);\n  background-color: rgb(1, 16, 4);\n  color: rgb(17, 102, 17);\n}\n\n#player-ships,\n#computer-ships {\n  display: grid;\n  grid-template-columns: repeat(10, 32px);\n  grid-template-rows: 32px 32px;\n  margin-top: 32px;\n  background-color: rgb(1, 16, 4);\n  width: 320px;\n  height: 64px;\n}\n\n.ships {\n  border: 1px solid rgb(1, 16, 4);\n  background-color: rgb(17, 102, 17);\n}\n\n#player-carrier,\n#computer-carrier {\n  display: grid;\n  grid-template-columns: repeat(5, 32px);\n  grid-area: 1/1/2/6;\n}\n\n#player-battleship,\n#computer-battleship {\n  display: grid;\n  grid-template-columns: repeat(4, 32px);\n  grid-area: 1/7/2/11;\n}\n\n#player-cruiser,\n#computer-cruiser {\n  display: grid;\n  grid-template-columns: repeat(3, 32px);\n  grid-area: 2/1/3/4;\n}\n\n#player-submarine,\n#computer-submarine {\n  display: grid;\n  grid-template-columns: repeat(3, 32px);\n  grid-area: 2/5/3/8;\n}\n\n#player-destroyer,\n#computer-destroyer {\n  display: grid;\n  grid-template-columns: repeat(2, 32px);\n  grid-area: 2/9/3/11;\n}\n\n.piece {\n  border: 1px solid rgb(1, 16, 4);\n}\n\n.used {\n  background-color: rgb(2, 23, 7);\n}\n\n.active {\n  background-color: rgb(25, 150, 25);\n}\n\n.background {\n  position: absolute;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgb(1, 16, 4);\n  z-index: -1;\n}\n\n#first {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 60vh;\n  margin-top: 60px;\n  border: 3px dashed rgb(17, 102, 17);\n  aspect-ratio: 1/1;\n}\n\n#second {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50vh;\n  aspect-ratio: 1/1;\n  animation: pulse 8s linear infinite;\n}\n\n#third {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40vh;\n  aspect-ratio: 1/1;\n  animation: pulse 8s linear infinite;\n}\n\n#fourth {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 30vh;\n  aspect-ratio: 1/1;\n  animation: pulse 8s linear infinite;\n}\n\n#fifth {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 20vh;\n  aspect-ratio: 1/1;\n  animation: pulse 8s linear infinite;\n}\n\n.circle {\n  background-color: rgb(2, 23, 7);\n  border: 3px solid rgb(17, 102, 17);\n  border-radius: 50%;\n}\n\n#h-line {\n  position: absolute;\n  width: 3px;\n  height: 60vh;\n  background-color: rgb(17, 102, 17);\n  color: rgb(17, 102, 17);\n}\n\n#v-line {\n  position: absolute;\n  width: 60vh;\n  height: 3px;\n  background-color: rgb(17, 102, 17);\n  color: rgb(17, 102, 17);\n}\n\n#move-line {\n  position: absolute;\n  width: 3px;\n  height: 30vh;\n  background-color: rgb(17, 102, 17);\n  z-index: 2;\n  bottom: calc(50% - 30px);\n  left: calc(50% + 0px);\n  transform-origin: bottom center;\n  animation: spin 8s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes pulse {\n  0% {\n    border-width: 3px;\n    border-color: rgb(17, 102, 17);\n  }\n  5% {\n    border-width: 5px;\n    border-color: rgb(19, 115, 19);\n  }\n  10% {\n    border-width: 3px;\n    border-color: rgb(17, 102, 17);\n  }\n  25% {\n    border-width: 3px;\n    border-color: rgb(17, 102, 17);\n  }\n  30% {\n    border-width: 5px;\n    border-color: rgb(19, 115, 19);\n  }\n  35% {\n    border-width: 3px;\n    border-color: rgb(17, 102, 17);\n  }\n  50% {\n    border-width: 3px;\n    border-color: rgb(17, 102, 17);\n  }\n  55% {\n    border-width: 5px;\n    border-color: rgb(19, 115, 19);\n  }\n  60% {\n    border-width: 3px;\n    border-color: rgb(17, 102, 17);\n  }\n  75% {\n    border-width: 3px;\n    border-color: rgb(17, 102, 17);\n  }\n  80% {\n    border-width: 5px;\n    border-color: rgb(19, 115, 19);\n  }\n  85% {\n    border-width: 3px;\n    border-color: rgb(17, 102, 17);\n  }\n}\n#miss {\n  color: rgb(17, 102, 17);\n  font-family: "Share Tech Mono", monospace;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 20px;\n}\n\n#hit {\n  background-color: rgb(2, 23, 7);\n  color: rgb(17, 102, 17);\n  font-family: "Share Tech Mono", monospace;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 20px;\n}\n\n#pc-win {\n  position: absolute;\n  display: none;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  z-index: 5;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border: 1px solid rgb(17, 102, 17);\n  background-color: rgb(1, 16, 4);\n  width: 800px;\n  height: 200px;\n}\n\n#pc-win-text,\n#pc-win-button {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  color: rgb(17, 102, 17);\n  font-family: "Share Tech Mono", monospace;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 24px;\n}\n\n#pc-win-button {\n  border: 1px solid rgb(17, 102, 17);\n  padding: 5px;\n}',""]);const s=o},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(i)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(o[l]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);i&&o[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),t.push(c))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var a={},o=[],s=0;s<e.length;s++){var l=e[s],d=i.base?l[0]+i.base:l[0],c=a[d]||0,p="".concat(d," ").concat(c);a[d]=c+1;var h=n(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)t[h].references++,t[h].updater(m);else{var u=r(m,i);i.byIndex=s,t.splice(s,0,{identifier:p,updater:u,references:1})}o.push(p)}return o}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=i(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var s=n(a[o]);t[s].references--}for(var l=i(e,r),d=0;d<a.length;d++){var c=n(a[d]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=l}}},659:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,r&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={id:i,exports:{}};return e[i](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var i={};(()=>{n.d(i,{lZ:()=>$,Zc:()=>w,Nf:()=>I,px:()=>M});var e=n(72),t=n.n(e),r=n(825),a=n.n(r),o=n(659),s=n.n(o),l=n(56),d=n.n(l),c=n(540),p=n.n(c),h=n(113),m=n.n(h),u=n(208),f={};f.styleTagTransform=m(),f.setAttributes=d(),f.insert=s().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=p(),t()(u.A,f),u.A&&u.A.locals&&u.A.locals;class g{constructor(e){this.length=e,this.hits=0,this.sunk=!1}hit(){return this.hits++,this.hits}isSunk(){return this.length==this.hits&&(this.sunk=!0),this.sunk}}class b{constructor(){this.board=null,this.lastMove=null}createBoard(){let e=[],t=0;for(let n=1;n<=10;n++)for(let i=1;i<=10;i++)e.push([n,i,"empty",t++]);this.board=e}placeShip(e,t,n,i){let r=new g(n),a=this.board,o=[];if(1==i&&t+n>=1&&t+n<=11){for(let n=t;n<t+r.length;n++)for(let t=0;t<a.length;t++)if(e==a[t][0]&&n==a[t][1]&&"empty"==a[t][2])o.push(r);else if(e==a[t][0]&&n==a[t][1]&&"empty"!==a[t][2])return o=[],"A ship has already been placed here, Captain!";for(let n=t;n<t+r.length;n++)for(let t=0;t<a.length;t++)o.length==r.length&&e==a[t][0]&&n==a[t][1]&&(a[t][2]=r)}else{if(!(0==i&&e+n>=1&&e+n<=11))return"The whole ship must be on the board, Captain!";for(let n=e;n<e+r.length;n++)for(let e=0;e<a.length;e++)if(n==a[e][0]&&t==a[e][1]&&"empty"==a[e][2])o.push(r);else if(n==a[e][0]&&t==a[e][1]&&"empty"!==a[e][2])return o=[],"A ship has already been placed here, Captain!";for(let n=e;n<e+r.length;n++)for(let e=0;e<a.length;e++)o.length==r.length&&n==a[e][0]&&t==a[e][1]&&(a[e][2]=r)}this.lastMove=[e,t,n,i]}receiveAttack(e,t){let n=this.board;if(e<0||e>10||t<0||t>10)return"Cannot fire here, captain!";console.log([e,t]);for(let i=0;i<n.length;i++){if(e==n[i][0]&&t==n[i][1]&&"empty"==n[i][2]){n[i][2]="miss";let e=[];return e.push("I do believe you missed their ships, sir."),e.push("Miss. We must be getting close to one, Captain."),e.push("Captain, we can't afford to keep missing like this."),e.push("We've missed. Where must their ships be?"),["miss",e[Math.floor(Math.random()*e.length)]]}if(e==n[i][0]&&t==n[i][1]&&("hit"==n[i][2]||"miss"==n[i][2]))return"Cannot fire here, captain!";if(e==n[i][0]&&t==n[i][1]){n[i][2].hit(),n[i][2].isSunk();let e=[];for(let t=0;t<n.length;t++)"object"==typeof n[t][2]&&e.push("ship");if(1==e.length){n[i][2]="hit",e=[];let t=[];t.push("You've sunk their last ship, Captain! The war is over!"),t.push("That's their last one, we can finally go home!"),t.push("They're waving the white flag, sir. Victory!"),t.push("We'll be remembered forever as heroes, Captain!");let r=[];return r.push("Our last ship is sunk. Captain, it's been an honor."),r.push("Oh no! That was our last ship, captain!"),r.push("We fought to the bitter end."),r.push("We must abandon ship, we've lost the battle."),["hit",t[Math.floor(Math.random()*t.length)],r[Math.floor(Math.random()*r.length)],t[Math.floor(Math.random()*t.length)]]}if(1==n[i][2].sunk){n[i][2]="hit";let e=[];return e.push("More of those and this war will be done in no time!"),e.push("Captain, you've sunk one of their ships!"),e.push("Their ship appears to be sunk, sir."),e.push("This will turn the tide of battle, lets sink another."),["hit",e[Math.floor(Math.random()*e.length)]]}n[i][2]="hit";let t=[];return t.push("I say you've gotten a hit, Captain!"),t.push("Brilliant shot! Let's hit them again!"),t.push("A hit, we've got them on their heels now."),t.push("Bloody good hit. They must be reeling."),["hit",t[Math.floor(Math.random()*t.length)]]}}}}class v{constructor(e){this.name=`Captain ${e}`,this.game="",this.board=""}sayName(){return this.name}startGame(){this.game=new b,this.game.createBoard(),this.board=this.game.board}takeTurn(){let e=[];for(let t=0;t<this.game.board.length;t++)"empty"!=this.game.board[t][2]&&"object"!=typeof this.game.board[t][2]||e.push(this.board[t]);let t=Math.floor(Math.random()*e.length);return[this.game.receiveAttack(e[t][0],e[t][1]),e[t][3]]}}function y(){let e=document.createElement("div");e.setAttribute("id","player-ships"),I.appendChild(e);let t=document.createElement("div");t.setAttribute("id","player-carrier"),t.classList.add("ships"),t.addEventListener("click",(()=>{if(t.classList.contains("active"))t.classList.remove("active"),t.classList.remove("used"),M=!1,w=null;else{let e=document.getElementsByClassName("active");for(;e.length>0;)e[0].classList.remove("active");t.classList.add("active"),M=!0,w=5}})),e.appendChild(t);for(let e=0;e<5;e++){let e=document.createElement("div");e.classList.add("piece"),t.appendChild(e)}let n=document.createElement("div");n.setAttribute("id","player-battleship"),n.classList.add("ships"),n.addEventListener("click",(()=>{if(n.classList.contains("active"))n.classList.remove("active"),n.classList.remove("used"),M=!1,w=null;else{let e=document.getElementsByClassName("active");for(;e.length>0;)e[0].classList.remove("active");n.classList.add("active"),M=!0,w=4}})),e.appendChild(n);for(let e=0;e<4;e++){let e=document.createElement("div");e.classList.add("piece"),n.appendChild(e)}let i=document.createElement("div");i.setAttribute("id","player-cruiser"),i.classList.add("ships"),i.addEventListener("click",(()=>{if(i.classList.contains("active"))i.classList.remove("active"),i.classList.remove("used"),M=!1,w=null;else{let e=document.getElementsByClassName("active");for(;e.length>0;)e[0].classList.remove("active");i.classList.add("active"),M=!0,w=3}})),e.appendChild(i);for(let e=0;e<3;e++){let e=document.createElement("div");e.classList.add("piece"),i.appendChild(e)}let r=document.createElement("div");r.setAttribute("id","player-submarine"),r.classList.add("ships"),r.addEventListener("click",(()=>{if(r.classList.contains("active"))r.classList.remove("active"),r.classList.remove("used"),M=!1,w=null;else{let e=document.getElementsByClassName("active");for(;e.length>0;)e[0].classList.remove("active");r.classList.add("active"),M=!0,w=3}})),e.appendChild(r);for(let e=0;e<3;e++){let e=document.createElement("div");e.classList.add("piece"),r.appendChild(e)}let a=document.createElement("div");a.setAttribute("id","player-destroyer"),a.classList.add("ships"),a.addEventListener("click",(()=>{if(a.classList.contains("active"))a.classList.remove("active"),a.classList.remove("used"),M=!1,w=null;else{let e=document.getElementsByClassName("active");for(;e.length>0;)e[0].classList.remove("active");a.classList.add("active"),M=!0,w=2}})),e.appendChild(a);for(let e=0;e<2;e++){let e=document.createElement("div");e.classList.add("piece"),a.appendChild(e)}}let x=document.getElementById("content"),L=!1,C="",E="",w=0,M=!1,A=!0,k="",T=document.createElement("div");T.classList.add("interface");let H=document.createElement("header");H.innerHTML="Battleship",H.setAttribute("id","title");let B=document.createElement("div");B.classList.add("intro-container");let z=document.createElement("div");z.innerHTML="Welcome to the war. What is your name, Captain?",z.classList.add("intro");let S=document.createElement("input");S.type="text",S.setAttribute("id","input-name"),z.appendChild(S);let j=document.createElement("button");j.setAttribute("id","start"),j.innerHTML="START",z.appendChild(j),j.addEventListener("click",(function(){z.classList.remove("intro");let e=new v(S.value);e.startGame(),W.innerHTML=`Captain ${S.value}`,I.style.display="flex",G();let t=new v("Admiral von Eval");t.startGame(),O.style.display="flex",$.style.display="flex",K(),console.log(e.board),C=e,E=t,z.innerHTML="Place your ships on the grid to the left",z.classList.add("intro")}));let N=document.createElement("div");N.setAttribute("id","game-container");let I=document.createElement("div");I.setAttribute("id","player-container"),I.style.display="none",I.classList.add("containers");let W=document.createElement("div");W.setAttribute("id","player-name"),I.appendChild(W);let q=document.createElement("div");function G(){let e=0;for(let t=0;t<100;t++){let n=document.createElement("button");n.classList.add("square"),n.classList.add("player-square"),n.setAttribute("id",t),n.addEventListener("click",(function(){if(z.classList.remove("intro"),z.offsetWidth,z.classList.add("intro"),1==M&&n.id==C.game.board[n.id][3])if(z.innerHTML=C.game.placeShip(C.game.board[n.id][0],C.game.board[n.id][1],w,A),-1!==z.innerHTML.indexOf("whole")||-1!==z.innerHTML.indexOf("placed"));else{function t(){if(0==Math.floor(2*Math.random())){let e=E.game.placeShip(Math.floor(10*Math.random())+1,Math.floor(Math.random()*(11-w))+1,w,!0);if(console.log(E.game.lastMove),"A ship has already been placed here, Captain!"==e)return console.log("repeat"),t()}else{let e=E.game.placeShip(Math.floor(Math.random()*(11-w))+1,Math.floor(10*Math.random())+1,w,!1);if(console.log(E.game.lastMove),"A ship has already been placed here, Captain!"==e)return console.log("repeat"),t()}}t(),console.log(E.game.board);let i=document.getElementsByClassName("active");for(;i.length>0;){let r=i[0].cloneNode(!0);i[0].parentNode.replaceChild(r,i[0]),r.classList.add("used"),i[0].classList.remove("active"),e++}if(e<5)z.innerHTML="Place your ships on the grid to the left";else{let a=O.cloneNode(!0);O.parentNode.replaceChild(a,O),a.innerHTML="Begin",a.setAttribute("id","game-button"),z.innerHTML="Press the button to begin your offensive.",k=a,a.addEventListener("click",(()=>{z.classList.remove("intro"),z.offsetWidth,z.innerHTML="I wish you good luck, sir. Fire away!",a.style.display="none",z.classList.add("intro");let e=document.getElementsByClassName("computer-square"),t=document.getElementsByClassName("player-square");for(let n=0;n<e.length;n++)e[n].disabled=!1,t[n].disabled=!0}))}}})),q.appendChild(n)}}q.setAttribute("id","player-board"),I.appendChild(q),y(),1==L&&(console.log(C.takeTurn()),L=!1);let P=document.createElement("div");P.setAttribute("id","game-button-box");let O=document.createElement("button");O.innerHTML="Horizontal",O.addEventListener("click",(()=>{"Horizontal"==O.innerHTML?(O.innerHTML="Vertical",A=!1):(O.innerHTML="Horizontal",A=!0)})),O.setAttribute("id","game-button"),O.style.display="none";let $=document.createElement("div");$.setAttribute("id","computer-container"),$.style.display="none",$.classList.add("containers");let F=document.createElement("div");F.setAttribute("id","computer-name"),F.innerHTML="Admiral Wicked von Eval",$.appendChild(F);let R=document.createElement("div");function K(){for(let e=0;e<100;e++){let t=document.createElement("button");t.classList.add("square"),t.classList.add("computer-square"),t.setAttribute("id","computer-"+e),t.disabled=!0,t.addEventListener("click",(function(){let n=E.game.receiveAttack(E.game.board[e][0],E.game.board[e][1]);if(4==n.length){let e=document.createElement("div");e.setAttribute("id","pc-win"),e.style.display="flex";let t=document.createElement("div");t.setAttribute("id","pc-win-text"),t.innerHTML=n[3];let i=document.createElement("div");i.setAttribute("id","pc-win-button"),i.innerHTML="Try Again?",i.addEventListener("click",(function(){let t=document.getElementById("player-board"),n=document.getElementById("computer-board"),i=document.getElementById("player-ships"),r=document.getElementById("game-button-box");for(;t.children.length>0;)t.removeChild(t.firstChild),n.removeChild(n.firstChild);for(;i.children.length>0;)i.removeChild(i.firstChild);for(;r.children.length>0;)r.removeChild(r.firstChild);I.removeChild(i),C.startGame(),G(),E.startGame(),K(),y(),r.appendChild(O),z.innerHTML="Place your ships on the grid to the left",z.classList.add("intro"),e.style.display="none"})),T.appendChild(e),e.appendChild(t),e.appendChild(i)}z.innerHTML=n[1],z.classList.remove("intro"),z.offsetWidth,z.classList.remove("pc-intro"),z.classList.add("intro"),t.id="miss","hit"==E.game.board[e][2]?(t.innerHTML="X",t.id="hit"):t.innerHTML="-";let i=document.getElementsByClassName("computer-square");for(let e=0;e<i.length;e++)i[e].disabled=!0;setTimeout((()=>{let[e,t]=C.takeTurn();console.log(`first- ${e}`),console.log(`second- ${t}`);let n=document.getElementById("player-board").children,i=Array.from(n);if(i[t].id="miss","hit"==e[0]){if(i[t].innerHTML="X",i[t].id="hit",4==e.length){let t=document.createElement("div");t.setAttribute("id","pc-win"),t.style.display="flex";let n=document.createElement("div");n.setAttribute("id","pc-win-text"),n.innerHTML=e[2];let i=document.createElement("div");i.setAttribute("id","pc-win-button"),i.innerHTML="Try Again?",i.addEventListener("click",(function(){let e=document.getElementById("player-board"),n=document.getElementById("computer-board"),i=document.getElementById("player-ships"),r=document.getElementById("game-button-box");for(;e.children.length>0;)e.removeChild(e.firstChild),n.removeChild(n.firstChild);for(;i.children.length>0;)i.removeChild(i.firstChild);for(;r.children.length>0;)r.removeChild(r.firstChild);I.removeChild(i),C.startGame(),G(),E.startGame(),K(),y(),r.appendChild(O),z.innerHTML="Place your ships on the grid to the left",z.classList.add("intro"),t.style.display="none"})),T.appendChild(t),t.appendChild(n),t.appendChild(i)}}else i[t].innerHTML="-";let r=document.getElementsByClassName("computer-square");for(let e=0;e<r.length;e++)r[e].disabled=!1;z.classList.add("pc-intro"),z.classList.remove("intro")}),1)})),R.appendChild(t)}}R.setAttribute("id","computer-board"),$.appendChild(R),function(){let e=document.createElement("div");e.setAttribute("id","computer-ships"),$.appendChild(e);let t=document.createElement("div");t.setAttribute("id","computer-carrier"),t.classList.add("ships"),e.appendChild(t);for(let e=0;e<5;e++){let e=document.createElement("div");e.classList.add("piece"),t.appendChild(e)}let n=document.createElement("div");n.setAttribute("id","computer-battleship"),n.classList.add("ships"),e.appendChild(n);for(let e=0;e<4;e++){let e=document.createElement("div");e.classList.add("piece"),n.appendChild(e)}let i=document.createElement("div");i.setAttribute("id","computer-cruiser"),i.classList.add("ships"),e.appendChild(i);for(let e=0;e<3;e++){let e=document.createElement("div");e.classList.add("piece"),i.appendChild(e)}let r=document.createElement("div");r.setAttribute("id","computer-submarine"),r.classList.add("ships"),e.appendChild(r);for(let e=0;e<3;e++){let e=document.createElement("div");e.classList.add("piece"),r.appendChild(e)}let a=document.createElement("div");a.setAttribute("id","computer-destroyer"),a.classList.add("ships"),e.appendChild(a);for(let e=0;e<2;e++){let e=document.createElement("div");e.classList.add("piece"),a.appendChild(e)}}(),x.appendChild(T),T.appendChild(H),T.appendChild(B),B.appendChild(z),T.appendChild(N),N.appendChild(I),N.appendChild(P),N.appendChild($),P.appendChild(O);let U=document.createElement("div");U.classList.add("background");let V=document.createElement("div");V.classList.add("circle"),V.setAttribute("id","first");let X=document.createElement("div");X.classList.add("circle"),X.setAttribute("id","second");let Z=document.createElement("div");Z.classList.add("circle"),Z.setAttribute("id","third");let _=document.createElement("div");_.classList.add("circle"),_.setAttribute("id","fourth");let D=document.createElement("div");D.classList.add("circle"),D.setAttribute("id","fifth");let J=document.createElement("div");J.setAttribute("id","v-line");let Y=document.createElement("div");Y.setAttribute("id","h-line");let Q=document.createElement("div");Q.setAttribute("id","move-line"),x.appendChild(U),U.appendChild(V),V.appendChild(X),X.appendChild(Z),Z.appendChild(_),_.appendChild(D),V.appendChild(J),V.appendChild(Y),V.appendChild(Q)})()})();
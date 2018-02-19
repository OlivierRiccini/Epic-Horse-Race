const horse1 = document.getElementById('1');
const horse2 = document.getElementById('2');
const horse3 = document.getElementById('3');
const horse4 = document.getElementById('4');
const horse5 = document.getElementById('5');
const horse6 = document.getElementById('6');

const finish1 = document.getElementById('dada1Final');
const finish2 = document.getElementById('dada2Final');
const finish3 = document.getElementById('dada3Final');
const finish4 = document.getElementById('dada4Final');
const finish5 = document.getElementById('dada5Final');
const finish6 = document.getElementById('dada6Final');

const bet1 = document.getElementById('bet1');
const bet2 = document.getElementById('bet2');
const bet3 = document.getElementById('bet3');
const bet4 = document.getElementById('bet4');
const bet5 = document.getElementById('bet5');
const bet6 = document.getElementById('bet6');

const track = document.getElementById('track');
const buttonGo = document.getElementById('btn');
const btnReload = document.getElementById('btn-reload');
const popup = document.getElementById('popup');
const clock = document.getElementById('clock');
const yourAccount = document.getElementById('account');
const finalPositions = document.querySelectorAll('.final');
const betList = document.getElementById('betList');

const beep = new Audio('sounds/beep.mp3');
const horse = new Audio('sounds/horse.mp3');
const gameOver = new Audio('sounds/gameOver.mp3');
const epic = new Audio('sounds/epic.mp3');
epic.volume = 0.2;

let position = 0;
let position2 = 0;
let position3 = 0;
let position4 = 0;
let position5 = 0;
let position6 = 0;

let finishRanking = 0;

let account = 1000;

function finish() {
  finishRanking += 1;
  return finishRanking;
}

function move() {
  let pace = Math.floor(Math.random() * 10);
  if (position >= window.innerWidth - horse1.width - (window.innerWidth*5/100)) {
    clearInterval(interval);
    let lastPosition = finish();
    finish1.innerText = `Final ${lastPosition}`;
    if (lastPosition === 1) {
      account += Number(bet1.value) * 5;
      yourAccount.innerText = `Balance: $${account}`;
    } else if (lastPosition === 6) {
      endPopu();
    }
  }
  position += pace;
  horse1.style.left = `${position}px`;
}

function move2() {
  let pace = Math.floor(Math.random() * 10);
  if (position2 >= window.innerWidth - horse1.width - (window.innerWidth*5/100)) {
    clearInterval(interval2);
    let lastPosition = finish();
    finish2.innerText = `Final ${lastPosition}`;
    if (lastPosition === 1) {
      account += Number(bet2.value) * 5;
      yourAccount.innerText = `Balance: $${account}`;
    } else if (lastPosition === 6) {
      endPopu();
    }
  }
  position2 += pace;
  horse2.style.left = `${position2}px`;
}

function move3() {
  let pace = Math.floor(Math.random() * 10);
  if (position3 >= window.innerWidth - horse1.width - (window.innerWidth*5/100)) {
    clearInterval(interval3);
    let lastPosition = finish();
    finish3.innerText = `Final ${lastPosition}`;
    if (lastPosition === 1) {
      account += Number(bet3.value) * 5;
      yourAccount.innerText = `Balance: $${account}`;
    } else if (lastPosition === 6) {
      endPopu();
    }
  }
  position3 += pace;
  horse3.style.left = `${position3}px`;
}

function move4() {
  let pace = Math.floor(Math.random() * 10);
  if (position4 >= window.innerWidth - horse1.width - (window.innerWidth*5/100)) {
    clearInterval(interval4);
    let lastPosition = finish();
    finish4.innerText = `Final ${lastPosition}`;
    if (lastPosition=== 1) {
      account += Number(bet4.value) * 5;
      yourAccount.innerText = `Balance: $${account}`;
    } else if (lastPosition === 6) {
      endPopu();
    }
  }
  position4 += pace;
  horse4.style.left = `${position4}px`;
}

function move5() {
  let pace = Math.floor(Math.random() * 10);
  if (position5 >= window.innerWidth - horse1.width - (window.innerWidth*5/100)) {
    clearInterval(interval5);
    let lastPosition = finish();
    finish5.innerText = `Final ${lastPosition}`;
    if (lastPosition === 1) {
      account += Number(bet5.value) * 5;
      yourAccount.innerText = `Balance: $${account}`;
    } else if (lastPosition === 6) {
      endPopu();
    }
  }
  position5 += pace;
  horse5.style.left = `${position5}px`;
}

function move6() {
  let pace = Math.floor(Math.random() * 10);
  if (position6 >= window.innerWidth - horse1.width - (window.innerWidth*5/100)) {
    clearInterval(interval6);
    let lastPosition = finish();
    finish6.innerText = `Final ${lastPosition}`;
    if (lastPosition === 1) {
      account += Number(bet6.value) * 5;
      yourAccount.innerText = `Balance: $${account}`;
    } else if (lastPosition === 6) {
      endPopu();
    }
  }
  position6 += pace;
  horse6.style.left = `${position6}px`;
}

let interval = null;
let interval2 = null;
let interval3 = null;
let interval4 = null;
let interval5 = null;
let interval6 = null;
let rebourInterval = null;

let seconds = 6;

function rebour() {
  beep.play();
  seconds -= 1;
  clock.innerText = seconds;
  if(seconds === 0) {
    clearInterval(rebourInterval);
    seconds = 6;
    clock.style.display = 'none';
  }
}

function go() {
  account -= Number(bet1.value);
  account -= Number(bet2.value);
  account -= Number(bet3.value);
  account -= Number(bet4.value);
  account -= Number(bet5.value);
  account -= Number(bet6.value);
  yourAccount.innerText = `Balance: $${account}`;
  popup.style.display = 'none';
  startingBlocks();
  rebourInterval = setInterval(rebour, 1000);
  epic.play();
}

function startingBlocks() {
  setTimeout(run, 6000);
}


function run() {
  horse.play();
  interval = setInterval(move, 50);
  interval2 = setInterval(move2, 50);
  interval3 = setInterval(move3, 50);
  interval4 = setInterval(move4, 50);
  interval5 = setInterval(move5, 50);
  interval6 = setInterval(move6, 50);
}

function goKey(event) {
  if (event.keyCode === 13) {
    go();
  }
}

function endPopu() {
  popup.style.display = 'block';
  const popupTitle = document.querySelector('#popup h2');
  const popupSubTitle = document.querySelector('#popup h3');
  popupTitle.innerText = 'Bet Again!';
  popupSubTitle.innerText = `Your balance is now $${account}!`
  buttonGo.innerText = 'NEW RACE!';
  if (account <= 0) {
    gameOver.play();
    popupTitle.innerText = 'OOOOOPPSSS!';
    popupSubTitle.innerText = `Your balance is now $${account}! Your problem...`
    buttonGo.style.display = 'none';
    betList.innerHTML = `<img id="capy" src="images/capy.jpg" alt="angry-capy"/>
                         <h2 class="btn-style" id="btn-reload" onClick="reload()">YOU BETTER RUN NOW!</h2>`;
  }
}

function initialize(event) {
  if (event.type === 'click' || event.keyCode === 13) {
    position = 0;
    position2 = 0;
    position3 = 0;
    position4 = 0;
    position5 = 0;
    position6 = 0;
    horse1.style.left = `${position5}px`;
    horse2.style.left = `${position5}px`;
    horse3.style.left = `${position5}px`;
    horse4.style.left = `${position5}px`;
    horse5.style.left = `${position5}px`;
    horse6.style.left = `${position5}px`;
    finish1.innerText = '';
    finish2.innerText = '';
    finish3.innerText = '';
    finish4.innerText = '';
    finish5.innerText = '';
    finish6.innerText = '';
    finishRanking = 0;
    clock.style.display = 'block';
  }
}

function reload() {
  if (event.type === 'click' || event.keyCode === 13) {
    window.location.reload();
  }
}

buttonGo.addEventListener('click', initialize);
document.addEventListener('keydown', initialize);
buttonGo.addEventListener('click', go);
document.addEventListener('keydown', goKey);







const horse1 = document.getElementById('1');
const horse2 = document.getElementById('2');
const horse3 = document.getElementById('3');
const horse4 = document.getElementById('4');
const horse5 = document.getElementById('5');
const horse6 = document.getElementById('6');

const finish1 = document.getElementById('dada1');
const finish2 = document.getElementById('dada2');
const finish3 = document.getElementById('dada3');
const finish4 = document.getElementById('dada4');
const finish5 = document.getElementById('dada5');
const finish6 = document.getElementById('dada6');

const bet1 = document.getElementById('bet1');
const bet2 = document.getElementById('bet2');
const bet3 = document.getElementById('bet3');
const bet4 = document.getElementById('bet4');
const bet5 = document.getElementById('bet5');
const bet6 = document.getElementById('bet6');

const buttonGo = document.getElementById('btn');
const popup = document.getElementById('popup');
const clock = document.getElementById('clock');
const yourAccount = document.getElementById('account');

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
  let pace = Math.floor(Math.random()*10);
  if (position > window.innerWidth - 120) {
    clearInterval(interval);
    let lastPosition = finish();
    finish1.insertAdjacentHTML('afterbegin', `<h1 class="final">Final ${lastPosition}</h1>`);
    if (lastPosition === 1) {
      account += Number(bet1.value) * 6;
      yourAccount.innerText = `Your Account: $${account}`;
    }
  }
  position += pace;
  horse1.style.left = `${position}px`;
}

function move2() {
  let pace = Math.floor(Math.random()*10);
  if (position2 > window.innerWidth - 120) {
    clearInterval(interval2);
    let lastPosition = finish();
    finish2.insertAdjacentHTML('afterbegin', `<h1 class="final">Final ${lastPosition}</h1>`);
    if (lastPosition === 1) {
      account += Number(bet2.value) * 6;
      yourAccount.innerText = `Your Account: $${account}`;
    }
  }
  position2 += pace;
  horse2.style.left = `${position2}px`;
}

function move3() {
  let pace = Math.floor(Math.random()*10);
  if (position3 > window.innerWidth - 120) {
    clearInterval(interval3);
    let lastPosition = finish();
    finish3.insertAdjacentHTML('afterbegin', `<h1 class="final">Final ${lastPosition}</h1>`);
    if (lastPosition === 1) {
      account += Number(bet3.value) * 6;
      yourAccount.innerText = `Your Account: $${account}`;
    }
  }
  position3 += pace;
  horse3.style.left = `${position3}px`;
}

function move4() {
  let pace = Math.floor(Math.random()*10);
  if (position4 > window.innerWidth - 120) {
    clearInterval(interval4);
    let lastPosition = finish();
    finish4.insertAdjacentHTML('afterbegin', `<h1 class="final">Final ${lastPosition}</h1>`);
    if (lastPosition=== 1) {
      account += Number(bet4.value) * 6;
      yourAccount.innerText = `Your Account: $${account}`;
    }
  }
  position4 += pace;
  horse4.style.left = `${position4}px`;
}

function move5() {
  let pace = Math.floor(Math.random()*10);
  if (position5 > window.innerWidth - 120) {
    clearInterval(interval5);
    let lastPosition = finish()
    finish5.insertAdjacentHTML('afterbegin', `<h1 class="final">Final ${lastPosition}</h1>`);
    if (lastPosition === 1) {
      account += Number(bet5.value) * 6;
      yourAccount.innerText = `Your Account: $${account}`;
    }
  }
  position5 += pace;
  horse5.style.left = `${position5}px`;
}

function move6() {
  let pace = Math.floor(Math.random()*10);
  if (position6 > window.innerWidth - 120) {
    clearInterval(interval6);
    let lastPosition = finish()
    finish6.insertAdjacentHTML('afterbegin', `<h1 class="final">Final ${lastPosition}</h1>`);
    if (lastPosition === 1) {
      account += Number(bet6.value) * 6;
      yourAccount.innerText = `Your Account: $${account}`;
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
  seconds -= 1;
  clock.innerText = seconds;
  if(seconds < 0) {
    clearInterval(rebourInterval);
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
  yourAccount.innerText = `Your Account: $${account}`;
  popup.style.display = 'none';
  startingBlocks();
  rebourInterval = setInterval(rebour, 1000);
}

function startingBlocks() {
  setTimeout(run, 6000);
}

function run() {
  interval = setInterval(move, 50);
  interval2 = setInterval(move2, 50);
  interval3 = setInterval(move3, 50);
  interval4 = setInterval(move4, 50);
  interval5 = setInterval(move5, 50);
  interval6 = setInterval(move6, 50);
}

buttonGo.addEventListener('click', go);




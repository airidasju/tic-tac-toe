let arr123 = [];
let arr159 = [];
let arr147 = [];
let arr258 = [];
let arr357 = [];
let arr369 = [];
let arr456 = [];
let arr789 = [];

let value;
let winner = '';
let ticTac = document.getElementById('tic-tac');

let xo;
let colorOfSymbol;

const playerOne = document.getElementById('player-one');
const playerTwo = document.getElementById('player-two');

let player1 = true;
playerOne.classList.add('border-solid', 'border-8', 'border-slate-200');

const resetBtn = document.getElementById('reset');

const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');

const boardButtons = document.querySelectorAll('button.bg-stone-300');

function changePlayer() {
  if (player1) {
    xo = 'O';
    playerOne.classList.add('border-solid', 'border-8', 'border-slate-200');
    playerTwo.classList.remove('border-solid', 'border-8', 'border-slate-200');
    player1 = false;
  } else {
    xo = 'X';
    playerTwo.classList.add('border-solid', 'border-8', 'border-slate-200');
    playerOne.classList.remove('border-solid', 'border-8', 'border-slate-200');
    player1 = true;
  }
  return xo;
}

function symbolColor() {
  if (!player1) {
    colorOfSymbol = 'text-teal-500';
  } else {
    colorOfSymbol = 'text-amber-500';
  }
  return colorOfSymbol;
}

function addBorder(numOne, numTwo, numThree) {
  numOne.classList.add('border-solid', 'border-8', winningColour);
  numTwo.classList.add('border-solid', 'border-8', winningColour);
  numThree.classList.add('border-solid', 'border-8', winningColour);
}

resetBtn.addEventListener('click', function () {
  resetBtn.classList.add('collapse');
  arr123 = [];
  arr159 = [];
  arr147 = [];
  arr258 = [];
  arr357 = [];
  arr369 = [];
  arr456 = [];
  arr789 = [];
  boardButtons.forEach((elem) => {
    elem.disabled = false;
    elem.textContent = '';
    elem.classList.remove('border-solid', 'border-8', winningColour);
    elem.classList.remove('text-amber-500', 'text-teal-500');
  });
  playerTwo.classList.remove('border-solid', 'border-8', 'border-slate-200');
  playerOne.classList.add('border-solid', 'border-8', 'border-slate-200');
  winner = '';
  player1 = true;
  ticTac.textContent = 'Tic-Tac-Toe';
});

const buttonGroup = document.getElementById('board');
const allEqual = (arr) => arr.every((val) => val === arr[0]);

function checkArray(arr) {
  arr.length = arr.length < 3 ? arr.length : 3;
  arr.push(event.target.textContent);
  if (allEqual(arr) && arr.length == 3) {
    if (arr123[0] == 'O') {
      winner = 'Player One has won';
      winningColour = 'border-teal-500';
    } else if (arr123[0] == 'X') {
      winner = 'Player Two has won';
      winningColour = 'border-amber-500';
    }
  }
}

buttonGroup.addEventListener('click', function (event) {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
  value = event.target.value;
  switch (value) {
    case '1':
      event.target.textContent = changePlayer();
      event.target.disabled = true;
      event.target.classList.add(symbolColor());
      checkArray(arr123);
      checkArray(arr147);
      checkArray(arr159);
      break;
    case '2':
      event.target.textContent = changePlayer();
      event.target.disabled = true;
      event.target.classList.add(symbolColor());
      checkArray(arr123);
      checkArray(arr258);
      break;
    case '3':
      event.target.textContent = changePlayer();
      event.target.disabled = true;
      event.target.classList.add(symbolColor());
      checkArray(arr123);
      checkArray(arr357);
      checkArray(arr369);
      break;
    case '4':
      event.target.textContent = changePlayer();
      event.target.disabled = true;
      event.target.classList.add(symbolColor());
      checkArray(arr147);
      checkArray(arr456);
      break;
    case '5':
      event.target.textContent = changePlayer();
      event.target.disabled = true;
      event.target.classList.add(symbolColor());
      checkArray(arr159);
      checkArray(arr258);
      checkArray(arr357);
      checkArray(arr456);
      break;
    case '6':
      event.target.textContent = changePlayer();
      event.target.disabled = true;
      event.target.classList.add(symbolColor());
      checkArray(arr369);
      checkArray(arr456);
      break;
    case '7':
      event.target.textContent = changePlayer();
      event.target.disabled = true;
      event.target.classList.add(symbolColor());
      checkArray(arr147);
      checkArray(arr357);
      checkArray(arr789);
      break;
    case '8':
      event.target.textContent = changePlayer();
      event.target.disabled = true;
      event.target.classList.add(symbolColor());
      checkArray(arr258);
      checkArray(arr789);
      break;
    case '9':
      event.target.textContent = changePlayer();
      event.target.disabled = true;
      event.target.classList.add(symbolColor());
      checkArray(arr159);
      checkArray(arr369);
      checkArray(arr789);
      break;
  }

  if (allEqual(arr123) && arr123.length == 3) {
    if (arr123[0] == 'O') {
      addBorder(one, two, three);
    } else if (arr123[0] == 'X') {
      addBorder(one, two, three);
    }
  }
  if (allEqual(arr159) && arr159.length == 3) {
    if (arr159[0] == 'O') {
      addBorder(one, five, nine);
    } else if (arr159[0] == 'X') {
      addBorder(one, five, nine);
    }
  }
  if (allEqual(arr147) && arr147.length == 3) {
    if (arr147[0] == 'O') {
      addBorder(one, four, seven);
    } else if (arr147[0] == 'X') {
      addBorder(one, four, seven);
    }
  }
  if (allEqual(arr258) && arr258.length == 3) {
    if (arr258[0] == 'O') {
      addBorder(two, five, eight);
    } else if (arr258[0] == 'X') {
      addBorder(two, five, eight);
    }
  }
  if (allEqual(arr357) && arr357.length == 3) {
    if (arr357[0] == 'O') {
      addBorder(three, five, seven);
    } else if (arr357[0] == 'X') {
      addBorder(three, five, seven);
    }
  }
  if (allEqual(arr369) && arr369.length == 3) {
    if (arr369[0] == 'O') {
      addBorder(three, six, nine);
    } else if (arr369[0] == 'X') {
      addBorder(three, six, nine);
    }
  }
  if (allEqual(arr456) && arr456.length == 3) {
    if (arr456[0] == 'O') {
      addBorder(four, five, six);
    } else if (arr456[0] == 'X') {
      addBorder(four, five, six);
    }
  }
  if (allEqual(arr789) && arr789.length == 3) {
    if (arr789[0] == 'O') {
      addBorder(seven, eight, nine);
    } else if (arr789[0] == 'X') {
      addBorder(seven, eight, nine);
    }
  }
  if (winner) {
    boardButtons.forEach((elem) => {
      elem.disabled = true;
      resetBtn.classList.remove('collapse');
      ticTac.textContent = winner;
    });
  }
  if (
    arr123.length == 3 &&
    arr159.length == 3 &&
    arr147.length == 3 &&
    arr258.length == 3 &&
    arr357.length == 3 &&
    arr369.length == 3 &&
    arr456.length == 3 &&
    arr789.length == 3 &&
    winner == ''
  ) {
    boardButtons.forEach((elem) => {
      elem.disabled = true;
    });
    resetBtn.classList.remove('collapse');
    ticTac.textContent = 'DRAW';
  }
});

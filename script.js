let arr123 = [];
let arr159 = [];
let arr147 = [];
let arr258 = [];
let arr357 = [];
let arr369 = [];
let arr456 = [];
let arr789 = [];

let winner = ""
let value;
let ticTac = document.getElementById('tic-tac');

let xo;
let colorOfSymbol

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

function symbolColor () {
  if(!player1) {
    colorOfSymbol = "text-teal-500" 
  } else {
    colorOfSymbol = "text-amber-500"
  }
  return colorOfSymbol
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
    elem.classList.remove("text-amber-500", "text-teal-500")
  });
  playerTwo.classList.remove('border-solid', 'border-8', 'border-slate-200');
  playerOne.classList.add('border-solid', 'border-8', 'border-slate-200');
  winner = '';
  player1 = true;
  ticTac.textContent = "TIC-TAC-TOE"
});

const buttonGroup = document.getElementById('board');

function checkFull (arr) {
  arr.length = arr.length < 3 ? arr.length : 3;
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
      event.target.classList.add(symbolColor())
      arr123.push(event.target.textContent);
      arr159.push(event.target.textContent);
      arr147.push(event.target.textContent);
      checkFull(arr123)
      checkFull(arr147)
      checkFull(arr159)
      break;
    case '2':
      event.target.textContent = changePlayer();
      event.target.disabled = true;
      event.target.classList.add(symbolColor())
      arr258.push(event.target.textContent);
      arr123.push(event.target.textContent);
      arr123.length = arr123.length < 3 ? arr123.length : 3;
      arr258.length = arr258.length < 3 ? arr258.length : 3;
      break;
    case '3':
      event.target.textContent = changePlayer();
      event.target.disabled = true;
      event.target.classList.add(symbolColor())
      arr123.push(event.target.textContent);
      arr357.push(event.target.textContent);
      arr369.push(event.target.textContent);
      arr123.length = arr123.length < 3 ? arr123.length : 3;
      arr357.length = arr357.length < 3 ? arr357.length : 3;
      arr369.length = arr369.length < 3 ? arr369.length : 3;
      break;
    case '4':
      event.target.textContent = changePlayer();
      event.target.disabled = true;
      event.target.classList.add(symbolColor())
      arr456.push(event.target.textContent);
      arr147.push(event.target.textContent);
      arr147.length = arr147.length < 3 ? arr147.length : 3;
      arr456.length = arr456.length < 3 ? arr456.length : 3;
      break;
    case '5':
      event.target.textContent = changePlayer();
      event.target.disabled = true;
      event.target.classList.add(symbolColor())
      arr159.push(event.target.textContent);
      arr258.push(event.target.textContent);
      arr357.push(event.target.textContent);
      arr456.push(event.target.textContent);
      arr159.length = arr159.length < 3 ? arr159.length : 3;
      arr258.length = arr258.length < 3 ? arr258.length : 3;
      arr357.length = arr357.length < 3 ? arr357.length : 3;
      arr456.length = arr456.length < 3 ? arr456.length : 3;
      break;
    case '6':
      event.target.textContent = changePlayer();
      event.target.disabled = true;
      event.target.classList.add(symbolColor())
      arr369.push(event.target.textContent);
      arr456.push(event.target.textContent);
      arr369.length = arr369.length < 3 ? arr369.length : 3;
      arr456.length = arr456.length < 3 ? arr456.length : 3;
      break;
    case '7':
      event.target.textContent = changePlayer();
      event.target.disabled = true;
      event.target.classList.add(symbolColor())
      arr147.push(event.target.textContent);
      arr357.push(event.target.textContent);
      arr789.push(event.target.textContent);
      arr147.length = arr147.length < 3 ? arr147.length : 3;
      arr357.length = arr357.length < 3 ? arr357.length : 3;
      arr789.length = arr789.length < 3 ? arr789.length : 3;
      break;
    case '8':
      event.target.textContent = changePlayer();
      event.target.disabled = true;
      event.target.classList.add(symbolColor())
      arr258.push(event.target.textContent);
      arr789.push(event.target.textContent);
      arr258.length = arr258.length < 3 ? arr258.length : 3;
      arr789.length = arr789.length < 3 ? arr789.length : 3;
      break;
    case '9':
      event.target.textContent = changePlayer();
      event.target.disabled = true;
      event.target.classList.add(symbolColor())
      arr159.push(event.target.textContent);
      arr369.push(event.target.textContent);
      arr789.push(event.target.textContent);
      arr159.length = arr159.length < 3 ? arr159.length : 3;
      arr789.length = arr789.length < 3 ? arr789.length : 3;
      arr369.length = arr369.length < 3 ? arr369.length : 3;
      break;
  }

  const allEqual = (arr) => arr.every((val) => val === arr[0]);
  if (allEqual(arr123) && arr123.length == 3) {
    if (arr123[0] == 'O') {
      winner = 'Player One has won';
      winningColour = 'border-teal-500';
      addBorder(one, two, three);
    } else if (arr123[0] == 'X') {
      winner = 'Player Two has won';
      winningColour = 'border-amber-500';
      addBorder(one, two, three);
    }
  }
  if (allEqual(arr159) && arr159.length == 3) {
    if (arr159[0] == 'O') {
      winner = 'Player One has won';
      winningColour = 'border-teal-500';
      addBorder(one, five, nine);
    } else if (arr159[0] == 'X') {
      winner = 'Player Two has won';
      winningColour = 'border-amber-500';
      addBorder(one, five, nine);
    }
  }
  if (allEqual(arr147) && arr147.length == 3) {
    if (arr147[0] == 'O') {
      winner = 'Player One has won';
      winningColour = 'border-teal-500';
      addBorder(one, four, seven);
    } else if (arr147[0] == 'X') {
      winner = 'Player Two has won';
      winningColour = 'border-amber-500';
      addBorder(one, four, seven);
    }
  }
  if (allEqual(arr258) && arr258.length == 3) {
    if (arr258[0] == 'O') {
      winner = 'Player One has won';
      winningColour = 'border-teal-500';
      addBorder(two, five, eight);
    } else if (arr258[0] == 'X') {
      winner = 'Player Two has won';
      winningColour = 'border-amber-500';
      addBorder(two, five, eight);
    }
  }
  if (allEqual(arr357) && arr357.length == 3) {
    if (arr357[0] == 'O') {
      winner = 'Player One has won';
      winningColour = 'border-teal-500';
      addBorder(three, five, seven);
    } else if (arr357[0] == 'X') {
      winner = 'Player Two has won';
      winningColour = 'border-amber-500';
      addBorder(three, five, seven);
    }
  }
  if (allEqual(arr369) && arr369.length == 3) {
    if (arr369[0] == 'O') {
      winner = 'Player One has won';
      winningColour = 'border-teal-500';
      addBorder(three, six, nine);
    } else if (arr369[0] == 'X') {
      winner = 'Player Two has won';
      winningColour = 'border-amber-500';
      addBorder(three, six, nine);
    }
  }
  if (allEqual(arr456) && arr456.length == 3) {
    if (arr456[0] == 'O') {
      winner = 'Player One has won';
      winningColour = 'border-teal-500';
      addBorder(four, five, six);
    } else if (arr456[0] == 'X') {
      winner = 'Player Two has won';
      winningColour = 'border-amber-500';
      addBorder(four, five, six);
    }
  }
  if (allEqual(arr789) && arr789.length == 3) {
    if (arr789[0] == 'O') {
      winner = 'Player One has won';
      winningColour = 'border-teal-500';
      addBorder(seven, eight, nine);
    } else if (arr789[0] == 'X') {
      winner = 'Player Two has won';
      winningColour = 'border-amber-500';
      addBorder(seven, eight, nine);
    }
  }
  if (winner) {
    boardButtons.forEach((elem) => {
      elem.disabled = true;
      resetBtn.classList.remove('collapse');
      ticTac.textContent = winner
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
    arr789.length == 3 && winner == ""
  ) {
    boardButtons.forEach((elem) => {
      elem.disabled = true;
    });
    resetBtn.classList.remove('collapse');
    ticTac.textContent = "DRAW"
  }
});

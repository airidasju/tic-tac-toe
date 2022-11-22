let arr123 = [];
let arr159 = [];
let arr147 = [];
let arr258 = [];
let arr357 = [];
let arr369 = [];
let arr456 = [];
let arr789 = [];

let winner;
let ticTac = document.getElementById('tic-tac');

let player1 = true;

const playerOne = document.getElementById('player-one');
const playerTwo = document.getElementById('player-two');

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

$(playerOne).toggleClass('border-4 border-stone-300');

$(document).ready(function () {
  $(':button').on('click', function () {
    value = $(this).val();
    $(playerOne).toggleClass('border-4 border-stone-300');
    $(playerTwo).toggleClass('border-4 border-stone-300');
    if (player1) {
        $(this).addClass('text-teal-500', player1);
      switch (value) {
        case '1':
          arr123.push('O');
          arr159.push('O');
          arr147.push('O');
          arr123.length = arr123.length < 3 ? arr123.length : 3;
          arr147.length = arr147.length < 3 ? arr147.length : 3;
          arr159.length = arr159.length < 3 ? arr159.length : 3;
          this.textContent = 'O';
          this.disabled = true;
          break;
        case '2':
          arr258.push('O');
          arr123.push('O');
          arr123.length = arr123.length < 3 ? arr123.length : 3;
          arr258.length = arr258.length < 3 ? arr258.length : 3;
          this.textContent = 'O';
          this.disabled = true;
          break;
        case '3':
          arr123.push('O');
          arr357.push('O');
          arr369.push('O');
          arr123.length = arr123.length < 3 ? arr123.length : 3;
          arr357.length = arr357.length < 3 ? arr357.length : 3;
          arr369.length = arr369.length < 3 ? arr369.length : 3;
          this.textContent = 'O';
          this.disabled = true;
          break;
        case '4':
          arr456.push('O');
          arr147.push('O');
          arr147.length = arr147.length < 3 ? arr147.length : 3;
          arr456.length = arr456.length < 3 ? arr456.length : 3;
          this.textContent = 'O';
          this.disabled = true;
          break;
        case '5':
          arr159.push('O');
          arr258.push('O');
          arr357.push('O');
          arr456.push('O');
          arr159.length = arr159.length < 3 ? arr159.length : 3;
          arr258.length = arr258.length < 3 ? arr258.length : 3;
          arr357.length = arr357.length < 3 ? arr357.length : 3;
          arr456.length = arr456.length < 3 ? arr456.length : 3;
          this.textContent = 'O';
          this.disabled = true;
          break;
        case '6':
          arr369.push('O');
          arr456.push('O');
          arr369.length = arr369.length < 3 ? arr369.length : 3;
          arr456.length = arr456.length < 3 ? arr456.length : 3;
          this.textContent = 'O';
          this.disabled = true;
          break;
        case '7':
          arr147.push('O');
          arr357.push('O');
          arr789.push('O');
          arr147.length = arr147.length < 3 ? arr147.length : 3;
          arr357.length = arr357.length < 3 ? arr357.length : 3;
          arr789.length = arr789.length < 3 ? arr789.length : 3;
          this.textContent = 'O';
          this.disabled = true;
          break;
        case '8':
          arr258.push('O');
          arr789.push('O');
          arr258.length = arr258.length < 3 ? arr258.length : 3;
          arr789.length = arr789.length < 3 ? arr789.length : 3;
          this.textContent = 'O';
          this.disabled = true;
          break;
        case '9':
            arr159.push('O');
            arr369.push('O');
          arr789.push('O');
          arr159.length = arr159.length < 3 ? arr159.length : 3;
          arr789.length = arr789.length < 3 ? arr789.length : 3;
          arr369.length = arr369.length < 3 ? arr369.length : 3;
          this.textContent = 'O';
          this.disabled = true;
          break;
      }

      player1 = false;
    } else {
        $(this ).addClass( 'text-amber-500');
      switch (value) {
        case '1':
          arr123.push('X');
          arr159.push('X');
          arr147.push('X');
          arr123.length = arr123.length < 3 ? arr123.length : 3;
          arr147.length = arr147.length < 3 ? arr147.length : 3;
          arr159.length = arr159.length < 3 ? arr159.length : 3;
          this.textContent = 'X';
          this.disabled = true;
          break;
        case '2':
          arr258.push('X');
          arr123.push('X');
          arr123.length = arr123.length < 3 ? arr123.length : 3;
          arr258.length = arr258.length < 3 ? arr258.length : 3;
          this.textContent = 'X';
          this.disabled = true;
          break;
        case '3':
          arr123.push('X');
          arr357.push('X');
          arr369.push('X');
          arr123.length = arr123.length < 3 ? arr123.length : 3;
          arr357.length = arr357.length < 3 ? arr357.length : 3;
          arr369.length = arr369.length < 3 ? arr369.length : 3;
          this.textContent = 'X';
          this.disabled = true;
          break;
        case '4':
          arr456.push('X');
          arr147.push('X');
          arr147.length = arr147.length < 3 ? arr147.length : 3;
          arr456.length = arr456.length < 3 ? arr456.length : 3;
          this.textContent = 'X';
          this.disabled = true;
          break;
        case '5':
          arr159.push('X');
          arr258.push('X');
          arr357.push('X');
          arr456.push('X');
          arr159.length = arr159.length < 3 ? arr159.length : 3;
          arr258.length = arr258.length < 3 ? arr258.length : 3;
          arr357.length = arr357.length < 3 ? arr357.length : 3;
          arr456.length = arr456.length < 3 ? arr456.length : 3;
          this.textContent = 'X';
          this.disabled = true;
          break;
        case '6':
          arr369.push('X');
          arr456.push('X');
          arr369.length = arr369.length < 3 ? arr369.length : 3;
          arr456.length = arr456.length < 3 ? arr456.length : 3;
          this.textContent = 'X';
          this.disabled = true;
          break;
        case '7':
          arr147.push('X');
          arr357.push('X');
          arr789.push('X');
          arr147.length = arr147.length < 3 ? arr147.length : 3;
          arr357.length = arr357.length < 3 ? arr357.length : 3;
          arr789.length = arr789.length < 3 ? arr789.length : 3;
          this.textContent = 'X';
          this.disabled = true;
          break;
        case '8':
          arr258.push('X');
          arr789.push('X');
          arr258.length = arr258.length < 3 ? arr258.length : 3;
          arr789.length = arr789.length < 3 ? arr789.length : 3;
          this.textContent = 'X';
          this.disabled = true;
          break;
        case '9':
          arr369.push('X');
        arr159.push('X');
          arr789.push('X');
          arr159.length = arr159.length < 3 ? arr159.length : 3;
          arr789.length = arr789.length < 3 ? arr789.length : 3;
          arr369.length = arr369.length < 3 ? arr369.length : 3;
          this.textContent = 'X';
          this.disabled = true;
          break;
      }
      player1 = true;
    }
    
    const allEqual = (arr) => arr.every((val) => val === arr[0]);
    if (allEqual(arr123) && arr123.length == 3) {
        if(arr123[0] == "O"){
            winner = "Player One has won"
            winningColour = "bg-teal-500"  
        } else if(arr123[0] == "X"){
            winner = "Player Two has won"
            winningColour = "bg-amber-500"   
        }
        $(ticTac).text(winner)
        $(ticTac).toggleClass(winningColour)
      $(one).toggleClass('border-8 border-emerald-600 border-solid');
      $(two).toggleClass('border-8 border-emerald-600 border-solid');
      $(three).toggleClass('border-8 border-emerald-600 border-solid');
      document.querySelectorAll('button.bg-stone-300').forEach((elem) => {
          elem.disabled = true;
        });

        $(reset).removeClass('collapse');
    }
    if (allEqual(arr159) && arr159.length == 3) {
        if(arr159[0] == "O"){
            winner = "Player One has won"
            winningColour = "bg-teal-500"  
        } else if(arr159[0] == "X"){
            winner = "Player Two has won"
            winningColour = "bg-amber-500"   
        }
        $(ticTac).text(winner)
        $(ticTac).toggleClass(winningColour)
      $(one).toggleClass('border-8 border-emerald-600 border-solid');
      $(five).toggleClass('border-8 border-emerald-600 border-solid');
      $(nine).toggleClass('border-8 border-emerald-600 border-solid');
      document.querySelectorAll('button.bg-stone-300').forEach((elem) => {
          elem.disabled = true;
        });

        $(reset).removeClass('collapse');
    }
    if (allEqual(arr147) && arr147.length == 3) {
        if(arr147[0] == "O"){
            winner = "Player One has won"
            winningColour = "bg-teal-500"  
        } else if(arr147[0] == "X"){
            winner = "Player Two has won"
            winningColour = "bg-amber-500"   
        }
        $(ticTac).text(winner)
        $(ticTac).toggleClass(winningColour)
      $(one).toggleClass('border-8 border-emerald-600 border-solid');
      $(four).toggleClass('border-8 border-emerald-600 border-solid');
      $(seven).toggleClass('border-8 border-emerald-600 border-solid');
      document.querySelectorAll('button.bg-stone-300').forEach((elem) => {
          elem.disabled = true;
        });

        $(reset).removeClass('collapse');
    }
    if (allEqual(arr258) && arr258.length == 3) {
        if(arr258[0] == "O"){
            winner = "Player One has won"
            winningColour = "bg-teal-500"  
        } else if(arr258[0] == "X"){
            winner = "Player Two has won"
            winningColour = "bg-amber-500"   
        }
        $(ticTac).text(winner)
        $(ticTac).toggleClass(winningColour)
      $(two).toggleClass('border-8 border-emerald-600 border-solid');
      $(five).toggleClass('border-8 border-emerald-600 border-solid');
      $(eight).toggleClass('border-8 border-emerald-600 border-solid');
      document.querySelectorAll('button.bg-stone-300').forEach((elem) => {
          elem.disabled = true;
        });

        $(reset).removeClass('collapse');
    }
    if (allEqual(arr357) && arr357.length == 3) {
        if(arr357[0] == "O"){
            winner = "Player One has won"
            winningColour = "bg-teal-500"  
        } else if(arr357[0] == "X"){
            winner = "Player Two has won"
            winningColour = "bg-amber-500"   
        }
        $(ticTac).text(winner)
        $(ticTac).toggleClass(winningColour)
      $(three).toggleClass('border-8 border-emerald-600 border-solid');
      $(five).toggleClass('border-8 border-emerald-600 border-solid');
      $(seven).toggleClass('border-8 border-emerald-600 border-solid');
      document.querySelectorAll('button.bg-stone-300').forEach((elem) => {
          elem.disabled = true;
        });

        $(reset).removeClass('collapse');
    }
    if (allEqual(arr369) && arr369.length == 3) {
        if(arr369[0] == "O"){
            winner = "Player One has won"
            winningColour = "bg-teal-500"  
        } else if(arr369[0] == "X"){
            winner = "Player Two has won"
            winningColour = "bg-amber-500"   
        }
        $(ticTac).text(winner)
        $(ticTac).toggleClass(winningColour)
      $(three).toggleClass('border-8 border-emerald-600 border-solid');
      $(six).toggleClass('border-8 border-emerald-600 border-solid');
      $(nine).toggleClass('border-8 border-emerald-600 border-solid');
      document.querySelectorAll('button.bg-stone-300').forEach((elem) => {
          elem.disabled = true;
        });

        $(reset).removeClass('collapse');
    }
    if (allEqual(arr456) && arr456.length == 3) {
        if(arr456[0] == "O"){
            winner = "Player One has won"
            winningColour = "bg-teal-500"  
        } else if(arr456[0] == "X"){
            winner = "Player Two has won"
            winningColour = "bg-amber-500"   
        }
        $(ticTac).text(winner)
        $(ticTac).toggleClass(winningColour)
      $(four).toggleClass('border-8 border-emerald-600 border-solid');
      $(five).toggleClass('border-8 border-emerald-600 border-solid');
      $(six).toggleClass('border-8 border-emerald-600 border-solid');
      document.querySelectorAll('button.bg-stone-300').forEach((elem) => {
          elem.disabled = true;
        });

        $(reset).removeClass('collapse');
    }
    if (allEqual(arr789) && arr789.length == 3) {
        if(arr789[0] == "O"){
            winner = "Player One has won"
            winningColour = "bg-teal-500"  
        } else if(arr789[0] == "X"){
            winner = "Player Two has won"
            winningColour = "bg-amber-500"   
        }
        $(ticTac).text(winner)
        $(ticTac).toggleClass(winningColour)
      $(seven).toggleClass('border-8 border-emerald-600 border-solid');
      $(eight).toggleClass('border-8 border-emerald-600 border-solid');
      $(nine).toggleClass('border-8 border-emerald-600 border-solid');
      document.querySelectorAll('button.bg-stone-300').forEach((elem) => {
          elem.disabled = true;
        });

        $(reset).removeClass('collapse');
    }
    if (
      arr123.length == 3 &&
      arr159.length == 3 &&
      arr147.length == 3 &&
      arr258.length == 3 &&
      arr357.length == 3 &&
      arr369.length == 3 &&
      arr456.length == 3 &&
      arr789.length == 3
    ) {
      document.querySelectorAll('button.bg-stone-300').forEach((elem) => {
        elem.disabled = true;
      });
      $(reset).removeClass('collapse');
    }

});

$('#reset').click(function () {
  arr123 = [];
  arr159 = [];
  arr147 = [];
  arr258 = [];
  arr357 = [];
  arr369 = [];
  arr456 = [];
  arr789 = [];
  $("#reset").removeClass("text-amber-500")
  $("#reset").removeClass("text-teal-500")
  $("#reset").addClass("text-neutral-900")
  $("#reset").toggleClass("collapse")
  $(ticTac).text("TIC-TAC-TOE")
  document.querySelectorAll('button.bg-stone-300').forEach((elem) => {
      elem.disabled = false;
      elem.textContent = '';
    });
    player1 = true
    $(".box").removeClass('text-amber-500');
    $(".box").removeClass('text-teal-500');
});
});

var showPlayer = document.querySelector('.showPlayer');
var playerX = document.querySelector('#playerX');
var playerO = document.querySelector('#playerO');
var result = document.querySelector('#gameResult');
result.style.color = "red";

var cells = document.querySelectorAll('.boxes');
cells.forEach(cells => cells.addEventListener('click', cellClick));

var currentPlayer = 'X';
var gamestate = true;
var gameCells = ["", "", "", "", "", "", "", "", ""];

function cellClick(clickedCellEvent){
  var clickedCell = clickedCellEvent.target;
  var cellIndex = clickedCell.getAttribute('data-cell-index');
  if(clickedCell.innerHTML === "" && gamestate === true){
    clickedCell.innerHTML = currentPlayer;
    gameCells[cellIndex] = currentPlayer;
    showPlayer.classList.toggle("visible");
    gameResult();
  }
}

var winningStates = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

function gameResult(){
  for(var i=0; i<8; i++){
    var winningState = winningStates[i];
    var c1 = gameCells[winningState[0]];
    var c2 = gameCells[winningState[1]];
    var c3 = gameCells[winningState[2]];

    if(c1 === "" || c2 === "" || c3 === ""){
      gamestate = true;
      continue;
    }
    if(c1 === c2 && c2 === c3){
      console.log(c1, c2, c3);
      playerX.style.display = "none";
      playerO.style.display = "none";
      if(c1 === "X" && c2 === "X" && c3 === "X"){
       result.innerHTML = `Player ${currentPlayer} has won the game!`;
      }
      else if(c1 === "O" && c2 === "O" && c3 === "O"){
        result.innerHTML = `Player ${currentPlayer} has won the game!`;
      }
      gamestate = false;
      break;
    }
    if(!gameCells.includes("")){
      playerX.style.display = "none";
      playerO.style.display = "none";
      result.innerHTML = "Game ended in draw!";
      gamestate = false;
    }
  }
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

document.querySelector('#btn').addEventListener('click', function(){
  window.location.href = "index.html";
});
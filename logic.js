let players = ['x', 'o'];
let activePlayer = 0;

let board
function startGame() {
  board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
activePlayer = 0;
renderBoard(board)
}

let i ;
let j;

function gorver() {
  for(i = 0; i < board.length; i++) {
    a = true
    b = true
    for (j = 0; j < board.length; j++) {
      a = a & (board[i][j] == players[activePlayer])
      b = b & (board[j][i] == players[activePlayer])
    }
    if (a == true || b == true) {
      return true;
    }
  }
return false;
}


function ver() {
  c = true
  t = true
  for(i = 0; i < board.length; i++) {
    c = c & (board[i][i] == players[activePlayer])
    t = t & (board[3-i-1][i] == players[activePlayer])
  }
  if (c == true || t == true){
    return true;
  }
return false;
}

function checkWin() {
  if (gorver() === true ||
      ver() === true ) {
    showWinner(activePlayer);
  }
}

function click (i,j) {
  board[i][j] = players[activePlayer]
  renderBoard(board)
 checkWin();
  if(activePlayer === 0) {
    activePlayer = 1
   }
  else if(activePlayer === 1) {
    activePlayer = 0
   }
}

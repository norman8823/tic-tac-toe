let board;
let turn;
let winner;
let tie;

const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.querySelector("#message");
const resetButtonEl = document.querySelector("#reset");

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

function render() {
  updateMessage();
  updateBoard();
}

const updateBoard = function () {
  board.forEach((square, squareIndex) => {
    squareEls[squareIndex].textContent = square;
  });
};

const updateMessage = () => {
  if (winner === false && tie === false) {
    messageEl.innerText = turn;
  } else if (!winner && tie) {
    messageEl.textContent = "It's a tie!";
  } else {
    messageEl.textContent = `${turn} is the winner!`;
  }
};

const placePiece = (index) => {
  board[index] = turn;
};

const checkforWinner = () => {
  for (let i = 0; i < winningCombos.length; i++) {
    let currentCombo = winningCombos[i];
    if (board[currentCombo[0]].length > 0) {
      if (board[currentCombo[0]] === board[currentCombo[1]]) {
        if (board[currentCombo[0]] === board[currentCombo[2]]) {
          winner = true;
          console.log(winner);
        }
      }
    }
  }
};

//is the first spot an empty string
//is the first spot equal to the second
//is the first spot equal to the third
//if all are true, you have a winner

const checkForTie = () => {
  if (winner) return;
  if (!board.includes("")) tie = true;
};

const switchPlayerTurn = () => {
  if (winner) return;
  if (turn === "X") {
    turn = "O";
  } else {
    turn = "X";
  }
};

const handleClick = (e) => {
  if (winner === true) return;

  if (e.target.classList.contains("sqr")) {
    const squareIndex = e.target.id;
    if (board[squareIndex] === "X" || board[squareIndex] === "O") {
      return;
    }

    placePiece(squareIndex);
  }
  checkforWinner();
  checkForTie();
  switchPlayerTurn();
  render();
  return;
};

squareEls.forEach((square) => {
  square.addEventListener("click", handleClick);
});

const init = () => {
  board = ["", "", "", "", "", "", "", "", ""];
  turn = "X";
  winner = false;
  tie = false;

  updateBoard();
  render();
};

resetButtonEl.addEventListener("click", init);

window.onload = () => {
  init();
};

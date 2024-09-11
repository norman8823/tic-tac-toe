/*-------------------------------- Constants --------------------------------*/
//In a constant called winningCombos, define the eight possible winning combinations as an array of arrays.
const winningCombos = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];



/*---------------------------- Variables (state) ----------------------------*/
// Use a variable named board to represent the state of the squares on the board.
let board; 

// Use a variable named turn to track whose turn it is.
let turn;

// Use a variable named winner to represent if anyone has won yet.
let winner;

// Use a variable named tie to represent if the game has ended in a tie.
let tie;

/*------------------------ Cached Element References ------------------------*/
// In a constant called squareEls, store the nine elements representing the squares on the page.
const squareEls = document.querySelectorAll('.sqr')

// In a constant called messageEl, store the element that displays the game’s status on the page.
const messageEl = document.getElementById('message');

// Cached Element Reference for the Reset Button
const resetBtnEl = document.getElementById('reset');

console.log(squareEls)
console.log(message)


/*-------------------------------- Functions --------------------------------*/
//Upon loading, the game state should be initialized, and a function should be called to render this game state.
const init = () => {

//Set the board variable to an array containing nine empty strings ('') representing empty squares.
board = ['','','','','','','','',''];

//Set the turn to X - this will represent player X.
turn = 'X';

//Set the winner to false.
winner = false 

//Set tie to false.
tie = false

//Call a function named render() at the end of the init() function.
render ();
};

//Create a function called render, then set it aside for now.
const render = () => {
    updateBoard();
    updateMessage();
};

//In the updateBoard function, loop over board and for each element:
    const updateBoard = () => {
            board.forEach((value, index) => {
             const square = squareEls[index];
             square.textContent = value;
             if  (value === "X") {
                 square.textContent = "X";
             } else if (value === "O") {
                 square.textContent = "O";
             } else {
                 square.textContent = "";
             }
            });
         };
        
    const updateMessage = () => {
        if (!winner && !tie) {
            messageEl.textContent = `It's ${turn}'s turn`;
        } else if (!winner && tie) {
            messageEl.textContent = "It's a tie";
        } else messageEl.textContent = `${turn} wins!`;
    }     ;




//Create a function named placePiece that accepts an index parameter.
const placePiece = (index) => {
    board[index] = turn;
    console.log(board);
};

const handleClick = (event) => {

//Obtain the index of the clicked square.
const squareIndex = event.target.id

// If the square is already taken or the game is over, return out of the function
if (board[squareIndex] === 'X' || board[squareIndex] === 'O' || winner) {
    return;
}

placePiece(squareIndex);
checkForWinner();
checkForTie();
switchPlayerTurn();
render();

};

// Create a function called checkForWinner that checks each of the winning combinations 
const checkForWinner = () => {
    // Loop through each winning combination
    winningCombos.forEach((combo) => {
      const [a, b, c] = combo; // Destructure the combo to get indices
      if (
        board[a] !== '' &&       // The first position is not empty
        board[a] === board[b] && // First and second positions are the same
        board[a] === board[c]    // First and third positions are the same
      ) {
        winner = true; // Set winner to true
      }
    });
  };

//Create a function to check for Tie
const checkForTie = () => {
    // If there is a winner, no need to check for tie
    if (winner) return;
  
    // If all board positions are filled (no '' left), it's a tie
    if (!board.includes('')) {
      tie = true;
    } else {
      tie = false;
    }
  
    // For testing purposes
    console.log('Tie:', tie);
  };

  //Create a function to switch player turns
  const switchPlayerTurn = () => {
    // If there is a winner, do not switch turns
    if (winner) return;
  
    // Switch turns
    turn = turn === 'X' ? 'O' : 'X';
  
    // For testing purposes
    console.log('Turn:', turn);
  };
/*----------------------------- Event Listeners -----------------------------*/
//Add an event listener to each of the existing squareEls with a loop. Set up the event listener to respond to the 'click' event.
squareEls.forEach(square => {
    square.addEventListener('click', handleClick);
})

// Add event listener to the reset button
resetBtnEl.addEventListener('click', init);

init();
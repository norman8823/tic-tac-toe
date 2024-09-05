/*-------------------------------- Constants --------------------------------*/
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

init();

const handleClick(event) => {


}


/*----------------------------- Event Listeners -----------------------------*/




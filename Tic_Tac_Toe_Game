let boxes = document.querySelectorAll(".box");  // Select all game boxes
let newGameBtn = document.querySelector(".new"); // Select the "New Game" button
let resetBtn = document.querySelector(".reset"); // Select the "Reset Game" button
let winnerMessage = document.querySelector("#winner-message"); // Select the winner message
let turno = true; // Player's turn (true = "O", false = "X")

// Winning patterns
const winPatterns = [
    [0, 1, 2], // Horizontal row 1
    [3, 4, 5], // Horizontal row 2
    [6, 7, 8], // Horizontal row 3
    [0, 3, 6], // Vertical column 1
    [1, 4, 7], // Vertical column 2
    [2, 5, 8], // Vertical column 3
    [0, 4, 8], // Diagonal 1
    [2, 4, 6]  // Diagonal 2
];

// Event listener for each box (to mark "X" or "O")
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText !== "" || winnerMessage.style.display === "block") return;  // Prevent marking already marked box or after the game ends

        if (turno) {
            box.innerText = "O";  // "O" player's turn
            turno = false;  // Change turn to "X"
        } else {
            box.innerText = "X";  // "X" player's turn
            turno = true;  // Change turn to "O"
        }

        // Check if there's a winner after each move
        checkWinner();
    });
});

// Function to check if there's a winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        // If all three boxes in a winning pattern are the same and not empty
        if (pos1Val !== "" && pos1Val === pos2Val && pos1Val === pos3Val) {
            winnerMessage.innerText = `${pos1Val} wins!`;  // Display the winner message
            winnerMessage.style.display = "block";  // Show the winner message
            alert(`${pos1Val} Congratulations! You won this game`);  // Show the winner in an alert
            return;
        }
    }
};

// Event listener for the "New Game" button
newGameBtn.addEventListener("click", () => {
    // Clear the text from all boxes
    boxes.forEach((box) => {
        box.innerText = "";
    });

    // Reset the turn to "O"
    turno = true;
    winnerMessage.style.display = "none";  // Hide the winner message
});

// Event listener for the "Reset Game" button
resetBtn.addEventListener("click", () => {
    // Clear the text from all boxes
    boxes.forEach((box) => {
        box.innerText = "";
    });

    // Reset the turn to "O"
    turno = true;
    winnerMessage.style.display = "none";  // Hide the winner message
    
});


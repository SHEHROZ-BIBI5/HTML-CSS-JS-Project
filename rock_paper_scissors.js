let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};


 
const drawGame = () => {
     msg.innerText = "Game was Draw. play again./";
    msg.style.backgroundColor = " rgba(20, 20, 63, 0.801)"
};
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
         msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
          msg.style.backgroundColor = "green";
     } else {
        compScore++;
        compScorePara.innerText = compScore;
         msg.innerText = `You lose. ${compChoice} beats Your ${userChoice}`;
         msg.style.backgroundColor = "red";

    }
};

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("Comp choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin;
        if (userChoice === "rock") {
            userWin = compChoice === "scissors"; // Rock beats Scissors
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock"; // Paper beats Rock
        } else if (userChoice === "scissors") {
            userWin = compChoice === "paper"; // Scissors beats Paper
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

// Add event listeners to all choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

function playGame(roundsNumber) {

    // *** FUNCTIONS ***
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function getComputerChoice() {
        const CHOICES = ["rock", "paper", "scissors"];
        const RANDOM_INDEX = Math.floor(Math.random() * CHOICES.length);

        console.log("computerChoice: " + CHOICES[RANDOM_INDEX]);

        return CHOICES[RANDOM_INDEX];
    }

    function getHumanChoice() {

        const HUMAN_CHOICE = prompt("Choose: rock, paper or scissors?: ").toLowerCase();

        console.log("humanChoice: " + HUMAN_CHOICE);

        if (HUMAN_CHOICE === "rock" || HUMAN_CHOICE === "paper" || HUMAN_CHOICE === "scissors") {
            return HUMAN_CHOICE;
        } else {
            console.log("Invalid input! Pick rock, paper, or scissors.");
            return getHumanChoice();
        }

    }

    function playRound(computerChoice, humanChoice) {

        if (computerChoice === humanChoice) {
            return "It's a draw!";
        } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")) {
            humanScore++;
            return "You win! " + capitalizeFirstLetter(humanChoice) + " beats " + computerChoice;
        } else {
            computerScore++;
            return "You lose! " + capitalizeFirstLetter(computerChoice) + " beats " + humanChoice;
        } 
    }

    // playGame for N rounds
    let humanScore = 0;
    let computerScore = 0;

    while (roundsNumber > 0) {
        const computerChoice = getComputerChoice();    
        const humanChoice = getHumanChoice();
        const roundOutcome = playRound(computerChoice,humanChoice);
        console.log(roundOutcome);
        console.log("Human: " + humanScore + " -  Computer: " + computerScore);
        roundsNumber--;
    }

    // declare winner
    if (humanScore > computerScore) {
        console.log("Human wins! (" + humanScore + " - " + computerScore +")");
      } else if (humanScore < computerScore) {
        console.log("Computer wins! (" + computerScore + " - " + humanScore +")");
      } else {
        console.log("It's a draw");
      }
}


playGame(5);

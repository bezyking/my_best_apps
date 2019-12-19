const game = () => {
  let HScore = 0;
  let CScore = 0;
  //Play Match
  const playMatch = () => {
    const userHand = document.querySelector(".human-img");
    const computerHand = document.querySelector(".computer-img");
    const options = document.querySelectorAll(".human-buttons button");
    const result = document.querySelector(".result");
    //Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //computerChoice
        const random = Math.floor(Math.random() * 3);
        const ComputerChoice = computerOptions[random];
        //Update Images

        userHand.src = `./images/${this.textContent}.png`;
        computerHand.src = `./images/${ComputerChoice}.png`;

        //Here is where we call compare hands
        setTimeout(() => {
          //Here is where we call compare hands
          compareHand(this.textContent, ComputerChoice);
          //Update Images
          userHand.src = `./images/${this.textContent}.png`;
          computerHand.src = `./images/${computerChoice}.png`;
        }, 250);
      });

      const updateScore = () => {
        humanScore = document.querySelector(".count-human");
        computerScore = document.querySelector(".count-computer");
        humanScore.textContent = HScore;
        computerScore.textContent = CScore;
      };

      const compareHand = (humanChoice, ComputerChoice) => {
        if (humanChoice === ComputerChoice) {
          //its a Tie
          result.textContent = "Its a tie";
          return;
        }
        //check rock
        if (humanChoice === "rock") {
          if (ComputerChoice === "scissors") {
            result.textContent = "human Wins";
            HScore++;
            updateScore();
            return;
          } else {
            result.textContent = "computer Wins";
            CScore++;
            updateScore();
            return;
          }
        }
        //check paper

        if (humanChoice === "paper") {
          if (ComputerChoice === "scissors") {
            result.textContent = "computer Wins";
            CScore++;
            updateScore();
            return;
          } else {
            result.textContent = "Human Wins";
            HScore++;
            updateScore();
            return;
          }
        }
        //check scissors
        if (humanChoice === "scissors") {
          if (ComputerChoice === "rock") {
            result.textContent = "Computer Wins";
            CScore++;
            updateScore();
            return;
          } else {
            result.textContent = "Human Wins";
            HScore++;
            updateScore();
            return;
          }
        }
      };
    });
  };

  playMatch();
};

game();

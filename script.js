let option = document.querySelectorAll(".option");
let scoreUser = document.querySelector(".score-user")
let scoreComp = document.querySelector(".score-comp")
let display = document.querySelector(".result-bar")
let reset=document.querySelector(".resetbtn")
let userScore = 0;
let compScore = 0;

const gameDraw = () => {
    display.innerText = "Game was draw. Please try again."
    display.style.backgroundColor = "#081b31";
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randId = Math.floor(Math.random() * 3);
    return options[randId];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        scoreUser.innerText = userScore;
        display.innerText = `You Win ${userChoice} beats ${compChoice}`
        display.style.backgroundColor = "Green";
    } else {
        compScore++;
        scoreComp.innerText = compScore;
        display.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        display.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice != genCompChoice) {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else if (userChoice === "scissors") {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);


    }
    else {
        gameDraw();
    }

}

const resets = () => {
    userScore = 0;
    compScore = 0;
    scoreComp.innerText = "0";
    scoreUser.innerText = "0";
    display.style.backgroundColor = "black";
    display.innerText="Pick Your Move"
    
}


option.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        
    })
});

reset.addEventListener("click", resets);
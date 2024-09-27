let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userscorePara = document.querySelector("#userscore");
let compscorePara = document.querySelector("#compscore")

const genCompChoice = ()=>{
    const options = ["rock", "paper" , "scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx]
}

const gameDraw = ()=>{
    console.log("Game Was A Draw");
    msg.innerText = "game was a draw"
    msg.style.backgroundColor = "grey";
}

const showWinner = (userWin , userChoice , compChoice)=>{
    if(userWin){
        console.log("user is the winner");
        msg.innerText = `your ${userChoice} beats robot's ${compChoice}`
        msg.style.backgroundColor = "#6AB547";
        userScore++;
        userscorePara.innerText = userScore;
    }
    else{
        console.log("comp is the winner");
        msg.innerText = `robot's ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor =  "red";
        compScore++;
        compscorePara.innerText = compScore;
    }
};

const playgame = (userChoice)=>{
    console.log("User Choice Is = ", userChoice);
    let compChoice = genCompChoice();
    console.log("comp choice is ",compChoice)

    if(userChoice === compChoice){
        gameDraw();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
       else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
       else if(userChoice === "scissor"){
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice ,compChoice);
    }

    
    
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
       
        playgame(userChoice);
    })
}
)
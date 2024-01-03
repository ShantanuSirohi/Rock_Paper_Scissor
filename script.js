let userScore=0;
let cmpScore=0;

let userScorePara=document.querySelector("#your-score");

let compScorePara=document.querySelector("#comp-score");

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");

const genCompChoice = () => {
    let options=["rock","paper","scissors"];
    //rock , paper , scissors
    let rndIdx=Math.floor(Math.random() * 3)
    return options[rndIdx];
}

const drawGame = () => {
    msg.innerText="Game Draw. Play Again";
    msg.style.backgroundColor="blue";
    msg.style.color="white";
}

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText="You Win!";
        msg.style.backgroundColor="green";
    }else{
        cmpScore++;
        compScorePara.innerText=cmpScore;
        msg.innerText="You Loose! Select Again";
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice) => {
    //computer choice
    const cmpChoice=genCompChoice();

    //Draw game
    if(userChoice===cmpChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //computer choices (paper or scissor)
            userWin = cmpChoice === "paper" ? false : true ;
        }else if(userChoice === "paper"){
            //computer choices (rock or scissor)
            userWin = cmpChoice === "scissor" ? false : true ;
        }
        else{
            //computer choices (rock or paper)
            userWin = cmpChoice === "rock" ? false : true ;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice)=>{
    const userChoice=choice.getAttribute("id")
    choice.addEventListener("click",()=>{
        playGame(userChoice);
    })
});
let computerScore = 0
let yourScore = 0 

let choice = document.querySelector(".hands-container")
const popUpContainer = document.querySelector(".popup-container")
const scoreBoard = document.querySelector(".score-board")
const scoretemplate = document.querySelector(".score-template")

const imgOptions = {
    'rock': "rock.svg",
    'paper': "paper.svg",
    'scissors': "scissors.svg"
};

const imgClass = {
    rock: 'blue',
    paper: 'yellow',
    scissors: 'purple'
};

const showWinner = (userWin)=>{
    if(userWin){
        yourScore ++;

        let yScore = document.querySelector("#y-score");
        yScore.innerText = yourScore;
    
        const showWinner = document.querySelector(".winner")
        showWinner.innerText = "YOU WIN"

        const againstPc = document.querySelector("#against-pc")
        againstPc.innerText = "AGAINST PC"

        if (yourScore > computerScore) {
            const ruleBtn = document.querySelector(".rule-btn")
            ruleBtn.style.marginRight = '250px'

            const nextBtn = document.querySelector(".next-btn")
            nextBtn.style.display = 'flex'
        }


    }
    else{
        computerScore ++;

        let cScore = document.querySelector("#comp-score");
        cScore.innerText = computerScore;

        const showWinner = document.querySelector(".winner")
        showWinner.innerText = "YOU LOST"

        const againstPc = document.querySelector("#against-pc")
        againstPc.innerText = "AGAINST PC"

        const ruleBtn = document.querySelector(".rule-btn")
        ruleBtn.style.marginRight = '60px'

        const nextBtn = document.querySelector(".next-btn")
        nextBtn.style.display = 'none'
    }

}

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors']
    const ranIdX = Math.floor(Math.random()*3)
    return options[ranIdX]
}

const playgame = (userChoice)=>{

    const compChoice = genCompChoice();

    // update the computer img with choosen one
    const compHandImg = document.querySelector("#compHandImg");
    compHandImg.src = imgOptions[compChoice];
    compHandImg.parentElement.className = `comphand-img image ${imgClass[compChoice]}`

    if (userChoice === compChoice){
        const showWinner = document.querySelector(".winner");
        showWinner.innerText = "TIE UP";

        const replay = document.querySelector(".play-btn");
        replay.innerText = "Replay";

        const againstPc = document.querySelector("#against-pc");
        againstPc.innerText = "";

        const ruleBtn = document.querySelector(".rule-btn");
        ruleBtn.style.marginRight = '60px';

        const nextBtn = document.querySelector(".next-btn");
        nextBtn.style.display = 'none';
    }
    else {
        let userWin = true
        if (userChoice === 'rock') {
            userWin = (compChoice === 'paper') ? false : true;
        }
        else if (userChoice === 'paper'){
            userWin = (compChoice === 'scissors') ? false : true
        }
        else if (userChoice === 'scissors') {
            userWin = (compChoice === 'rock') ? false : true
        }      
        showWinner(userWin);
    }
    
}

choice.addEventListener("click",(choice) => {

    if (choice.target.tagName === "IMG") {
        let userChoice = choice.target.getAttribute("alt");
        playgame(userChoice);

        // hide the hands-container
        let hands = document.querySelector(".hands-container");
        hands.style.display = "none";

        // show the score-template
        const scoreTemp = document.querySelector(".score-template");
        scoreTemp.style.display = 'flex';

        // update the user-img with choosen one
        const userHandImg = document.querySelector("#userHandImg")
        userHandImg.src = imgOptions[userChoice];
        userHandImg.parentElement.className = `userhand-img image ${imgClass[userChoice]}`;
    
    }
})

const crossBtn = document.querySelector(".cross-btn")
const ruleBox = document.querySelector(".rule-box")

crossBtn.addEventListener("click",()=>{
    crossBtn.style.display = "none"
    ruleBox.style.display = 'none'
})

const ruleBtn = document.querySelector(".rule-btn")

ruleBtn.addEventListener("click",()=>{
    if (ruleBox.style.display === "none"){
        ruleBox.style.display = ''
        crossBtn.style.display = ''
    }
})

const playAgain = document.querySelector(".play-btn")

playAgain.addEventListener("click", ()=> {

    scoretemplate.style.display = 'none'
    choice.style.display = "flex"

})


const nextBtn = document.querySelector(".next-btn")

nextBtn.addEventListener("click",()=>{

    scoreBoard.style.display = "none"
    scoretemplate.style.display = "none"
    popUpContainer.style.display='flex'

    const ruleBtn = document.querySelector(".rule-btn")
    ruleBtn.style.marginRight = '60px'

    nextBtn.style.display = 'none'

})

const trophyPage = document.querySelector(".trophy-btn")
    
trophyPage.addEventListener("click", ()=> {
    popUpContainer.style.display='none'
    scoreBoard.style.display = "flex"
    choice.style.display = "flex"
})




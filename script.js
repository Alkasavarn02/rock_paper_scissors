let gameContainer = document.querySelector(".gameContainer")
let rock = document.querySelector(".rockImgcontainer")
let paper = document.querySelector(".paperImgcontainer")
let scissor = document.querySelector(".scissorsimgcontainer")
let playContainer = document.querySelector(".playContainer")
let resultContainer = document.querySelector(".resultContainer")
let leftIcon = document.querySelector(".leftIcon")
let userScoreBoard = document.querySelector("#yourScore")
let compScoreBoard = document.querySelector("#compScore")
let whoWin = document.querySelector("#whoWin")
let playAgain = document.querySelector("#playAgain")
let rulesbutton = document.querySelector(".rulesbutton")
let rulescontainer = document.querySelector(".rulescontainer")
let crossImageContainer = document.querySelector(".crossImageContainer")
let header = document.querySelector(".header")
let trophycontainer = document.querySelector(".trophycontainer")
let nextBtn = document.querySelector(".nextBtn")
let trophyPlayBtn = document.querySelector(".trophyPlayBtn")
let againstPc = document.querySelector("#against-Pc")
let leftInnerCircle = document.querySelector(".left-inner-circle")
let leftMiddleCircle = document.querySelector(".left-middle-circle")
let leftOuterCircle = document.querySelector(".left-outer-circle")
let rightInnerCircle = document.querySelector(".right-inner-circle")
let rightMiddleCircle = document.querySelector(".right-middle-circle")
let rightOuterCircle = document.querySelector(".right-outer-circle")

const imgProp = {
    'rock' : "./assests/Rock.png",
    'paper' : "./assests/paper.png",
    'scissor' : "./assests/scissors.png"
}
const borderProp = {
    'rock': "11px solid #0074B6",
    'paper': "11px solid #FFA943",
    'scissor': "11px solid #BD00FF"
}

let userScore = localStorage.getItem('userScore') ? parseInt(localStorage.getItem('userScore')) : 0;
let compScore = localStorage.getItem('compScore') ? parseInt(localStorage.getItem('compScore')) : 0;

userScoreBoard.innerHTML = userScore;
compScoreBoard.innerHTML = compScore;

let compSelect = ()=> {
    const gameElement = ['rock','paper','scissor']
    const randomIndex = Math.floor(Math.random()*3)
    return gameElement[randomIndex]
}

const showWinner = (userWin) => {
    if(userWin){
        
        setTimeout(()=>{
            userScore++

            userScoreBoard.innerHTML = userScore
            localStorage.setItem("userScore",userScore)

            whoWin.innerHTML = 'YOU WIN'
            againstPc.innerHTML = "AGAINST PC"
            playAgain.innerHTML = "PLAY AGAIN"

            rightInnerCircle.style.backgroundColor = "transparent";
            rightMiddleCircle.style.backgroundColor = "transparent";
            rightOuterCircle.style.backgroundColor = "transparent";

            leftInnerCircle.style.backgroundColor = "#3B6718";
            leftMiddleCircle.style.backgroundColor = "#1DA82BC9";
            leftOuterCircle.style.backgroundColor = "#2E9A2563";
    
            if (userScore > compScore){
                rulesbutton.style.right = '195px'
                nextBtn.style.display = 'block'
            }
        },500)
    }
    else{
        setTimeout(()=>{
            compScore++
            compScoreBoard.innerHTML = compScore
            localStorage.setItem('compScore',compScore)

            whoWin.innerHTML = 'YOU LOST'
            againstPc.innerHTML = "AGAINST PC"
            playAgain.innerHTML = "PLAY AGAIN"

            leftInnerCircle.style.backgroundColor = "transparent";
            leftMiddleCircle.style.backgroundColor = "transparent";
            leftOuterCircle.style.backgroundColor = "transparent";

            rightInnerCircle.style.backgroundColor = "#3B6718";
            rightMiddleCircle.style.backgroundColor = "#1DA82BC9";
            rightOuterCircle.style.backgroundColor = "#2E9A2563";

        },500)
    }
}

function playgame(userChoice){

    setTimeout(()=>{
        const genCompChoice = compSelect()

        document.querySelector(".rightIcon").innerHTML = `<img src= ${imgProp?.[genCompChoice]}>`
        document.querySelector(".rightIcon").style.border = borderProp?.[genCompChoice]

        if(userChoice===genCompChoice){
            whoWin.innerHTML = ""
            againstPc.innerHTML = "Tie"
            playAgain.innerHTML = 'Replay'

            rightInnerCircle.style.backgroundColor = "transparent"
            rightMiddleCircle.style.backgroundColor = "transparent"
            rightOuterCircle.style.backgroundColor = "transparent"

            leftOuterCircle.style.backgroundColor = "transparent"
            leftMiddleCircle.style.backgroundColor = "transparent"
            leftInnerCircle.style.backgroundColor = "transparent"
        }
        else {
            let userWin
            if (userChoice === "rock"){
                userWin = (genCompChoice === "scissor") ? true : false 
            }
            else if (userChoice === 'scissor'){
                userWin =(genCompChoice === 'paper') ? true : false
            }
            else if (userChoice === 'paper'){
                userWin =(genCompChoice === 'rock') ? true : false
            }
            showWinner(userWin)
        }
    },500)
}

gameContainer.addEventListener("click",(e)=>{
    if (e.target.tagName === "IMG"){

        const userChoice = e.target.getAttribute("alt")

        setTimeout(()=>{
            playContainer.style.display = "none"
            resultContainer.style.display = "flex"

            leftIcon.innerHTML = `<img src=${e.target.src} alt="${userChoice}">`
            leftIcon.style.border = borderProp?.[userChoice]
        },1000)

        playgame(userChoice)
    }
})

playAgain.addEventListener("click",(e)=>{
    setTimeout(()=>{
        resultContainer.style.display = 'none'
        playContainer.style.display = "flex"
    },500)
})

rulesbutton.addEventListener('click',(e)=>{
    setTimeout(()=>{
        rulescontainer.style.display='block'
        crossImageContainer.style.display='flex'
    },20)
})

crossImageContainer.addEventListener('click',(e)=>{
    setTimeout(()=>{
        crossImageContainer.style.display='none'
        rulescontainer.style.display='none'
    },20)
})

nextBtn.addEventListener("click",(e)=>{
    setTimeout(()=>{
        header.style.display = 'none'
        playContainer.style.display = 'none'
        resultContainer.style.display = 'none'
        nextBtn.style.display = "none"
        rulesbutton.style.right = '55px'
        trophycontainer.style.display = "flex"
    },500)
})

trophyPlayBtn.addEventListener("click",(e)=>{

    localStorage.clear() 
    location.reload()  
    
    setTimeout(()=>{
        trophycontainer.style.display = "none"
        header.style.display = 'flex'
        playContainer.style.display = 'flex'

    },500)
})




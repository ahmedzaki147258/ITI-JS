const hangmanImage=document.querySelector(".hangman-box img");
const wordDisplay=document.querySelector(".word-display");
const guessesText=document.querySelector(".guesses-text b");
const keyboardDiv=document.querySelector(".keyboard");
const gameModel=document.querySelector(".game-model");
const playAgainBtn=document.querySelector(".play-again");
const timerDisplay = document.createElement("h4");
timerDisplay.classList.add("timer-text");
document.querySelector(".game-box").appendChild(timerDisplay);

let currentWord, correctLetters, wrongGuessCount, timerInterval;
const maxGuesses=6, maxTime=30;
let remainingTime=maxTime;

const resetTimer = () => {
    clearInterval(timerInterval);
    remainingTime=maxTime;
    timerDisplay.innerHTML=`Time left: <span style="color: red;">${remainingTime}</span>s`;
    timerInterval = setInterval(() => {
        remainingTime--;
        timerDisplay.innerHTML=`Time left: <span style="color: red;">${remainingTime}</span>s`;
        if (remainingTime<=0) {
            clearInterval(timerInterval);
            keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = true);
            gameOver(false);
        }
    }, 1000);
};

const resetGame=()=>{
    correctLetters=[];
    wrongGuessCount=0;
    hangmanImage.src=`./images/hangman-${wrongGuessCount}.svg`;
    guessesText.innerText=`${wrongGuessCount} / ${maxGuesses}`;
    keyboardDiv.querySelectorAll("button").forEach(btn=>btn.disabled=false);
    wordDisplay.innerHTML=currentWord.split("").map(()=>`<li class="letter"></li>`).join("");
    gameModel.classList.remove("show");
    resetTimer();
}

const getRandomWord=()=>{
    const {word, hint} = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord=word;
    console.log(word);
    document.querySelector(".hint-text b").innerHTML=hint;
    resetGame();
}

const gameOver=(isVictory)=>{
    clearInterval(timerInterval);
    setTimeout(() => {
        const modelText = isVictory ? `You found the word:` : `You lost! The word was:`;
        gameModel.querySelector("img").src = `./images/${isVictory ? "victory" : "lost"}.gif`;
        gameModel.querySelector("h4").innerText = `${isVictory ? "Congrats!" : "Game Over!"}`;
        gameModel.querySelector("p").innerHTML = `${modelText} <b>${currentWord}</b>`;
        gameModel.classList.add("show");
    }, 300);
}

const initGame=(button, clickedLetter)=>{
    if(currentWord.toLowerCase().includes(clickedLetter)) {
        [...currentWord.toLowerCase()].forEach((letter, index) => {
            if(letter===clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerHTML=letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        })
    } else {
        wrongGuessCount++;
        hangmanImage.src=`./images/hangman-${wrongGuessCount}.svg`;
    }
    button.disabled=true;
    guessesText.innerText=`${wrongGuessCount} / ${maxGuesses}`;
    if(wrongGuessCount===maxGuesses) return gameOver(false);
    if(correctLetters.length === currentWord.length) return gameOver(true);
    resetTimer();
}

for (let i=97;i<=122;i++){
    const button=document.createElement("button");
    button.innerText=String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e=>initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();
playAgainBtn.addEventListener('click', getRandomWord);

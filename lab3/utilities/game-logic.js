import { GAME_CONSTANTS } from './game-constants.js';
import { DOM_ELEMENTS } from './dom-elements.js';
import { wordList } from './word-list.js';
import { getGameState, resetGameState, setCurrentWord, incrementWrongGuessCount, addCorrectLetter } from './game-state.js';
import { resetTimer, clearGameTimer } from './timer.js';

export const resetGame = () => {
    resetGameState();
    const gameState = getGameState();
    DOM_ELEMENTS.hangmanImage.src = `./images/hangman-${gameState.wrongGuessCount}.svg`;
    DOM_ELEMENTS.guessesText.innerText = `${gameState.wrongGuessCount} / ${GAME_CONSTANTS.MAX_GUESSES}`;
    DOM_ELEMENTS.keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    DOM_ELEMENTS.wordDisplay.innerHTML = gameState.currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    DOM_ELEMENTS.gameModel.classList.remove("show");
    resetTimer();
};

export const getRandomWord = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    setCurrentWord(word);
    console.log(word);
    DOM_ELEMENTS.hintText.innerHTML = hint;
    resetGame();
};

export const gameOver = (isVictory) => {
    clearGameTimer();
    const gameState = getGameState();
    setTimeout(() => {
        const modelText = isVictory ? 'You found the word: ' : 'You lost! The word was: ';
        DOM_ELEMENTS.gameModel.querySelector("img").src = `./images/${isVictory ? "victory" : "lost"}.gif`;
        DOM_ELEMENTS.gameModel.querySelector("h4").innerText = isVictory ? "Congrats!" : "Game Over!";
        DOM_ELEMENTS.gameModel.querySelector("p").innerHTML = `${modelText} <b>${gameState.currentWord}</b>`;
        DOM_ELEMENTS.gameModel.classList.add("show");
    }, 300);
};

export const initGame = (button, clickedLetter) => {
    const gameState = getGameState();

    if (gameState.currentWord.toLowerCase().includes(clickedLetter)) {
        [...gameState.currentWord.toLowerCase()].forEach((letter, index) => {
            if (letter === clickedLetter) {
                addCorrectLetter(letter);
                DOM_ELEMENTS.wordDisplay.querySelectorAll("li")[index].innerHTML = letter;
                DOM_ELEMENTS.wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        const newWrongCount = incrementWrongGuessCount();
        DOM_ELEMENTS.hangmanImage.src = `./images/hangman-${newWrongCount}.svg`;
    }
    button.disabled = true;
    DOM_ELEMENTS.guessesText.innerText = `${gameState.wrongGuessCount} / ${GAME_CONSTANTS.MAX_GUESSES}`;

    if (gameState.wrongGuessCount === GAME_CONSTANTS.MAX_GUESSES) return gameOver(false);
    if (gameState.correctLetters.length === gameState.currentWord.length) return gameOver(true);
    resetTimer();
};

import { GAME_CONSTANTS } from './game-constants.js';
import { gameOver } from './game-logic.js';
import { DOM_ELEMENTS } from './dom-elements.js';

let timerInterval;
let remainingTime = GAME_CONSTANTS.MAX_TIME;

const timerDisplay = document.createElement('h4');
timerDisplay.classList.add('timer-text');
document.querySelector('.game-box').appendChild(timerDisplay);

export const resetTimer = () => {
    clearInterval(timerInterval);
    remainingTime = GAME_CONSTANTS.MAX_TIME;
    updateTimerDisplay();
    startTimer();
};

export const clearGameTimer = () => {
    clearInterval(timerInterval);
};

const updateTimerDisplay = () => {
    timerDisplay.innerHTML = `Time left: <span style='color: red;'>${remainingTime}</span>s`;
};

const startTimer = () => {
    timerInterval = setInterval(() => {
        remainingTime--;
        updateTimerDisplay();
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            DOM_ELEMENTS.keyboardDiv.querySelectorAll('button').forEach(btn => btn.disabled = true);
            gameOver(false);
        }
    }, 1000);
};

import { GAME_CONSTANTS } from './utilities/game-constants.js';
import { DOM_ELEMENTS } from './utilities/dom-elements.js';
import { getRandomWord, initGame } from './utilities/game-logic.js';

for (let i = GAME_CONSTANTS.KEYBOARD_START; i <= GAME_CONSTANTS.KEYBOARD_END; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    DOM_ELEMENTS.keyboardDiv.appendChild(button);
    button.addEventListener('click', e => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();
DOM_ELEMENTS.playAgainBtn.addEventListener('click', getRandomWord);

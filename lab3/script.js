import { GAME_CONSTANTS } from './utilities/game-constants.js';
import { DOM_ELEMENTS } from './utilities/dom-elements.js';
import { getRandomWord, initGame, showCategorySelection } from './utilities/game-logic.js';

for (let i = GAME_CONSTANTS.KEYBOARD_START; i <= GAME_CONSTANTS.KEYBOARD_END; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    DOM_ELEMENTS.keyboardDiv.appendChild(button);
    button.addEventListener('click', e => initGame(e.target, String.fromCharCode(i)));
}

DOM_ELEMENTS.categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        getRandomWord(category);
    });
});

showCategorySelection();
DOM_ELEMENTS.playAgainBtn.addEventListener('click', showCategorySelection);

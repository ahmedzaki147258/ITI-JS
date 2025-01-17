const gameState = {
    currentWord: '',
    currentCategory: '',
    correctLetters: [],
    wrongGuessCount: 0
};

export const getGameState = () => gameState;

export const resetGameState = () => {
    gameState.correctLetters = [];
    gameState.wrongGuessCount = 0;
};

export const setCurrentWord = (word) => {
    gameState.currentWord = word;
};

export const setCurrentCategory = (category) => {
    gameState.currentCategory = category;
};

export const incrementWrongGuessCount = () => {
    gameState.wrongGuessCount++;
    return gameState.wrongGuessCount;
};

export const addCorrectLetter = (letter) => {
    gameState.correctLetters.push(letter);
    return gameState.correctLetters;
};
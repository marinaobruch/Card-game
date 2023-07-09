/* eslint-disable prettier/prettier */
import { createCardsArray, dublicateArray, shuffle } from "./utils.js";

export const startGame = (initLevel) => {
    // let firstCard = null
    // let secondCard = null
    // let clickable = true

    // const gameSection = document.querySelector('.game-section__container')
    // const gameTable = document.createElement('div')
    const initCards = createCardsArray(initLevel);
    console.log(initCards);

    const dublicCards = dublicateArray(initCards);
    shuffle(dublicCards);
    console.log(dublicCards);
};

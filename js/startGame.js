import { createGameCard } from "./gameCard.js";
import { createCardsArray, dublicateArray, shuffle } from "./utils.js";

export const startGame = (initLevel) => {
    // let firstCard = null;
    // let secondCard = null;
    // let clickable = true;

    const gameSection = document.querySelector(".game-section__container");
    const gameTable = document.createElement("div");
    const initCards = createCardsArray(initLevel);
    const dublicCards = dublicateArray(initCards);
    const restartButton = document.createComment("button");

    gameSection.innerHTML = "";

    restartButton.textContent = "Начать заново";

    shuffle(dublicCards);

    dublicCards.forEach((icon) =>
        gameTable.append(createGameCard("/img/back/jpg", icon))
    );

    gameSection.append(gameTable, restartButton);

    const cards = document.querySelectorAll(".game-card");

    cards.forEach((card, index) => card.addEventListener("click", () => {}));
};

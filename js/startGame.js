import { createGameCard } from "./gameCard.js";
import { createGameMenu } from "./gameMenu.js";
import { createCardsArray, dublicateArray, shuffle } from "./utils.js";

export const startGame = (initLevel) => {
    let firstCard = null;
    let secondCard = null;
    let clickable = true;

    const headerGame = document.querySelector("header");
    const gameSection = document.querySelector(".game-section__container");

    const restartButton = document.createElement("button");
    restartButton.textContent = "Начать заново";
    restartButton.classList.add("restart-btn");

    const timer = document.createElement("div");
    timer.textContent = "00.00";
    timer.classList.add("timer-count");

    const gameTable = document.createElement("div");

    const initCards = createCardsArray(initLevel);
    const dublicCards = dublicateArray(initCards);

    gameSection.innerHTML = "";

    gameTable.classList.add("game-table");

    shuffle(dublicCards);

    dublicCards.forEach((icon) =>
        gameTable.append(createGameCard("img/back.jpg", icon))
    );

    headerGame.append(timer, restartButton);
    gameSection.append(gameTable);

    const cards = document.querySelectorAll(".game-card");

    restartButton.addEventListener("click", createGameMenu);

    cards.forEach((card, index) =>
        card.addEventListener("click", () => {
            if (clickable === true && !card.classList.contains("flip")) {
                card.classList.add("flip");

                if (firstCard === null) {
                    firstCard = index;
                } else {
                    if (index !== firstCard) {
                        secondCard = index;
                        clickable = false;
                    }
                }

                if (
                    firstCard !== null &&
                    secondCard !== null &&
                    firstCard !== secondCard
                ) {
                    if (
                        cards[firstCard].firstElementChild.src ===
                        cards[secondCard].firstElementChild.src
                    ) {
                        firstCard = null;
                        secondCard = null;
                        clickable = true;

                        alert("Ты угалал!");
                    }
                }
            } else {
                alert("Попробуй еще раз!");
                cards[firstCard].classList.remove("flip");
                cards[secondCard].classList.remove("flip");

                firstCard = null;
                secondCard = null;
                clickable = true;
            }
        })
    );
};

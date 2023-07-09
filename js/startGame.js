import { createGameCard } from "./gameCard.js";
import { createGameMenu } from "./gameMenu.js";
import { createCardsArray, dublicateArray, shuffle } from "./utils.js";

export const startGame = (initLevel) => {
    let firstCard = null;
    let secondCard = null;
    let clickable = true;

    const gameSection = document.querySelector(".game-section__container");
    const gameTable = document.createElement("div");
    const initCards = createCardsArray(initLevel);
    const dublicCards = dublicateArray(initCards);
    const restartButton = document.createElement("button");

    gameSection.innerHTML = "";
    restartButton.textContent = "Начать заново";
    restartButton.classList.add("restart-btn");
    gameTable.classList.add("game-table");

    shuffle(dublicCards);

    dublicCards.forEach((icon) =>
        gameTable.append(createGameCard("img/back.jpg", icon))
    );

    gameSection.append(gameTable, restartButton);

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

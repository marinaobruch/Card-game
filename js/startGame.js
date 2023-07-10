import { createGameCard } from "./gameCard.js";
import { createGameMenu } from "./gameMenu.js";
import { createCardsArray, dublicateArray, shuffle } from "./utils.js";
export const headerGame = document.querySelector(".header");

export const startGame = (initLevel) => {
    let firstCard = null;
    let secondCard = null;
    let clickable = true;
    let countShowCards = false;

    const restartButton = document.createElement("button");
    restartButton.textContent = "Начать заново";
    restartButton.classList.add("restart-btn");
    const timer = document.createElement("div");
    timer.textContent = "00.00";
    timer.classList.add("timer-count");

    const gameSection = document.querySelector(".game-section__container");
    const gameTable = document.createElement("div");
    gameTable.classList.add("game-table");

    const showCards = document.createElement("button");
    showCards.textContent = "Показать карты";
    showCards.classList.add("show-btn");

    const initCards = createCardsArray(initLevel);
    const dublicCards = dublicateArray(initCards);

    gameSection.innerHTML = "";
    headerGame.innerHTML = "";
    showCards.classList.remove("disabled");

    shuffle(dublicCards);

    dublicCards.forEach((icon) =>
        gameTable.append(createGameCard("img/back.jpg", icon))
    );

    headerGame.append(timer, restartButton);
    gameSection.append(gameTable, showCards);

    const cards = document.querySelectorAll(".game-card");

    restartButton.addEventListener("click", createGameMenu);

    showCards.addEventListener("click", () => {
        if (countShowCards === false) {
            setTimeout(() => {
                cards.forEach((card) => card.classList.remove("flip"));
                showCards.classList.add("disabled");
            }, 5000);
            cards.forEach((card) => card.classList.add("flip"));
            countShowCards = true;
        }
    });

    // Сравнение карт
    cards.forEach((card, index) =>
        card.addEventListener("click", () => {
            if (
                clickable === true &&
                !card.classList.contains("successfully")
            ) {
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
                        setTimeout(() => {
                            cards[firstCard].classList.add("successfully");
                            cards[secondCard].classList.add("successfully");

                            firstCard = null;
                            secondCard = null;
                            clickable = true;
                        }, 500);
                    } else {
                        setTimeout(() => {
                            cards[firstCard].classList.remove("flip");
                            cards[secondCard].classList.remove("flip");

                            firstCard = null;
                            secondCard = null;
                            clickable = true;
                        }, 500);
                    }
                }
            }
        })
    );
};

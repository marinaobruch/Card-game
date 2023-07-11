import { createGameCard } from "./gameCard.js";
import { createGameMenu } from "./gameMenu.js";
import { createCardsArray, dublicateArray, shuffle } from "./utils.js";
export const headerGame = document.querySelector(".header");
export const resultGame = document.querySelector(".result");
export const gameScreen = document.querySelector(".common");

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

    const imgResult = document.createElement("img");
    imgResult.setAttribute("src", "static/win.png");
    const headerResult = document.createElement("h3");
    headerResult.textContent = "Вы выиграли!";
    headerResult.classList.add("win-text");
    const timeResult = document.createElement("h3");
    timeResult.textContent = "Затраченное время!";
    timeResult.classList.add("time-left");

    const initCards = createCardsArray(initLevel);
    const dublicCards = dublicateArray(initCards);

    gameSection.innerHTML = "";
    headerGame.innerHTML = "";
    resultGame.innerHTML = "";
    showCards.classList.remove("disabled");

    shuffle(dublicCards);

    dublicCards.forEach((icon) =>
        gameTable.append(createGameCard("static/back.jpg", icon))
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
                            imgResult.setAttribute("src", "static/lose.png");
                            headerResult.textContent = "Вы проиграли!";
                            headerResult.classList.add("win-text");

                            resultGame.classList.add("result");
                            resultGame.append(
                                imgResult,
                                headerResult,
                                timeResult,
                                timer,
                                restartButton
                            );
                            gameScreen.classList.add("back-result");
                        }, 500);

                        // Это логика, если дальше можно продолжать игру (свернуто)
                        // setTimeout(() => {
                        //     cards[firstCard].classList.remove("flip");
                        //     cards[secondCard].classList.remove("flip");

                        //     firstCard = null;
                        //     secondCard = null;
                        //     clickable = true;
                        // }, 500);
                    }
                }
            }
            if (
                Array.from(cards).every((card) =>
                    card.className.includes("flip")
                )
            ) {
                setTimeout(() => {
                    resultGame.classList.add("result");
                    resultGame.append(
                        imgResult,
                        headerResult,
                        timeResult,
                        timer,
                        restartButton
                    );
                    gameScreen.classList.add("back-result");
                }, 500);
            }
        })
    );
};

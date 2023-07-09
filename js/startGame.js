import { createGameCard } from "./gameCard.js";
import { createCardsArray, dublicateArray, shuffle } from "./utils.js";

export const startGame = (initLevel) => {
    let firstCard = null;
    let secondCard = null;
    let clickable = true;

    const gameSection = document.querySelector(".game-section__container");
    const gameTable = document.createElement("div");
    const initCards = createCardsArray(initLevel);
    const dublicCards = dublicateArray(initCards);
    const restartButton = document.createComment("button");

    gameSection.innerHTML = "";

    restartButton.textContent = "Начать заново";
    gameTable.classList.add("game-table");

    shuffle(dublicCards);

    dublicCards.forEach((icon) =>
        gameTable.append(createGameCard("img/back.jpg", icon))
    );

    gameSection.append(gameTable, restartButton);

    const cards = document.querySelectorAll(".game-card");

    cards.forEach((card, index) =>
        card.addEventListener("click", () => {
            if (
                clickable === true &&
                !card.classList.contains("successfully")
            ) {
                card.classList.add("flip");

                if (firstCard === null) {
                    firstCard = index;
                    console.log(`FC index = ${index}`);
                } else {
                    if (index !== firstCard) {
                        secondCard = index;
                        clickable = false;
                        console.log(`SC index = ${index}`);
                    }
                }

                if (
                    firstCard !== null &&
                    secondCard !== null &&
                    firstCard !== secondCard
                )
                    setTimeout(() => {
                        if (
                            cards[firstCard].firstElementChild.className ===
                            cards[secondCard].firstElementChild.className
                        ) {
                            alert("Ты угадал!");

                            let firstCard = null;
                            let secondCard = null;
                            let clickable = true;
                        }
                    }, 500);
            } else {
                setTimeout(() => {
                    {
                        alert("Попробуй еще раз!");
                        cards[firstCard].classList.remove("flip");
                        cards[secondCard].classList.remove("flip");

                        let firstCard = null;
                        let secondCard = null;
                        let clickable = true;
                    }
                }, 500);
            }
        })
    );
};

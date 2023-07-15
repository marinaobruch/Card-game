import {
    startGame,
    headerGame,
    resultGame,
    gameScreen,
    resultContainer,
} from "./startGame.js";

const levelPage = document.querySelector(".game-section__container");

export const createGameMenu = () => {
    if (headerGame) {
        headerGame.innerHTML = "";
    }
    if (resultGame) {
        resultGame.innerHTML = "";
        resultGame.classList.remove("result");
    }
    if (resultContainer) {
        resultContainer.innerHTML = "";
        resultContainer.classList.remove("res-container");
    }
    if (gameScreen) {
        gameScreen.classList.remove("back-result");
    }

    const renderLevelPage = `
        <form class="common-block center">
            <h1 class="common-text">Выбери сложность</h1>
            <div class="common-options options-form">

                <label for="1">
                    <div class="item">
                        <input class="input" id="1" name="item" value="1" type="radio">
                        1
                    </div>
                </label>

                <label for="2">
                    <div class="item">
                        <input class="input" id="2" name="item" value="2" type="radio">
                        2
                    </div>
                </label>

                <label for="3">
                    <div class="item">
                        <input class="input" id="3" name="item" value="3" type="radio">
                        3
                    </div>
                </label>

            </div>
            <button type="submit" class="start-button" disabled>Старт</button>
        </form>
        `;

    if (levelPage) {
        levelPage.innerHTML = renderLevelPage;
    }

    const levelForm = document.querySelector(".options-form");
    const startButton = document.querySelector(".start-button");

    // Стиль на выбор кнопки
    const buttonsDifficultyLevel: NodeListOf<Element> =
        document.querySelectorAll(".item");
    //@ts-ignore
    for (const button of buttonsDifficultyLevel) {
        button.addEventListener("click", () => {
            //@ts-ignore
            for (const button of buttonsDifficultyLevel) {
                button.classList.remove("select-border");
            }
            button.classList.add("select-border"); // проверить корректность работы
        });
    }

    // Выключение кнопки до выбора уровня
    function checkIsLevel() {
        if (levelForm && startButton) {
            levelForm.addEventListener("change", (event) => {
                //@ts-ignore
                if (event.target.matches('input[type="radio"]')) {
                    //@ts-ignore
                    startButton.disabled = false;
                }
            });
        }
    }
    checkIsLevel();

    function choiseLevel() {
        if (startButton) {
            startButton.addEventListener("click", () => {
                if (levelForm) {
                    //@ts-ignore
                    const initLevel = levelForm.querySelector(
                        'input[type="radio"]:checked'
                        //@ts-ignore
                    ).value;

                    console.log(initLevel);
                    startGame(initLevel);
                }
            });
        }
    }
    choiseLevel();
};

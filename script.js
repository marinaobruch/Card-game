import { startGame } from "./js/startGame.js";

const levelPage = document.querySelector(".game-section__container");

const renderGame = () => {
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

    levelPage.innerHTML = renderLevelPage;

    const levelForm = document.querySelector(".options-form");
    const startButton = document.querySelector(".start-button");

    // Стиль на выбор кнопки
    const buttonsDifficultyLevel = document.querySelectorAll(".item");
    for (const button of buttonsDifficultyLevel) {
        button.addEventListener("click", function () {
            for (const button of buttonsDifficultyLevel) {
                button.classList.remove("select-border");
            }
            this.classList.add("select-border");
        });
    }

    // Выключение кнопки до выбора уровня
    function checkIsLevel() {
        levelForm.addEventListener("change", (event) => {
            if (event.target.matches('input[type="radio"]')) {
                startButton.disabled = false;
            }
        });
    }
    checkIsLevel();

    function choiseLevel() {
        startButton.addEventListener("click", () => {
            const initLevel = levelForm.querySelector(
                'input[type="radio"]:checked'
            ).value;

            console.log(initLevel);

            // if (initLevel === '1') {
            //     levelPage.innerHTML = 'level 1'
            // } else if (initLevel === '2') {
            //     levelPage.innerHTML = 'level 2'
            // } else {
            //     levelPage.innerHTML = 'level 3'
            // }

            startGame(initLevel);
        });
    }
    choiseLevel();
};

renderGame();

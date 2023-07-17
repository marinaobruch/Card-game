import {
    startGame,
    headerGame,
    resultGame,
    gameScreen,
    resultContainer,
} from "./startGame";

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
                        <input class="input" id="1" name="item" value="6" type="radio">
                        1
                    </div>
                </label>

                <label for="2">
                    <div class="item">
                        <input class="input" id="2" name="item" value="12" type="radio">
                        2
                    </div>
                </label>

                <label for="3">
                    <div class="item">
                        <input class="input" id="3" name="item" value="18" type="radio">
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

    const levelForm = document.querySelector<HTMLElement>(".options-form");
    const startButton =
        document.querySelector<HTMLButtonElement>(".start-button");

    // Стиль на выбор кнопки
    const buttonsDifficultyLevel = document.querySelectorAll(".item");
    for (const button of buttonsDifficultyLevel) {
        button.addEventListener("click", () => {
            for (const button of buttonsDifficultyLevel) {
                button.classList.remove("select-border");
            }
            button.classList.add("select-border");
        });
    }

    // Выключение кнопки до выбора уровня
    function checkIsLevel() {
        if (levelForm && startButton) {
            levelForm.addEventListener("change", () => {
                if ('input[type="radio"]') {
                    startButton.disabled = false;
                }
            });
        }
    }
    checkIsLevel();

    if (startButton) {
        startButton.onclick = () => {
            if (levelForm) {
                const levels: NodeListOf<HTMLInputElement> =
                    document.querySelectorAll('input[name="item"]');
                for (const level of levels) {
                    if (level.checked) {
                        const initLevel = Number(level.value);
                        console.log(initLevel);
                        startGame(initLevel);
                    }
                }
            }
        };
    }
};

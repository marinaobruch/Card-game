const levelPage = document.querySelector(".level");

const renderGame = () => {

    const renderLevelPage = `
        <form class="common__block center">
        <h1 class="common__block_text">Выбери сложность</h1>
        <div class="common__block_options options-form">

            <label for="1">
                <div class="common__block_item common__block_item-first">
                    <input class="common__block_input" id="1" name="item" value="1" type="radio">
                    1
                </div>
            </label>

            <label for="2">
                <div class="common__block_item common__block_item-second">
                    <input class="common__block_input" id="2" name="item" value="2" type="radio">
                    2
                </div>
            </label>

            <label for="3">
                <div class="common__block_item common__block_item-third">
                    <input class="common__block_input" id="3" name="item" value="3" type="radio">
                    3
                </div>
            </label>

        </div>
        <button type="submit" class="common__block_options-button start-button">Старт</button>
        </form>
        `

    levelPage.innerHTML = renderLevelPage;

    const levelForm = document.querySelector(".options-form");
    const startButton = document.querySelector(".start-button");

    function choiseLevel() {
        startButton.addEventListener('click', () => {
            const level = levelForm.querySelector('input[type="radio"]:checked').value;

            if (level === 1) {
                levelPage.innerHTML = `level 1`;
            } else if (level === 2) {
                levelPage.innerHTML = `level 2`;
            } else {
                levelPage.innerHTML = `level 3`;
            }

        })
    }
    choiseLevel();

}

renderGame();
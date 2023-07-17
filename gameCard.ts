export const createGameCard = (
    defaultIcon: object | string,
    flippedCardIcon: object | string
) => {
    const card = document.createElement("div");
    card.classList.add("game-card");

    const notFlippedCardI = document.createElement("img");
    const flippedCardI = document.createElement("img");

    notFlippedCardI.setAttribute("src", `${defaultIcon}`);
    flippedCardI.setAttribute("src", `${flippedCardIcon}`);

    card.append(flippedCardI, notFlippedCardI);

    return card;
};

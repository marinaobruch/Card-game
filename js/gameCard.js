export const createGameCard = (backCard, frontCard) => {
    const card = document.createElement("div");
    card.classList.add("game-card");

    const notFlippedCardEl = document.createElement("i");
    const flippedCardEl = document.createElement("i");

    notFlippedCardEl.classList.add("fa", `fa-${backCard}`);
    flippedCardEl.classList.add("fa", `fa-${frontCard}`);

    card.append(flippedCardEl, notFlippedCardEl);

    return card;
};

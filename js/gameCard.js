export const createGameCard = (cardEl) => {
    const card = document.createElement("div");
    card.classList.add("game-card");

    const notFlippedCardEl = document.createElement("i");
    const flippedCardEl = document.createElement("i");
    // flippedCardEl.textContent = `${cardEl}`;
    flippedCardEl.classList.add(`${cardEl}`);

    card.append(flippedCardEl, notFlippedCardEl);

    return card;
};

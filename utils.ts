import * as _ from "lodash";

// Перемешивание карт
export const shuffle = (arr: Array<string>) => {
    let currentIndex = arr.length,
        randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex],
            arr[currentIndex],
        ];
    }

    return arr;
};

// Дубликаты
export const dublicateArray = (arr: Array<string>) =>
    arr.reduce<Array<string>>(
        (res, current) => res.concat([current, current]),
        []
    );

export const createCardsArray = (initLevel: number) => {
    const cardsIcons = [
        "static/6_baptize.png",
        "static/7_baptize.png",
        "static/8_baptize.png",
        "static/9_baptize.png",
        "static/10_baptize.png",
        "static/jack_baptize.png",
        "static/queen_baptize.png",
        "static/king_baptize.png",
        "static/ace_baptize.png",
        "static/6_bubi.png",
        "static/7_bubi.png",
        "static/8_bubi.png",
        "static/9_bubi.png",
        "static/10_bubi.png",
        "static/jack_bubi.png",
        "static/queen_bubi.png",
        "static/king_bubi.png",
        "static/ace_bubi.png",
        "static/6_hearst.png",
        "static/7_hearst.png",
        "static/8_hearst.png",
        "static/9_hearst.png",
        "static/10_hearst.png",
        "static/jack_hearst.png",
        "static/queen_hearst.png",
        "static/king_hearst.png",
        "static/ace_hearst.png",
        "static/6_spades.png",
        "static/7_spades.png",
        "static/8_spades.png",
        "static/9_spades.png",
        "static/10_spades.png",
        "static/jack_spades.png",
        "static/queen_spades.png",
        "static/king_spades.png",
        "static/ace_spades.png",
    ];

    const shuffledCards = _.shuffle(cardsIcons);
    const slicedArray = shuffledCards.slice(0, initLevel / 2);
    const duplicatedArray = _.concat(slicedArray, slicedArray);
    return _.shuffle(duplicatedArray);
};

export const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};

export const dublicateArray = (array) =>
    array.reduce((res, current) => res.concat([current, current]), []);

export const createCardsArray = (initLevel) => {
    const cardsIcons = [
        "img/6_baptize.png",
        "img/7_baptize.png",
        "img/8_baptize.png",
        "img/9_baptize.png",
        "img/10_baptize.png",
        "img/jack_baptize.png",
        "img/6_baptize.png",
        "img/7_baptize.png",
        "img/8_baptize.png",
        "img/9_baptize.png",
        "img/10_baptize.png",
        "img/jack_baptize.png",
    ];

    switch (initLevel) {
        case "1":
            return cardsIcons.slice(0, 3);
        case "2":
            return cardsIcons.slice(0, 6);
        case "3":
            return cardsIcons.slice(0, 9);
        default:
            break;
    }
};

// const cardsIcons1 = [
//     {
//         name: '6_baptize',
//         img: 'img/6_baptize.png',
//     },
//     {
//         name: '7_baptize',
//         img: 'img/7_baptize.png',
//     },
//     {
//         name: '8_baptize',
//         img: 'img/8_baptize.png',
//     },
//     {
//         name: '9_baptize',
//         img: 'img/9_baptize.png',
//     },
//     {
//         name: '10_baptize',
//         img: 'img/10_baptize.png',
//     },
//     {
//         name: 'jack_baptize',
//         img: 'img/jack_baptize.png',
//     },
//     {
//         name: 'queen_baptize',
//         img: 'img/queen_baptize.png',
//     },
//     {
//         name: 'king_baptize',
//         img: 'img/king_baptize.png',
//     },
//     {
//         name: 'ace_baptize',
//         img: 'img/ace_baptize.png',
//     },

//     {
//         name: '6_bubi',
//         img: 'img/6_bubi.png',
//     },
//     {
//         name: '7_bubi',
//         img: 'img/7_bubi.png',
//     },
//     {
//         name: '8_bubi',
//         img: 'img/8_bubi.png',
//     },
//     {
//         name: '9_bubi',
//         img: 'img/9_bubi.png',
//     },
//     {
//         name: '10_bubi',
//         img: 'img/10_bubi.png',
//     },
//     {
//         name: 'jack_bubi',
//         img: 'img/jack_bubi.png',
//     },
//     {
//         name: 'queen_bubi',
//         img: 'img/queen_bubi.png',
//     },
//     {
//         name: 'king_bubi',
//         img: 'img/king_bubi.png',
//     },
//     {
//         name: 'ace_bubi',
//         img: 'img/ace_bubi.png',
//     },

//     {
//         name: '6_hearst',
//         img: 'img/6_hearst.png',
//     },
//     {
//         name: '7_hearst',
//         img: 'img/7_hearst.png',
//     },
//     {
//         name: '8_hearst',
//         img: 'img/8_hearst.png',
//     },
//     {
//         name: '9_hearst',
//         img: 'img/9_hearst.png',
//     },
//     {
//         name: '10_hearst',
//         img: 'img/10_hearst.png',
//     },
//     {
//         name: 'jack_hearst',
//         img: 'img/jack_hearst.png',
//     },
//     {
//         name: 'queen_hearst',
//         img: 'img/queen_hearst.png',
//     },
//     {
//         name: 'king_hearst',
//         img: 'img/king_hearst.png',
//     },
//     {
//         name: 'ace_hearst',
//         img: 'img/ace_hearst.png',
//     },

//     {
//         name: '6_spades',
//         img: 'img/6_spades.png',
//     },
//     {
//         name: '7_spades',
//         img: 'img/7_spades.png',
//     },
//     {
//         name: '8_spades',
//         img: 'img/8_spades.png',
//     },
//     {
//         name: '9_spades',
//         img: 'img/9_spades.png',
//     },
//     {
//         name: '10_spades',
//         img: 'img/10_spades.png',
//     },
//     {
//         name: 'jack_spades',
//         img: 'img/jack_spades.png',
//     },
//     {
//         name: 'queen_spades',
//         img: 'img/queen_spades.png',
//     },
//     {
//         name: 'king_spades',
//         img: 'img/king_spades.png',
//     },
//     {
//         name: 'ace_spades',
//         img: 'img/ace_spades.png',
//     },
// ]

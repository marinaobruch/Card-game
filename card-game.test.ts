const { it, expect } = require("@jest/globals");
const { createCardsArray, dublicateArray } = require("./utils");

it("should create dublicate array", () => {
    const someArray = [1, 2, 3];
    const expected = someArray;
    const expected2 = dublicateArray(someArray);
    expect(expected).not.toEqual(expected2);
});

it("should create different arrays because of random function", () => {
    const initLevel = 12;
    const expected = createCardsArray(initLevel);
    const expected2 = createCardsArray(initLevel);
    expect(expected).not.toEqual(expected2);
});

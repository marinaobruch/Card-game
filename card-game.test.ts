const { it, expect } = require("@jest/globals");
const { createCardsArray, shuffle } = require("./utils");

it("should create different arrays because of random function", () => {
    const initLevel = 12;
    const expected = createCardsArray(initLevel);
    const expected2 = createCardsArray(initLevel);
    expect(expected).not.toEqual(expected2);
});

it("should create different array that contain the same objects", () => {
    const someArray = ["one", "two", "three", "four", "five"];
    const received = someArray;
    expect(received).toContain("one", "two", "three", "four", "five");
});

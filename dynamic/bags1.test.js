const { expect } = require('@jest/globals');
const maxBags = require('./bags1');

var water = { weight: 3, value: 10, name: "water" };
var book = { weight: 1, value: 3, name: "book" };
var food = { weight: 2, value: 9, name: "food" };
var jack = { weight: 2, value: 5, name: "jack" };
var cenema = { weight: 1, value: 6, name: "cenema" };

test('should get correct result', () => {
    const allThing = [water, book, food, jack, cenema];
    const result = maxBags(allThing, 6, 1);
    expect(result).toStrictEqual(["water", "food", "cenema"])
})

test('should get correct result', () => {
    const allThing = [water, book, food];
    const result = maxBags(allThing, 3, 1);
    expect(result).toStrictEqual(["book", "food"])
})

test('should get correct result', () => {
    const allThing = [water, book];
    const result = maxBags(allThing, 3, 1);
    expect(result).toStrictEqual(["water"])
})

test('should get correct result with empty', () => {
    const allThing = [];
    const result = maxBags(allThing, 3, 1);
    expect(result).toStrictEqual([])
})


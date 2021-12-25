require('util').inspect.defaultOptions.depth = null

var water = {weight:3, value:10, name: 'water'}
var book = {weight:1, value:3, name: 'book'}
var food = {weight:2, value:9, name: 'food'}
var jack = {weight:2, value:5, name: 'jack'}
var cenema = {weight:1, value:6, name: 'cenema'}
var allThing = [water, book, food, jack, cenema]

const empty = {
    names: [],
    value: 0,
};

function getElseGoods(i, j, matrix, things) {
    const thing = things[i]
    const elseIndex = j - thing.weight
    if (matrix[i-1] && matrix[i-1][elseIndex]) {
        return matrix[i - 1][elseIndex];
    }
    return empty;
}

function getLastGoods(i, j, matrix) {
    if (matrix[i - 1] && matrix[i-1][j]) {
         return matrix[i-1][j]
    }
    return empty;
}

function getMaxThings (i, j, matrix, things) {
    const thing = things[i]
    const elseGoods = getElseGoods(i, j, matrix, things)
    const lastGoods = getLastGoods(i, j, matrix)
    const newValue = thing.value + elseGoods.value
    if (thing.weight <= j && newValue > lastGoods.value) {
        return {
            names: [...elseGoods.names, thing.name],
            value: newValue
        }
    }
    return lastGoods
}

function maxBags(things) {
    const matrix = []
    for (var i = 0; i < things.length; i++) {
        for (var j = 1; j <= 6; j++) {
            if (!matrix[i]) {
                matrix[i] = []
            }
            matrix[i][j] = getMaxThings(i, j, matrix, things)
        }
    }
    return matrix
}

const result = maxBags(allThing)

console.log(result)
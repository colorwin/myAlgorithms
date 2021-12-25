var water = {weight:3, value:10, name: 'water'}
var book = {weight:1, value:3, name: 'book'}
var food = {weight:2, value:9, name: 'food'}
var jack = {weight:2, value:5, name: 'jack'}
var cenema = {weight:1, value:6, name: 'cenema'}
var things = [water, book, food, jack, cenema]

var matrix = []

function getMaxThings (i, j) {
    const thing = things[i]
    if (thing.weight <= j) {
        if (matrix[i-1]) {
            const elseGoods = matrix[i - 1][j - thing.weight] || {
                names: [],
                value: 0,
            }
            const newValue = thing.value + elseGoods.value
            const lastGoods = matrix[i-1][j]
            if (newValue > lastGoods.value) {
                return {
                    names: [...elseGoods.names, thing.name],
                    value: newValue
                }
            }
            return lastGoods
        }
        return {
            names: [thing.name],
            value: thing.value
        }
    }
    if (matrix[i-1] && matrix[i-1][j]) {
      return matrix[i-1][j]
    }
    return {
        names: [],
        value: 0,
    };
}

for (var i = 0; i < things.length; i++) {
    for (var j = 1; j <= 6; j++) {
        if (!matrix[i]) {
            matrix[i] = []
        }
        matrix[i][j] = getMaxThings(i, j)
    }
}

console.log(matrix, matrix[things.length - 1][6])
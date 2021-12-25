var water = {weight:3, value:10, name: 'water'}
var book = {weight:1, value:3, name: 'book'}
var food = {weight:2, value:9, name: 'food'}
var jack = {weight:2, value:5, name: 'jack'}
var cenema = {weight:1, value:6, name: 'cenema'}
var things = [water, book, food, jack, cenema]

const matrix = []

function bestThing(targets, bags) {
    const len = targets.length;
    if (matrix[len] && matrix[len][bags]) {
        return matrix[len][bags]
    }
    if (bags === 1) {
        for (var i = 0; i < targets.length; i++) {

        }
    }


}

bestThing(things, 6)
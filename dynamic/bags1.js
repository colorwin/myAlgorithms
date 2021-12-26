
const empty = {
  names: [],
  value: 0,
};

function getElseGoods(i, j, matrix, thing) {
  const elseIndex = j - thing.weight;
  if (matrix[i - 1] && matrix[i - 1][elseIndex]) {
    return matrix[i - 1][elseIndex];
  }
  return empty;
}

function getLastGoods(i, j, matrix) {
  if (matrix[i - 1] && matrix[i - 1][j]) {
    return matrix[i - 1][j];
  }
  return empty;
}

function getMaxThings(i, j, matrix, things) {
  const thing = things[i];
  const elseGoods = getElseGoods(i, j, matrix, thing);
  const lastGoods = getLastGoods(i, j, matrix);
  const newValue = thing.value + elseGoods.value;
  if (thing.weight <= j && newValue > lastGoods.value) {
    return {
      names: [...elseGoods.names, thing.name],
      value: newValue,
    };
  }
  return lastGoods;
}

function maxBags(things, limit, step = 1) {
  const matrix = [];
  for (var i = 0; i < things.length; i++) {
    matrix[i] = [];
    var j = step;
    while (j <= limit) {
      matrix[i][j] = getMaxThings(i, j, matrix, things);
      j = j + step;
    }
  }
  if (matrix[i - 1] && matrix[i - 1][j - 1]) {
    return matrix[i - 1][j - 1].names;
  }
  return empty.names;
}

module.exports = maxBags;
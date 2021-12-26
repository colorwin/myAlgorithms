function addOne(i, j, matrix) {
  if (matrix[i - 1] && matrix[i - 1][j - 1]) {
    return matrix[i - 1][j - 1] + 1;
  }
  return 1;
}

function getMaxLast(matrix, i, j) {
  if (matrix[i - 1] && matrix[i - 1][j] && matrix[i] && matrix[i][j - 1]) {
    return Math.max(matrix[i - 1][j], matrix[i][j - 1]);
  }
  if (matrix[i] && matrix[i][j - 1]) {
    return matrix[i][j - 1];
  }
  if (matrix[i - 1] && matrix[i - 1][j]) {
    return matrix[i - 1][j];
  }
  return 0;
}

function getMax(i, j, matrix, a, b) {
  if (a[j] === b[j]) {
    return addOne(i, j, matrix);
  }
  return getMaxLast(matrix, i, j);
}

function longCommonSubsequence(a, b) {
  let matrix = [];
  for (var i = 0; i < a.length; i++) {
    matrix[i] = [];
    for (var j = 0; j < b.length; j++) {
      matrix[i][j] = getMax(i, j, matrix, a, b);
    }
  }
  if (matrix[i-1] && matrix[i - 1][j - 1]) {
    return matrix[i - 1][j - 1];
  }
  return 0;
}

module.exports = longCommonSubsequence;
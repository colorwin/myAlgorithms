function addOne(i, j, matrix) {
    if (matrix[i - 1] && matrix[i - 1][j - 1]) {
        return matrix[i - 1][j - 1] + 1;
    }
    return 1;
}

function getMax(i, j, matrix, a, b) {
    if (a[j] === b[j]) {
        return addOne(i, j, matrix)
    } else {
        return 0
    }
}

function longCommonStrings (a, b) {
    let  max = 0;
    let matrix = []
    for (let i = 0; i < a.length; i++) {
        matrix[i] = [];
        for (let j = 0; j < b.length; j++) {
            const newMax = getMax(i, j, matrix, a, b)
            max = Math.max(newMax, max);
            matrix[i][j] = newMax;
        }
    }
    return max;
}

module.exports = longCommonStrings
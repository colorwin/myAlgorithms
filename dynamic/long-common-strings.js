function addOne(i, j, matrix) {
    if (matrix[i - 1] && matrix[i - 1][j - 1]) {
        return matrix[i - 1][j - 1] + 1;
    }
    return 1;
}

function longCommonStrings (a, b) {
    let  max = 0;
    let matrix = []
    for (let i = 0; i < a.length; i++) {
        matrix[i] = [];
        for (let j = 0; j < b.length; j++) {
            if (a[j] === b[j]) {
                const newMax = addOne(i, j, matrix)
                max = Math.max(newMax, max);
                matrix[i][j] = newMax;
            } else {
                matrix[i][j] = 0
            }
        }
    }
    return max;
}

module.exports = longCommonStrings;

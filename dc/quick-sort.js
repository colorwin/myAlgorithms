function quickSort (array) {
    if (array.length === 0) {
        return array
    }
    if (array.length === 1) {
        return array
    }
    const main = array[0]
    const left = []
    const right = []
    for (let i = 1; i < array.length; i++) {
        const item = array[i];
        if (item < main) {
            left.push(item)
        } else {
            right.push(item)
        }
    }
    return [...quickSort(left), main, ...quickSort(right)];
}

module.exports = quickSort;


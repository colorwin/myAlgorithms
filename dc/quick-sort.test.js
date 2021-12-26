const quickSort = require('./quick-sort')

test('get correct result', () => {
    const result = quickSort([6,2,3, 4,1,5])
    expect(result).toStrictEqual([1,2,3,4,5,6])
})

test('get correct result', () => {
    const result = quickSort([1,2,3,4,5])
    expect(result).toStrictEqual([1,2,3,4,5])
})

test('get correct result', () => {
    const result = quickSort([4,3,2,1])
    expect(result).toStrictEqual([1,2,3,4])
})

test('get correct result with one item array', () => {
    const result = quickSort([1])
    expect(result).toStrictEqual([1])
})

test('get correct result with empty array', () => {
    const result = quickSort([])
    expect(result).toStrictEqual([])
})

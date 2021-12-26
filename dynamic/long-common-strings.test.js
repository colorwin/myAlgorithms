const longCommonStrings = require('./long-common-strings1');

test('should get correct result', () => {
    const result = longCommonStrings('hish', 'fish')
    expect(result).toBe(3)
})

test('should get correct result with nonsequence strings', () => {
    const result = longCommonStrings('abcdhish', 'abcdfish')
    expect(result).toBe(4)
})

test('should get correct result with empty strings', () => {
    const result = longCommonStrings('', '')
    expect(result).toBe(0)
})
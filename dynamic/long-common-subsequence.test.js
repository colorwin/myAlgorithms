const longCommonSubsequence = require('./long-common-subsequence')
test('get correct result with nonsequence string', () => {
    const result = longCommonSubsequence("abcdhish", "abcdfish");
    expect(result).toBe(7)
})

test('get correct result', () => {
    const result = longCommonSubsequence("fish", "nish");
    expect(result).toBe(3)
})

test('get correct result with empty string', () => {
    const result = longCommonSubsequence("", "");
    expect(result).toBe(0)
})
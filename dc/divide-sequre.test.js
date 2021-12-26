const { expect } = require('@jest/globals');
const divideSequre = require('./divide-sequre');

test('should get corrlt result', () => {
    const result = divideSequre(1680, 640);
    expect(result).toBe(80)
})

test('should get corrlt result', () => {
    const result = divideSequre(100, 50);
    expect(result).toBe(50)
})

test('should get corrlt result', () => {
    const result = divideSequre(2000, 5);
    expect(result).toBe(5)
})
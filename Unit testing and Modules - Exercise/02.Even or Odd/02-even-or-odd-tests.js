const isOddOrEven = require('./02-even-or-odd');

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return 'even';
    }

    return 'odd';
}

module.exports = isOddOrEven;

const assert = require('chai').assert;

describe('isOddOrEven Tests', function () {
    it('should return undefined if input is not a string', function () {
        assert.isUndefined(isOddOrEven(true));
        assert.isUndefined(isOddOrEven(3));
        assert.isUndefined(isOddOrEven([]));
        assert.isUndefined(isOddOrEven({}));
    });

    it('should return even if string length is even', function () {
        const expected = 'even';
        const actual = isOddOrEven('even');

        assert.equal(actual, expected);
    });

    it('should return odd if string length is odd', function () {
        const expected = 'odd';
        const actual = isOddOrEven('odd');

        assert.equal(actual, expected);
    });
});
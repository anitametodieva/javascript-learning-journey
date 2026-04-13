const { expect } = require('chai');
const isOddOrEven = require('../isOddOrEven'); 
// ако пътят е друг: './isOddOrEven' или '../isOddOrEven'

describe('isOddOrEven', function () {

    it('returns undefined when parameter is not a string', function () {
        expect(isOddOrEven(5)).to.equal(undefined);
        expect(isOddOrEven({})).to.equal(undefined);
    });

    it('returns "even" when string length is even', function () {
        expect(isOddOrEven('aa')).to.equal('even');     // length 2
        expect(isOddOrEven('abcd')).to.equal('even');   // length 4
    });

    it('returns "odd" when string length is odd', function () {
        expect(isOddOrEven('a')).to.equal('odd');       // length 1
        expect(isOddOrEven('abc')).to.equal('odd');     // length 3
    });

    it('works correctly with multiple calls', function () {
        expect(isOddOrEven('a')).to.equal('odd');
        expect(isOddOrEven('aa')).to.equal('even');
        expect(isOddOrEven('aaa')).to.equal('odd');
    });
});
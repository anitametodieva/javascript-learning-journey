const { expect } = require('chai');
const lookupChar = require('../charLookup'); 

describe('lookupChar', function () {

    it('returns undefined if first parameter is not a string', function () {
        expect(lookupChar(5, 0)).to.equal(undefined);
        expect(lookupChar({}, 1)).to.equal(undefined);
    });

    it('returns undefined if second parameter is not an integer', function () {
        expect(lookupChar('test', '1')).to.equal(undefined);
        expect(lookupChar('test', 1.5)).to.equal(undefined);
    });

    it('returns "Incorrect index" for negative index', function () {
        expect(lookupChar('test', -1)).to.equal('Incorrect index');
    });

    it('returns "Incorrect index" for index equal to string length', function () {
        expect(lookupChar('test', 4)).to.equal('Incorrect index');
    });

    it('returns "Incorrect index" for index greater than string length', function () {
        expect(lookupChar('test', 10)).to.equal('Incorrect index');
    });

    it('returns correct character for valid parameters', function () {
        expect(lookupChar('test', 0)).to.equal('t');
        expect(lookupChar('test', 1)).to.equal('e');
        expect(lookupChar('abc', 2)).to.equal('c');
    });

});
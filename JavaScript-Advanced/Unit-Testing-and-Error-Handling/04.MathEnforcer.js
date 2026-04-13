const { expect } = require('chai');
const mathEnforcer = require('../mathEnforcer');

describe('mathEnforcer', () => {
  describe('addFive', () => {
    it('returns undefined for non-number', () => {
      expect(mathEnforcer.addFive('5')).to.equal(undefined);
      expect(mathEnforcer.addFive(null)).to.equal(undefined);
      expect(mathEnforcer.addFive([])).to.equal(undefined);
    });

    it('works with integers and negatives', () => {
      expect(mathEnforcer.addFive(5)).to.equal(10);
      expect(mathEnforcer.addFive(-5)).to.equal(0);
    });

    it('works with floating point numbers', () => {
      expect(mathEnforcer.addFive(1.25)).to.be.closeTo(6.25, 0.01);
    });
  });

  describe('subtractTen', () => {
    it('returns undefined for non-number', () => {
      expect(mathEnforcer.subtractTen('10')).to.equal(undefined);
      expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined);
    });

    it('works with integers and negatives', () => {
      expect(mathEnforcer.subtractTen(20)).to.equal(10);
      expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
    });

    it('works with floating point numbers', () => {
      expect(mathEnforcer.subtractTen(10.5)).to.be.closeTo(0.5, 0.01);
    });
  });

  describe('sum', () => {
    it('returns undefined if any param is not a number', () => {
      expect(mathEnforcer.sum('1', 2)).to.equal(undefined);
      expect(mathEnforcer.sum(1, '2')).to.equal(undefined);
      expect(mathEnforcer.sum([], 2)).to.equal(undefined);
    });

    it('works with integers and negatives', () => {
      expect(mathEnforcer.sum(1, 2)).to.equal(3);
      expect(mathEnforcer.sum(-1, -2)).to.equal(-3);
    });

    it('works with floating point numbers', () => {
      expect(mathEnforcer.sum(1.1, 2.2)).to.be.closeTo(3.3, 0.01);
    });
  });
});
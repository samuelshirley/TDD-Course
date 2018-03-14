const assert = require('assert');
const Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.add', () => {
    it('returns the value of two numbers added together', () => {
      const expected = 5;

      const answer = Calculate.add(2, 3);

       assert.equal(expected, answer);
    });
  });

  describe('.subtract', () => {
    it('returns the difference of the first number minus the second number', () => {
      const expected = 5;

      const answer = Calculate.subtract(10, 5);

      assert.equal(expected, answer);
    });
  });

  describe('.multiply', () => {
    it('returns the product of two numbers', () => {
      const expected = 24;

      const answer = Calculate.multiply(6, 4);

      assert.equal(expected, answer);
    });
  });

  describe('.divide', () => {
    it('returns the first number divided by the second number', () => {
      const expected = 2;

      const answer = Calculate.divide(10, 5);

      assert.equal(expected, answer);
    });

    it('throws an error when divisor is 0', () => {
      const dividend = 5;
      const divisor = 0;

      assert.throws(() => {
        Calculate.divide(dividend, divisor);
      },
        Error
      );
    });
  });

  describe('.absoluteValue', () => {
    it('returns the absolute value of the input number', () => {
      const expected = 24;

      const answer = Calculate.absoluteValue(-24);

      assert.equal(expected, answer);
    });
  });
});

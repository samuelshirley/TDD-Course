const assert = require('assert');
const Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns the factorial of a number', () => {
      const inputNumber = 5;
      const expected = 120;

      const result = Calculate.factorial(inputNumber);

      assert.equal(result, expected);
    })

    it('returns the factorial of a number', () => {
      const inputNumber = 3;
      const expected = 6;

      const result = Calculate.factorial(inputNumber);

      assert.equal(result, expected);
    })

    it('returns 1 when you pass in 0', () => {
      const inputNumber = 0;
      const expected = 1;

      const result = Calculate.factorial(inputNumber);

      assert.equal(result, expected);
    })
  })



  describe('.sum',() => {
    it('returns the sum of an array of numbers', () => {
      const expectedResult = 6;
      const inputArray = [1,2,3]

      const result = Calculate.sum(inputArray)

      assert.equal(result, expectedResult);
    });

    it('returns the sum of a four item list', ()=>{
      const expectedResult = 22;
      const inputArray = [4,6,5,7];

      const result = Calculate.sum(inputArray);

      assert.equal(result, expectedResult)

    });

    it('returns the sum of a four item list', ()=>{
       const expectedResult = 0;
       const inputArray = [];
       const result = Calculate.sum(inputArray);
       assert.equal(result, expectedResult)
    });
  });



  describe('.add', () => {
    it('returns the value of two numbers added together', () => {
      const inputOne = 3;
      const inputTwo = 2;
      const expected = 5;

      const result = Calculate.add(inputOne, inputTwo);

      assert.equal(result, expected);
    })
  })



  describe('.subtract', () => {
    it('returns the difference of the first number minus the second number', () => {
      const inputOne = 10;
      const inputTwo = 4;
      const expected = 6;

      const result = Calculate.subtract(inputOne, inputTwo);

      assert.equal(result, expected);
    })

  })



  describe('.multiply', () => {
    it('returns the product of two numbers', () => {
      const inputOne = 7;
      const inputTwo = 8;
      const expected = 56;

      const result = Calculate.multiply(inputOne, inputTwo);

      assert.equal(result, expected);
    })
  })



  describe('.divide', () => {
    it('returns the first number divided by the second number', () => {
      const dividend = 10;
      const divisor = 5;
      const expected = 2;

      const result = Calculate.divide(dividend, divisor);

      assert.equal(result, expected);
    })

    it("returns an exception when the divisor is 0", () => {
      const dividend = 8;
      const divisor = 0;
      expected = Error;

      const exercise = () => Calculate.divide(dividend, divisor);

      assert.throws(exercise, expected);
    })
  })



  describe('.absoluteValue', () => {
    it('returns the absolute value of the input number', () => {
      const inputOne = -5;
      const expected = 5;

      const result = Calculate.absoluteValue(inputOne);

      assert.equal(result, expected);
    })
  })

  describe('.exponential', () => {
    it('returns the result of a base raised to a power', () => {

    })

    it('returns a 1 if the exponent is 0', () => {
      base = 1;
      exponent = 0;

      const zeroResult = Calculate.exponential(base, exponent);

      if(exponent === 0){
        return 1;
      }
    })
  })

  describe('.max', () => {
    it('returns the maximum number in an array', () => {
      const expectedMaxNumber = 3;
      const input = [1, 2, 3];

      const equation = Calculate.max(input);

      assert.equal(equation, expectedMaxNumber);
    })
    it('throws an error if the array is empty', () => {
      input = [0];
      const zeroResult = Calculate.max(input);
      const arrayLength = input.length;

      if (arrayLength === 0){
        throw Error;
      }
    })
  })

  describe('.min', () => {
    it('returns the minimuym number in an array', () => {
      const expectedMinNumber =1;
      const input = [1, 2, 3];

      const equation = Calculate.min(input);

      assert.equal(equation, expectedMinNumber);
    })

    it('throws an error if the array is empty', () => {
      input = [0];

      const zeroResult = Calculate.min(input);
      const arrayLength = input.length;

      if(arrayLength === 0){
        return Error;
      }
    })
  })

  describe('.average', () => {
    it('returns the average value of an array', () => {
      const expected = 6;
      const inputArray = [10, 3, 5];

      const equation = Calculate.average(inputArray);

      assert.equal(equation, expected);
    })
  })












});

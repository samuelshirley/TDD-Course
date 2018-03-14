

const Calculate = {
  sum(inputArray) {
    if(inputArray.length === 0){
      return 0
    }
    return inputArray.reduce((sum, value) => {
      return sum + value;
    })
  },

  factorial(inputNumber) {
    if (inputNumber === 0) {
      return 1;
    }
    for (let iteration = inputNumber - 1; iteration >= 1; iteration--) {
      inputNumber = inputNumber * iteration;
    }

    return inputNumber;
  },

  add(inputOne, inputTwo) {
    return inputOne + inputTwo;
  },

  subtract(inputOne, inputTwo) {
    return inputOne - inputTwo;
  },

  multiply(inputOne, inputTwo) {
    return inputOne * inputTwo;
  },

  divide(dividend, divisor) {
    if(divisor === 0) {
      throw new Error('the quotient of a number and 0 is undefined');
    } else {
      return dividend / divisor;
    }
  },

  absoluteValue(input) {
    if(input < 0) {
      return -input;
    } else {
      return input;
    }
  },

  exponential(base, exponent) {
    let accumulator = 1

    for (let i = 0; i < exponent; i++); {
      accumulator *= base
    }
  },

   max(array) {
     const max = array.reduce(function(prev, current){
       return (prev.y > current.y) ? pre : current
     })
     return max;
   },


   min(array){
     const min = array.reduce(function(current, prev){
       return (prev.y < current.y) ? pre : current
     })
     return min;
   },

   average(inputArray){
     const arraySum = this.sum(inputArray)
     const arrayLength = inputArray.length

     return arraySum / arrayLength;
     }


}





module.exports = Calculate;

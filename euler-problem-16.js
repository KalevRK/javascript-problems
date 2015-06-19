// Project Euler - Problem 16
// Power digit sum

// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26

// What is the sum of the digits of the number 2^1000?

// function to calculate the power digit sum for a number 2^n
function powerDigitSum(n) {

  // calculate the value to break up into its digits
  var value = Math.pow(2,n);
  console.log('initial value:', value);

  // store the sum of the digits
  var sum = 0;


  // parse digits
  while (value > 10) {
    sum += Math.floor(value % 10);
    value = value / 10;
    console.log('sum:', sum);
    console.log('value:', value);
  }

  sum += Math.floor(value);

  return sum;
}

// test
console.log(powerDigitSum(15));
console.log(powerDigitSum(1000));

// Project Euler - Problem 5
// Smallest multiple

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// function to find smallest number that can be divided by each of the numbers from 1 to the passed in value without any remainder
function smallestMultiple(upperLimit) {

// store the current multiple being considered
var multiple = upperLimit;

// brute force method: start with passed in upperLimit as the inital multiple to test, check whether it is evenly divisible by all of the numbers from 1 to upperLimit. If so then return that multiple, else increment the multiple and try again.

// continue to increment the value of multiple until it is evenly divisible by all of the numbers from 1 to the passed in upperLimit
while (!isMultiple(multiple, upperLimit)) {
  multiple++;
}

return multiple;

}

// function to test whether the passed in value is evenly divisible by all of the numbers from 1 to the passed in upperLimit
function isMultiple(value, upperLimit) {
  for (var i = 2; i <= upperLimit; i++) {
    if (value % i !== 0) {
      return false;
    }
  }

  return true;
}

// test
console.log(isMultiple(2520, 10));
console.log(isMultiple(50, 10));
console.log(smallestMultiple(10));
console.log(smallestMultiple(20));

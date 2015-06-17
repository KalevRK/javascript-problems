// Project Euler - Problem 3
// Largest prime factor

// The prime factors of 13195 are 5, 7, 13, and 29.

// What is the largest prime factor of the number 600851475143?

// function to find the largest prime factor of the passed in number
function largestPrimeFactor(value) {
  // start with smallest possible prime factor
  var factor = 2;

  // continue dividing prime factors into value until value is equal to the prime factor
  // this prime factor is then the largest prime factor
  while ((value !== factor) && (factor < value)) {
    // if the current prime factor divides into the value evenly then perform the division
    if (value % factor === 0) {
      // divide into value and store the dividend
      value /= factor;
    }
    // find next prime factor of value and repeat
    factor = findNextPrime(factor);
  }
  
  // return last stored (largest) prime factor
  return factor;
}

// function to return next prime number after passed in value
function findNextPrime(currentPrime) {
  var nextPrime = currentPrime + 1;
  // continue to increment the proposed nextPrime value until it actually is prime
  while(!isPrime(nextPrime)) {
    nextPrime++;
  }

  return nextPrime;
}

// function to check whether a given number is prime or not
function isPrime(testValue) {
  // divide by all values up to square root of testValue
  for (var i = 2; i <= Math.sqrt(testValue); i++) {
    // if any of those values divides evenly into testValue then return false
    if (testValue % i === 0) {
      return false;
    }
  }
  // else return true
  return true;
}

// test
console.log(largestPrimeFactor(13195));
console.log(largestPrimeFactor(600851475143));



// Project Euler - Problem 10
// Find the sum of the primes below two million

// function to find sum of primes below the given number
function primeSum(upperLimit) {

  // sum of primes
  var sum = 2;

  // increment value and each time it is prime add it to the sum
  for (var i = 3; i < upperLimit; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

// function to check whether given number is prime or not
function isPrime(n) {
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// test
console.log(primeSum(10));
console.log(primeSum(2000000));

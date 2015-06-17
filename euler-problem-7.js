// Project Euler - Problem 7
// 10001st prime

// What is the 10001st prime number?

// function to return the nth prime number
function nthPrimeNumber(n) {

  var result = 1;

  // increment on each prime number found until n is reached
  for (var i = 0; i < n; i++) {
    result++;
    // keep on incrementing result until it is prime
    while(!isPrime(result)) {
      result++;
    }
  }

  return result;
}

// function to check whether given number is prime or not
function isPrime(number) {

  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(nthPrimeNumber(6));
console.log(nthPrimeNumber(10001));


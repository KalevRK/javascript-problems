// Code Wars
// Prime factorization problem

// write a class called PrimeFactorizer that takes in an integer greater than 1 and has a method called factor which returns a hash where the keys are prime numbers and the values are the multiplicities.

function PrimeFactorizer(n){
  
  return {
    factor: function() {
      // map to store prime factorization
      var map = {};

      // start with the prime number 2
      var prime = 2;

      // continue to divide prime numbers into n until n is equal to 1
      while (n > 1) {
        // check whether the current prime number is evenly divisible into the value n
        if (n % prime === 0) {
          // if so then check whether prime number has been divided into number before
          if (map.hasOwnProperty(prime)) {
            // if so then increment value stored at property with the key being that prime number
            map[prime] = map[prime] + 1;
          } else {
            // else create a property with the key being the prime number and the value being 1
            map[prime] = 1;
          }
          // divide the prime number into n
          n /= prime;
        } else {
          // if the current prime number is not evenly divisible into n then find the next highest prime number
          prime = nextPrime(prime);
        }
      }
      // return the map of prime factors
      return map;
    }()
  }
}

// helper function to determine if number is prime or not
function isPrime(n) {
  // check all numbers from 2 to square root of n
  for (var i = 2; i <= Math.sqrt(n); i++) {
    // if any of the numbers evenly divides into n then n is composite
    if (n % i === 0) {
      return false;
    }
  }

  // if n is only divisible by 1 and itself then it is prime
  return true;
}

// helper function to find next highest prime number
function nextPrime(n) {
  while(true) {
    if (isPrime(n+1)) {
      return n+1;
    }
    n++;
  }
}


// test
console.log('isPrime(12)', isPrime(12)); // false
console.log('isPrime(17)', isPrime(17)); // true
console.log('nextPrime(2)', nextPrime(2)); // 3
console.log('nextPrime(17)', nextPrime(17)); // 19
console.log('nextPrime(20)', nextPrime(20)); // 23
console.log('new PrimeFactorizer(13).factor', new PrimeFactorizer(13).factor); // {'13': 1})
console.log('new PrimeFactorizer(24).factor', new PrimeFactorizer(24).factor); // {'2': 3, '3': 1})

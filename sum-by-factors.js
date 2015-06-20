// Code Wars
// Sum by Factors problem

// Given an array of positive or negative integers
// I = [i1,...,in]
// produce a sorted array P of the form
// [[p, sum of all ij of I for which p is a prime factor (p positive) of ij],...]

// P will be sorted by increasing order of the prime numbers

// Ex. - I = [12, 15], P = [[2, 12], [3, 27], [5, 15]]

function sumOfDivided(lst) {
  
  // result array with all pairs of prime factors and corresponding sums, sorted in ascending order by prime factor
  var result = [];

  // create an object to store the prime factors and the corresponding sums
  var factorSums = {};

  // for each value in the input array
  lst.forEach(function(value) {
    // determine its prime factors
    var factors = findPrimeFactors(value);
    // for each prime factor check whether it is a key on the factorSums object
    factors.forEach(function(factor) {
      if (factorSums[factor]) {
        // if so then add the current value to the value stored at that key
        factorSums[factor] += value;
      } else {
        // else create a property with the prime factor as the key and the current value as the value
        factorSums[factor] = value;
      }
      
    }, this);
    
  }, this);
  
  // retrieve all of the key-value pairs from the object and store as tuples in an array
  for (var key in factorSums) {
    result.push([parseInt(key),factorSums[key]]);
  }

  // return the result array
  return result;

}

// return an array of all of the prime factors for the given value
function findPrimeFactors(val) {
  
  // array of all prime factors of the given value
  var result = [];

  // iterate through all of the numbers from 2 to half of val
  for (var i = 2; i <= val/2; i++) {
    // if the number is prime then check to see if it is a factor of val
    if (isPrime(i)) {
      if (val % i === 0) {
        // if it is a factor of the number then push it to the result array
        result.push(i);
      }
    }
  }

  // return the array of prime factors of val
  return result;
}

// return true if the given value is prime, otherwise return false
function isPrime(n) {

  // check each of the possible factors of n from 2 to the square root of n
  for (var i = 2; i <= Math.sqrt(n); i++) {
    // if any factor is evenly divisible into n then n is not prime and return false
    if (n % i === 0) {
      return false;
    }
  }

  // if the only factors of n are 1 and n itself then return true
  return true;
}

// test
console.log(isPrime(29)); // true
console.log(isPrime(56)); // false
console.log(findPrimeFactors(12));
console.log(findPrimeFactors(15));
console.log(sumOfDivided([12, 15])); // [[2, 12], [3, 27], [5, 15]]
console.log(sumOfDivided([15,21,24,30,45])); // [[2, 54], [3, 135], [5, 90], [7, 21]]

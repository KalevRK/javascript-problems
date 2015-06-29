// Code Wars
// ES5 Generators - Part 1 Problem

// generator(sequencer[, arg1, arg2, ...]) receives a sequencer function to generate the sequence and returns and object with a next() method. When the next() method is invoked, the next value is generated. The method could receive as well optional arguments to be passed to the sequencer function.

function generator(sequencer) {

  // capture any additional arguments passed into the generator function
  var args = Array.prototype.slice.call(arguments, 1);
  // return an object with a next method
  return {
    next: sequencer.apply(this, args)
  }

}

function dummySeq() {
  return function() {
    return "dummy";
  };
}

function factorialSeq() {
  var factorial = 0;
  var currNum = 1;
  return function() {
    if (factorial === 0) {
      factorial = 1;
    } else {
      factorial *= currNum;
      currNum++;
    }
    return factorial;
  }
}

function fibonacciSeq() {
  var currValues = [0, 1];
  var temp;
  return function() {
    temp = currValues[1];
    currValues[1] = currValues[0] + currValues[1]
    currValues[0] = temp;
    return temp;
  }
}

function rangeSeq(start, step) {
  var current;
  return function() {
    if (!current) {
      current = start;
    } else {
      current += step;
    }
    return current;
  }
}

function primeSeq() {
  var currentPrime = 1;
  var isPrime = true;
  return function() {
    // start incrementing from the current prime number, check each subsequent number until you get to the next prime number, and then store that as the current prime and return it
    while (true) {
      // increment the number being checked
      currentPrime++;
      // reset the prime flag
      isPrime = true;
      
      // determine if the number being checked is prime
      for (var i = 2; i <= Math.sqrt(currentPrime); i++) {
        // if not prime then change flag
        if (currentPrime % i === 0) {
          isPrime = false;
        }
      }

      // if the number being checked is prime then return it
      if (isPrime) {
        return currentPrime; 
      }
    }
  }
}

function partialSumSeq() {
  // closure variable for the partial sum so far
  var sum = 0;

  // closure variable to store the passed in arguments
  var args = Array.prototype.slice.call(arguments);
  console.log('args:', args);

  return function() {
    if (args.length > 0) {
      sum += args.shift();
      return sum;
    } else {
      throw new Error('No more arguments');
    }
  }
}

// test
console.log("Test dummy generator");
var seq = generator(dummySeq);
console.log("seq.next():", seq.next());
console.log("seq.next():", seq.next());
console.log("seq.next():", seq.next());

console.log("ES5 Simple Generators");
  
console.log("Test factorial generator");
var seq = generator(factorialSeq);
console.log('seq.next():', seq.next()); // 0! = 1
console.log('seq.next():', seq.next()); // 1! = 1
console.log('seq.next():', seq.next()); // 2! = 2
console.log('seq.next():', seq.next()); // 3! = 6
console.log('seq.next():', seq.next()); // 4! = 6
    
console.log("Test Fibonacci generator");
var seq = generator(fibonacciSeq);
console.log('seq.next():', seq.next()); // fib(0) = 1
console.log('seq.next():', seq.next()); // fib(1) = 1
console.log('seq.next():', seq.next()); // fib(2) = 2
console.log('seq.next():', seq.next()); // fib(3) = 3
console.log('seq.next():', seq.next()); // fib(4) = 5
console.log('seq.next():', seq.next()); // fib(5) = 8
console.log('seq.next():', seq.next()); // fib(6) = 13
  
console.log("Test Range generator");
var seq = generator(rangeSeq, 5, 3); // 5,8,11,14,17
console.log('seq.next():', seq.next());
console.log('seq.next():', seq.next());
console.log('seq.next():', seq.next());
console.log('seq.next():', seq.next());
  
console.log("Test Prime Numbers generator");
var seq = generator(primeSeq);
console.log('seq.next():', seq.next());
console.log('seq.next():', seq.next());
console.log('seq.next():', seq.next());
console.log('seq.next():', seq.next());
console.log('seq.next():', seq.next());
console.log('seq.next():', seq.next());
console.log('seq.next():', seq.next());
console.log('seq.next():', seq.next());
  
console.log("Test partial sum generator");
var seq = generator(partialSumSeq, -1, 4, 2, 5);
console.log('seq.next():', seq.next());
console.log('seq.next():', seq.next());
console.log('seq.next():', seq.next());
console.log('seq.next():', seq.next()); // End of sequence
// console.log('seq.next():', seq.next()); // Beyond end of sequence throw error

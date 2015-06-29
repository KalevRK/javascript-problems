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
}

function partialSumSeq() {
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
  
//   Test.it("Test Prime Numbers generator", function() {
//     var seq = generator(primeSeq);
//     Test.assertEquals(seq.next(), 2);
//     Test.assertEquals(seq.next(), 3);
//     Test.assertEquals(seq.next(), 5);
//     Test.assertEquals(seq.next(), 7);
//     Test.assertEquals(seq.next(), 11);
//     Test.assertEquals(seq.next(), 13);
//     Test.assertEquals(seq.next(), 17);
//     Test.assertEquals(seq.next(), 19);
//   });
  
//   Test.it("Test partial sum generator", function() {
//     var seq = generator(partialSumSeq, -1, 4, 2, 5);
//     Test.assertEquals(seq.next(), -1);
//     Test.assertEquals(seq.next(), 3);
//     Test.assertEquals(seq.next(), 5);
//     Test.assertEquals(seq.next(), 10); //End of sequence
//     Test.expectError('End of sequence error expected', seq.next);
//   });
// });

// Code Wars
// Tribonacci Sequence problem

// Create a fibonacci function that given a signature array, returns the first n elements - signature included of the so seeded sequence.

// The tribonacci sequence sums the last three numbers of the sequence to generate the next.

// ex. - [1,1,1] -> [1,1,1,3,5,9,17,31,...]

function tribonacci(signature,n){

  // check if n is less than three
  if (n < 3) {
    return signature.slice(0,n);
  }

  // start the sequence with the passed in signature
  var result = signature;
  
  // track pointer to next spot in sequence
  // generate the next n - 3 terms of the sequence
  for (var i = 3; i < n; i++) {
    result.push((result[i-1] + result[i-2] + result[i-3]));
  }

  return result;
}

console.log('tribonacci([1,1,1],10)', tribonacci([1,1,1],10)); //[1,1,1,3,5,9,17,31,57,105]);
console.log('tribonacci([0,0,1],10)', tribonacci([0,0,1],10)); //[0,0,1,1,2,4,7,13,24,44]);
console.log('tribonacci([0,1,1],10)', tribonacci([0,1,1],10)); //[0,1,1,2,4,7,13,24,44,81]);

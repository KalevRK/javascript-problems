// Project Euler - Problem 6
// Sum square difference

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum

// function to return the difference between the sum of the squares and the square of the sum of the first n numbers
function sumSquareDifference(n) {

  var sum = 0;
  var square = 0;

  for (var i = 1; i <= n; i++) {
    // calculate the sum of the squares of the first n numbers
    square += (i * i);    

    // calculate the square of the sum of the first n numbers
    sum += i;
    
  }

  // return the difference between the sum of the squares and the square of the sum
  return (sum * sum) - square;
}

// test
console.log(sumSquareDifference(10));
console.log(sumSquareDifference(100));

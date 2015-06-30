// Code Wars
// Sum Strings as Numbers problem

// Given the string representations of two integers, return the string representation of the sum of those integers

// A string representation of an integer will contain no characters besides the ten numerals "0" to "9"

function sumStrings(a,b) {

  // convert both arguments to integers
  a = a === '' ? 0 : parseInt(a);
  b = b === '' ? 0 : parseInt(b);
  
  // sum the integers
  // convert the sum to a string and return it
  return (parseInt(a) + parseInt(b))+ '';
}

// test
console.log(sumStrings('123','456')); // 579

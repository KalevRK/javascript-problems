// Project Euler - Problem 9
// Special Pythagorean triplet

// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a^2 + b^2 = c^2

// For example, 3^2 + 4^2 = 5^2

// There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.

// function to find Pythaogrean triplet for which a + b + c = 1000
function pythagoreanTriplet() {
  var a, b, c;

  // test values of a, b, c until combination is found that meets requirements
  for (var a = 1; a < 998; a++) {
    for (var b = a + 1; b < 999; b++) {
      // for each combination of values for a and b calculate the corresponding value of c
      c = 1000 - a - b;
      // check to see whether the combination is a Pythagorean triplet
      if ((Math.pow(a,2) + Math.pow(b,2)) === Math.pow(c,2)) {
        console.log('a:', a);
        console.log('b:', b);
        console.log('c:', c);
        // if so then return the product of the numbers
        return a*b*c;
      }
    }
  }
}

// test
console.log(pythagoreanTriplet());

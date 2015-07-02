// Code Wars
// Product of consecutive Fibonacci numbers problem

// Given a number, prod, search for two consecutive Fibonacci numbers, F(n) and F(n+1), which generate the value prod when multiplied with one another

function productFib(prod){
  // start with the first two Fibonacci numbers
  var fib = [0,1];
  var product = 0;
  var temp;


  // calculate their product and check against prod
  while (product <= prod) {
    // if equal to prod return the two numbers and true
    if (product === prod) {
      return [fib[0], fib[1], true];
    } else {
      // if less than prod then shift over to next Fibonacci numbers
      temp = fib[0] + fib[1];
      fib[0] = fib[1];
      fib[1] = temp;
      product = fib[0] * fib[1];
    }
  }

  // if greater than prod return the two numbers and false
  return [fib[0], fib[1], false];
}

// test

console.log('productFib(4895)', productFib(4895)); // [55, 89, true])
console.log('productFib(5895)', productFib(5895)); // [89, 144, false])
console.log('productFib(74049690)', productFib(74049690)); // [6765, 10946, true])
console.log('productFib(84049690)', productFib(84049690)); // [10946, 17711, false])
console.log('productFib(193864606)', productFib(193864606)); // [10946, 17711, true])
console.log('productFib(447577)', productFib(447577)); // [610, 987, false])
console.log('productFib(602070)', productFib(602070)); // [610, 987, true])

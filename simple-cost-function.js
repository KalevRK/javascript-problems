// Code Wars
// Simple Linear Regression Cost Function problem

// Write a cost function J(theta1, theta2) that will calculate how good a fit a line is to the given data.
// Training set is given as an array of tuples, where each tuple is in the form: [input, output]

// hypothesis function h(x) = theta1 + theta2 * x
// cost function J(theta1, theta2) = (1/2m) * (sum of (h(x) - y)^2)
// m is the number of samples in the training set

function costFunctionJ(trainingSet, theta1, theta2) {

  var diffs = trainingSet.map(function(elem) {
    // calculate h(x) for every element in the trainingSet array
    var hypothesis = theta1 + (theta2 * elem[0]);
    
    // calculate (h(x) - y)^2 for every element in the trainingSet array
    var difference = Math.pow(hypothesis - elem[1], 2);
    
    return difference;
  });

  // sum the results of the previous calculation and divide by 2*m
  var result = diffs.reduce(function(sum, value) {
    return sum + value;
  });

  result = result / (2 * trainingSet.length);

  // return result
  return result.toFixed(3);
}

// test
var trainingSet = [[2, 1], [2, 4], [5, 4], [5, 8], [9, 8], [9, 11]];
console.log(costFunctionJ(trainingSet, 1, 1)); // 1.5
console.log(costFunctionJ(trainingSet, 0, 1.2)); // 1.7
console.log(costFunctionJ(trainingSet, 1, 1.8)); // 14.7

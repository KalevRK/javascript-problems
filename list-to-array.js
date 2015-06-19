// Code Wars
// List to Array problem

// Lists are data structures composed of nested objects, each containing a single value and a reference to the next object.

// Here's an example of a list in JavaScript:
// {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}}

// Write a function listToArray that converts a list to an Array
// Assum all inputs are valid lists. For the purposes of simplicity, all values will be either numbers, strings, or Booleans.

// function to convert a list to an Array
function listToArray(list) {

  // result array
  var result = [];


  // recursive helper function
  function extractValue(obj) {

    // access the value on the object with key 'value', and append to array
    result.push(obj.value);

    // if rest is not null then recursively repeat the operation on the object value stored at key 'rest'
    if (obj.rest !== null) {
      extractValue(obj.rest);
    }
  }

  // initiate recursive call chain
  extractValue(list);

  // return the resulting array
  return result;
}


// test
var list1 = {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}};
var list2 = {value: "foo", rest: {value: "bar", rest: null}};

console.log(listToArray(list1));
console.log(listToArray(list2));


// Code Wars
// Merged String Checker problem

// Write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2

// The restriction is that the characters in part1 and part2 are in the same order as in s.

// Ex. - 'codewars' is a merge from 'cdw' and 'oears'

function isMerge(s, part1, part2) {

  // convert strings to arrays for processing
  var sArr = s.split('');
  var p1Arr = part1.split('');
  var p2Arr = part2.split('');

  // track case where character in s cannot be found
  var valid = true;

  // starting at the first character in s
  // for each character
  sArr.forEach(function(char){
    // check to see if the character can be found at the current location in either of the two other strings
    if (p1Arr[0] === char) {
      p1Arr.shift();
    } else if (p2Arr[0] === char) {
      p2Arr.shift();
    } else {
      // if the character cannot be found then make arguments as invalid
      valid = false;
    }
  });
  // after going through all of the characters in s
  // check to see that the part1 and part2 strings are empty
  if (valid && p1Arr.length === 0 && p2Arr.length === 0) {
    // if both are empty then return true
    return true;
  }
  // else return false
  return false;
}

// test
console.log(isMerge('codewars', 'code', 'wars'));
console.log(isMerge('codewars', 'cdw', 'oears'));
console.log(!isMerge('codewars', 'cod', 'wars')); 

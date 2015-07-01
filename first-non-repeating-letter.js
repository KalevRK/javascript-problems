// Code Wars
// First non-repeating letter problem

// Write a function named firstNonRepeatingCharacter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return the empty string ('').

function firstNonRepeatingLetter(s) {
  
  // create a lowercase version of the original input string and convert to array to be used for tracking repeated characters
  var lower = s.toLowerCase().split('');

  // create object to store number of occurrences for each character in the input string
  var occurrences = {};
  
  // do two passes through the lowercase string
  // first pass is to store number of occurrences for each character
  lower.forEach(function(char) {
    // check if character has been encountered yet
    if (occurrences.hasOwnProperty(char)) {
      // increment character count
      occurrences[char] += 1;
    } else {
      // if not encountered yet then set property for character
      occurrences[char] = 1;
    }
  });

  // second pass is to check for first non-repeating character and return it
  for (var i = 0; i < lower.length; i++) {
    if (occurrences[lower[i]] === 1) {
      // if this is the first non-repeating character then return the original case version of the character from the input string
      return s.charAt(i);
    }
  };
  
  // if all characters are repeating then return an empty string
  return '';

}

// test
console.log('Simple Tests');
console.log(firstNonRepeatingLetter('a')); // a
console.log(firstNonRepeatingLetter('stress'));// t
console.log(firstNonRepeatingLetter('moonmen')); // e
console.log(firstNonRepeatingLetter('sTreSS')); // T
console.log(firstNonRepeatingLetter('bbbbbb')); // ''

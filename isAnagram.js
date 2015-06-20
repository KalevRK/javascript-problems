// Code Wars
// isAnagram problem

// Write a function isAnagram to return true if the word test is an anagram of the word original and false if not
// Anagrams are case insensitive, ignore all non-alphanumeric characters, the input will always be two strings

function isAnagram(test, original) {

  // strip out non-alphanumeric characters from both words [^A-Za-z0-9]
  test = test.replace(/[^A-Za-z0-9]/g, '');
  original = original.replace(/[^A-Za-z0-9]/g, '');

  // convert words to all lowercase
  test = test.toLowerCase();
  original = original.toLowerCase();

  // sort both words in lexicographical order
  test = test.split('').sort().toString();
  original = original.split('').sort().toString();

  // compare whether both words are equal or not
  return test === original;

}

// test
console.log(isAnagram("William Shakespeare","I am a weakish speller")); // true
console.log(isAnagram("Silent","Listen")); // true
console.log(isAnagram("Car","Cat")); // false
console.log(isAnagram("12345","54321")); // true

var isStringPermutation = function(str1, str2) {
    // check that both arguments are of type string
    if (typeof str1 === 'string' && typeof str2 === 'string') {
      
      // if the strings are different lengths then they are not permutations of each other
      if (str1.length !== str2.length) return false;
      
      // sort both strings
      str1 = str1.split('').sort();
      str2 = str2.split('').sort();
      
      // check that they both contain the same character at each position of the string
      var result = true;
      
      str1.forEach(function(char, index) {
          if (str2[index] !== char) result = false; 
      });
      
      return result;
    }
};
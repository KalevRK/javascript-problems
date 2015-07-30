var uniqChars = function(str) {
  if (typeof str === 'string') {
      var occurrences = {};
      var chars = str.split('');
      chars.forEach(function(char) {
          occurrences[char] = occurrences[char] ? occurrences[char] + 1 : 1;
      });
      
      for (var key in occurrences) {
          if (occurrences[key] > 1) return false;
      }
      
      return true;
  }  
};

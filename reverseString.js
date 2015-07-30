var reverseString = function(str) {
    if (typeof str === 'string') {
        var chars = str.split('');
        chars.reverse();
        return chars.join('');
    }
};
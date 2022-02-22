const reverseString = function(str) {
    let splitString = str.split('');
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join('');
    return joinArray;
};

reverseString('123! abc!');

// Do not edit below this line
module.exports = reverseString;
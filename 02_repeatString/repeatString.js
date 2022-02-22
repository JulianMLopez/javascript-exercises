const repeatString = function (string, number) {
    let repeatedString = '';
    while (number > 0){
        repeatedString += string; 
        number--;
    }
    return repeatedString;
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
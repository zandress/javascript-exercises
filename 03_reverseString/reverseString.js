const reverseString = function(string) {
    let arrayString = string.split('');
    let reverseArray = arrayString.reverse();
    let joinString = reverseArray.join('');
    return joinString;
};

// Do not edit below this line
module.exports = reverseString;

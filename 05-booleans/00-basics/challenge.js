module.exports.equalStrings = function(stringOne, stringTwo) {
return stringOne == stringTwo
};

module.exports.notEqual = function(one, two) {
return one !== two
};

module.exports.inBetween = function(lower, middle, upper) {
return lower < middle && middle < upper
};

module.exports.outsideRanges = function(number) {
return number !== ((1 < number && number < 6) || (10 < number && number < 20) || (42 < number && number < 75) || 10 || 20 || 75)
//Ordering Problem???//
};

module.exports.nameAndPrice = function(name, price) {
return (name === 'NYTimes' || 'LATimes') && (price >= 1)
};
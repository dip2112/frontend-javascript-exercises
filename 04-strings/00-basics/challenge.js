module.exports.formLetter = function(firstName, senderName, message) {
return "Hello " + firstName +",\n\n"+ message + "\n\nSincerely,\n" + senderName
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
return bigString.substring(startA,endA) + bigString.substring(startB,endB)
console.log(sliceItAndCombineIt)
};

module.exports.findFirstMatch = function(text, searchString) {
return text.indexOf(searchString)
};

module.exports.findLastMatch = function(text, searchString) {
return text.lastIndexOf(searchString)
};

module.exports.substringBetweenMatches = function(text, searchString) {
return text.substring(13,33); 
};


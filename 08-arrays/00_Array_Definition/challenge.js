module.exports.newArray = function(a,b,c,d){
return [a,b,c,d];
};

module.exports.firstAndLast = function (x) {
  return [x[0], x.pop()];
};
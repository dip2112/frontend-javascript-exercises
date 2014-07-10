module.exports.reversePlusOne = function(x){
x.reverse();
x.unshift(1);
return x
};


/*
module.exports.reversePlusOne = function(x){
([x,x]).reverse().unshift(1);
return x;
};
*/

module.exports.plusesEverywhere = function(x){
return x.join("+");
};

/why not x.join("+") then return x/

module.exports.arrayQuantityPlusOne = function(x){
return x.length + 1;
};
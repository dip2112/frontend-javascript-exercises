module.exports.favoriteNumber = function(fav,guess){
    if (guess > fav) {
      return "Too high";
    }
    else if (guess < fav) {
      return "Too low";
    }
    else { (guess === fav) 
      return "You got it!";
    }
};

module.exports.checkLock = function(x,y,w,z){
  if ((x === 3 || x === 5 || x === 7) && (y === 2) && (w >= 5 && w <= 100) && (z < 9 || z > 20))
  {
  return "correct";      
  }
  else {
    return "incorrect"
  }
    };

module.exports.canIGet = function(item,money){
  if ((item === 'MacBook Air' && money >= 999) || (item === "MacBook Pro" && money >= 1299)||(item === "Mac Pro" && money >= 2499)||(item === "Apple Sticker" && money >= 1)) {
    return 'true'; 
  }
  else {(item !== "MacBook Air" || item !== "MacBook Pro" || item !== "Mac Pro" || item !== "Apple Sticker")
    return "false";
  }
};


//module.exports.canIGet = function(item,money){
 // if (item === 'MacBook Air' && money >= 999) {
  //  return 'true'; 
 // }
  //else if (item === "MacBook Pro" && money >= 1299){
   // return "true";
 // }
  //else if (item === "Mac Pro" && money >= 2499){
  //  return "true";
 // }
  //else if (item === "Apple Sticker" && money >= 1){
   // return "true";
 // }
  //else {(item !== "MacBook Air" || item !== "MacBook Pro" || item !== "Mac Pro" || item !== "Apple Sticker")
   // return "false";
 // }
//}; 
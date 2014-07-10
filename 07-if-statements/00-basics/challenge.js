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

/* below works too
/*module.exports.canIGet = function(item, money) {
  if (money >= 1 && item == 'Apple Sticker') {
    return true;
  } else if (money >= 999 && item == 'MacBook Air') {
    return true;
  } else if (money >= 1299 && item == 'MacBook Pro') {
    return true;
  } else if (money >= 2499 && item == 'Mac Pro') {
    return true;
  } else {
    return false;
  }
};
*/

module.exports.canIGet = function(item,money){
  if ((item === 'MacBook Air' && money >= 999) || (item === "MacBook Pro" && money >= 1299)||(item === "Mac Pro" && money >= 2499)||(item === "Apple Sticker" && money >= 1)) {
    return true; 
  }
  else {
    return false;
  }
};



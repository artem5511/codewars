//cata Well of Ideas - Easy Version
function well(x){
  
switch (x.filter(i => i === 'good').length) {
    case 0:
      return 'Fail!'
    case 1:
    case 2:
      return 'Publish!'
    default:
      return 'I smell a series!'
  }
}

//cata Area or Perimeter
const areaOrPerimeter = function(l , w) {
  // Return your answer
  if (l === w) {
    return l * w
  }
  else {
    return 2 * (l + w)
  }
}

// Remove First and Last Character
 function removeChar(str){
 //You got this!
  return str.slice(1, -1)
};

// Exclamation marks series #1: Remove an exclamation mark from the end of string
function remove (string) {
  //coding and coding....
  return string[string.length-1] == '!' ? string.slice(0, string.length-1) : string;
  //return string.replace (/$!/,'');  не сработало это решение
}

// We need a function that can transform a number into a string.
//What ways of achieving this do you know?
function numberToString(num) {
  return num.toString();
}

// Filter out the geese
unction gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  return birds.filter((elm) => !geese.includes(elm))
  
  // return an array containing all of the strings in the input array except those that match strings in geese
};

// Sentence Smash
function smash (words) {
  return words.join(' ')
};

//
const rps = (p1, p2) => {
  const getMsg = n => `Player ${n} won!`;

  if(p1 === 'scissors' && p2 === 'paper') return getMsg(1);
  if(p1 === 'paper' && p2 === 'scissors') return getMsg(2);

  if(p1 === 'paper' && p2 === 'rock') return getMsg(1);
  if(p1 === 'rock' && p2 === 'paper') return getMsg(2);

  if(p1 === 'rock' && p2 === 'scissors') return getMsg(1);
  if(p1 === 'scissors' && p2 === 'rock') return getMsg(2);

  if(p1 === p2) return 'Draw!'
};

// Powers of 2
function powersOfTwo(n){
  var myArray = [];
  for (var i=0; i<=n; i++){
    myArray.push(2**i);
  }
  return myArray
}

const result = powersOfTwo(2)
console.log(result)

//Opposites Attract
function lovefunc(flower1, flower2){
  // moment of truth
  if(flower1 % 2 == 0 && flower2 % 2 == 1){
    return true;
}
 if(flower1 % 2 == 1 && flower2 % 2 == 0){
   return true;
}
else{
    return false;
    }
}
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

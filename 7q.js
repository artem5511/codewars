Counting sheep...
  Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
  
function countSheeps(sheep) {
    const count = sheep.filter(function(value){return value});
    return count.length;
  }

function countSheeps(sheep) {
   let count = sheep.filter((item) => item).length
   return count
  }

function countSheeps(sheep) {
   let count = sheep.filter(Boolean).length
   return count
  }

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

7 kyu
Descending Order
function descendingOrder(n){
// const arr = Array.from(String(n), Number)
// const arr2 = arr.sort(function(a, b) {
//      return b-a})     
//   const arr3 =  arr2.join('');
//   return arr3
  
   let nToStr = n.toString().split('').sort((a,b)=>a-b).reverse().join('')
  return Number(nToStr)
}

To square(root) or not to square(root)

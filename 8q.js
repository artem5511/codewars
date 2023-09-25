//1. Return Negative
//В этом простом задании вам дается число, и вы должны сделать его отрицательным. А может быть, число уже отрицательное?

// function makeNegative(num) {
//     if (num < 0) return num
//     else return (num)*(-1)
// }

//2.Повтор строки/String repeat
// Напишите функцию, которая принимает целое число nи строку sв качестве параметров и возвращает строку, sповторяющуюся ровно столько nраз.
// 3 способа
// function repeatStr  (n, s) {
//   return s.repeat(n)
// }

//const repeatStr = (n, s) => s.repeat(n);

// function repeatStr (n, s) {
//   let new_s = '';
//     while (n-- > 0) new_s+= s;
//     return new_s;
// }

//Opposite number   найти противоположное число
// function opposite(number) {
//     //your code here
//     return -number
// }
//
// function opposite(number) {
//     //your code here
//     let oppNum = 0 - number
//     return oppNum;
// }

//Square(n) Sum  возвести в квадрат и суммировать  числа в массиве
function squareSum(numbers){
    return numbers.reduce( (acc, cur) => acc + (cur **2), 0)
}

function squareSum(numbers) {
    let sum = 0
    numbers.forEach( number => {
        sum += (number * number)
    })
    return sum
}

8 kyu
Invert values

function invert(array) {
   const newArray = array.map(el => el*-1)
   return newArray;
}

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

Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
 let newArray = [...n.toString()].reverse()
  return newArray.map(el=> Number(el)) //code here
}

Find the smallest integer in the array

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.reduce((acc,el)=>acc < el ? acc : el)
  }
}

Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
var summation = function (num) {
    let sum = 0
    for(let i = 0; i <= num; i++) {
        sum += i
    }
    return sum
}

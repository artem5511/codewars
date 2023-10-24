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

// Write a function "greet" that returns "hello world!"
const greet = () => "hello world!";

function greet() {
    return "hello world!";
    }


Is he gonna survive?
function hero(bullets, dragons){
   if ((bullets/dragons) >= 2 || 0) {
         return true
   }
   else 
     return false
//Get Coding!
}
    вариант 2
function hero(bullets, dragons){
  return bullets >= dragons * 2
}
вариант стрелочная 
const hero = (bullets, dragons) => dragons * 2 <= bullets;

Printer Errors
function printerError(s) {
    err = s.match(/[n-z]/g).length
    return (err + '/'+ s.length)
}
Printer Errors
function printerError(s) {
  let count = 0;
  for (let i = 0; i <s.length; i++) { 
    if (s[i] > 'm') { 
      count++; 
    } 
  } 
  return count + '/' + s.length; 
}
function printerError(s) {
    const init_len = s.length;
    const err_len = s.replace(/[a-m]/g, "").length;
     return (err_len + '/'+  init_len)
}


Difference of Volumes of Cuboids

function findDifference(a, b) {
  num1 = (a[0]*a[1])*a[2];
   num2 = (b[0]*b[1])*b[2];
  return Math.abs(num1-num2)
  //loading...
}
не мои
function find_difference(a, b) {
  return Math.abs(a[0]*a[1]*a[2]-b[0]*b[1]*b[2]);
}
function find_difference(a, b) {
  return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
}

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
'use strict';

const arr = [1, 2, 13, 36, 18];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));

// console.log(arr.length);
// arr.pop(); //удаляет жлемент в конец массива
// arr.push(10); //добавля элеме в конец масс
// console.log(arr);

// arr.forEach(function(item, i, arr) { //первый элемент массива, второй счетчик, третий ссылка на массив
// console.log(`${i}: ${item} внутри массива ${arr}`)
// }); //перебор массив

// for (let value of arr) {
//   console.log(value);
// }


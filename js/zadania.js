'use strict';

//деструктизация объектов Е
const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function() { // созданный метод которые работает внутри options
    console.log('test');
  }
};

options.makeTest(); //() - запуск

const {border, bg} = options.colors;   //струкруа из которой будет извлечены объекты . деструктуировать
console.log(border);





// console.log(Object.keys(options).length); //получение колиечства элементов внутри обхекта







// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0; //переменная счетчик, будет считать сколько свойств было внутри
// for (let key in options) { //выберет значения в options
//   if (typeof(options[key]) === 'object') { //проверка является ли объектом, чтобы не было проблем
//     for (let i in options[key]) { //задает переменную и проверяет внутри нее 
//       console.log(`свойство ${i} имеет значение ${options[key][i]}`); //выбирает значение из новой переменной и проверяет сразу два переменных
//       counter++; //изза развилки 
//     } 
//   } else {
//       console.log(`свойство ${key} имеет значение ${options[key]}`); //выбирает значения из переменной глобальной
//       counter++; //
//     }
// }
// console.log(counter);


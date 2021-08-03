const now = new Date(); //конструктор даты
// можно вложить строчные данные и прямые данные
// год передаю в 2020 формате !не20
// месяц начинается с 0 
console.log(now.setHours(18)); //установка даты
console.log(now);


// console.log(now.getFullYear()); // год
// console.log(now.getMonth()); // мес
// console.log(now.getDate()); // дата
// console.log(now.getDay()); // день недели, начинается с вск
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset()); //разница между часовы поясом и ЮТС

// console.log(now.getTime()); // колво милисекунд которое прошло

let start = new Date();

for (let i = 0; i < 100000; i++) {
  let some = i**3; // ** возведение в степерь
}

let end = new Date();

alert(`цикл работает за ${end - start} мс`) //проверка за сколько выполняется 
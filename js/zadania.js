'use strict';

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const john = Object.create(soldier); //создание нового обхекта джон который будетпрототипно наследоваться от солдата

// const john = {
//     health: 100
// };

// Object.setPrototypeOf(john, soldier); //получение прототип для джона

john.sayHello();
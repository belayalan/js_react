'use strict';

//touchstart начало пальца
// touch move движение пальца
// touchend
// touchenter как только палец зашел на элемент
// touchlevae продолжил скользить палец за пределы элемента
// touchcancel точка соприкосновения больше не регистрируется

window.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.box');

  box.addEventListener('touchmove', (e) => {
        e.preventDefault();

       
        console.log(e.targetTouches[0].pageX);
  });
});

//touches колво пальцев
// targettouches
// changeTouches
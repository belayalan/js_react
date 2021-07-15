'use strict';

      const box = document.getElementById('box');
      const buttons = document.getElementsByTagName('button');
      const circles = document.getElementsByClassName('circle');
      const wrapper = document.querySelector('.wrapper');
      const hearts = document.querySelectorAll('.heart');
      const oneHeart = document.querySelector('.heart');
      

            // box.style.backgroundColor = 'blue';
            // box.style.width = '500px';
            box.style.cssText = `background-color: blue; width: 500px`;

            buttons[1].style.borderRadius = '100%';
            circles[0].style.backgroundColor = 'red';

            // for (let i = 0; i < hearts.length; i++) {
            //       hearts[i].style.backgroundColor = 'pink';
            // }
      
            hearts.forEach(item => {
                  item.style.backgroundColor = 'pink';
            });

            const div = document.createElement('div');
            // const text = document.createTextNode('Hello world');

            div.classList.add('black');

            wrapper.append(div);  //в конец
            // wrapper.appendChild(div);
            // wrapper.prepend(div)

            // hearts[0].after(div)
            // wrapper.insertBefore(div, hearts[0])
            // circles[1].remove();

            // hearts[0].replaceWith(circles[0]); // замена элем

            div.innerHTML = '<h1> hello world! </h1>';

            // div.textContent = 'hello';

            div.insertAdjacentHTML('afterend', '<h1> hello world! </h1>');
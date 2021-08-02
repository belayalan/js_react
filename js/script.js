   
   const btn = document.querySelector('.btn');
    let timer,
        i = 0;

    function myAnim() {
      const elem = document.querySelector('.box');
      let pos = 0;

      const id = setInterval(frame, 10);
      function frame () {
        if (pos == 300) {
          clearInterval();
        } else {
          pos++;
          elem.style.bottom = pos + "px";
          elem.style.right = pos + "px";
        }
      }
    }

btn.addEventListener('click', myAnim);

// function logger () {
//   if (i === 3) {
//     clearInterval(timer);
//     }
//     console.log('object');
//     i++;
//   }
  
// let  id = setTimeout(function log() {
//   console.log('object');
//   id = setTimeout(log, 500);
// }, 500);
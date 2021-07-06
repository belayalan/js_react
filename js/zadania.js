'use strict';

function first() {
  //something
  setTimeout(function(){
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();

function leartJS(lang, callback) {
  console.log(`i learn: ${lang}`);
  callback();
}

function done() {
  console.log('finished!!!!!!!!!!!!!!!!');
}
leartJS('JavaScript', done);
'use strict';

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколько фильмов посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


 function rememberMyFilms() {
   for (let i = 0; i < 2; i++){
     const a = prompt('Один из послед фильм', ''),
           b = prompt('на скок оценишь', '');
   }
   if (a != null && b !=null && a != '' && b !='' && a.length < 50) {
     personalMovieDB.movies[a] = b;
     console.log('done');
          } else {
     console.log('error');
     i--;
   }
 }

// rememberMyFilms();


function detectPersonalLevel () {
  if (personalMovieDB.count < 10){
    console.log('просмотрено довольно мало фильмецов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('средне');
  } else if (personalMovieDB.count >= 30) {
    console.log('kinoman');
  } else {
    console.log('error');
  }
}
detectPersonalLevel ();

function showMyDB (hidden) {
  if (!hidden){
     console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
   for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
   }
}
writeYourGenres();


'use strcit';

const numberOfFilms = prompt('Сколько фильмов посмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++){
    const a = prompt('Один из послед фильм', ''),
          b = prompt('на скок оценишь', '');
      
if (a != null && b !=null && a != '' && b !='' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
} else {
    console.log('error');
    i--;
}

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
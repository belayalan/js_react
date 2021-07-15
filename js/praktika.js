  "use strict";

  const personalMovieDB = {
      count: 0,
      movies: {},
      actors: {},
      genres: [],
      privat: false,
        start: function () {
      personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('Сколько фильмов посмотрели?', '');
        }
        },
      rememberMyFilms: function () {
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
    },
      detectPersonalLevel: function () {
        if (personalMovieDB.count < 10){
          console.log('просмотрено довольно мало фильмецов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
          console.log('средне');
        } else if (personalMovieDB.count >= 30) {
          console.log('kinoman');
        } else {
          console.log('error');
        }
      },
      showMyDB: function (hidden) {
      if (!hidden){
        console.log(personalMovieDB);
      }
    },
      toggleVisibleMyDB: function () {
      if (personalMovieDB.privat) {
          personalMovieDB.privat = false;
      } else { personalMovieDB.privat = true;
      }
    },
      writeYourGenres: function () {
      for (let i = 1; i < 2; i++) {
      //   let genre = prompt(`Ваш любимый жанр под номером ${i}`);
      //   personalMovieDB.genres[i - 1] = genre;

      //   if (genre == '' || genre == null) {
      //     console.log('Вы ввели неккоректные данные или не ввели их');
      //     i--;
      //   } else {
      //     personalMovieDB.genres[i - 1] = genre;
      //   }

      let genre = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
      

        if (genre == '' || genre == null) {
          console.log('Вы ввели неккоректные данные или не ввели их');
          i--;
        } else {
          personalMovieDB.genres = genre.split(', ');
          personalMovieDB.genres.sort();
        }
      }

      personalMovieDB.genres.forEach ((item, i) => {
        console.log(`Любимый жанр ${i + 1} - это ${item} `);
      });
    }
  };

  //нач с переменнойю
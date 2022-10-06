import { SHORTMOVIES_DURATION } from './constants.js';

function convertingTime(time, format = 'en') {
  const hours = Math.trunc(time/60);
  const minutes = time % 60;
  const hoursUnit = format === 'en' ? 'h' : 'ч';
  const minutesUnit = format === 'en' ? 'm' : 'м';

  return hours > 0
    ? (`${hours}${hoursUnit} ${minutes}${minutesUnit}`)
    : (`${minutes}${minutesUnit}`);
}

function filterMovies(movies, userRequest, shortMovies) {
  const moviesByUserRequest = movies.filter(movie => {
    const userMovie = userRequest.toLowerCase().trim();

    return movie
        .nameRU
        .toLowerCase()
        .trim()
        .indexOf(userMovie) !== -1
        || movie
            .nameEN
            .toLowerCase()
            .trim()
            .indexOf(userMovie) !== -1;
  });

  return shortMovies ? filterShortMovies(moviesByUserRequest) : moviesByUserRequest;
}

function filterShortMovies(movies) {
  return movies.filter(movie => movie.duration <= SHORTMOVIES_DURATION);
}

export { convertingTime, filterMovies, filterShortMovies };



function populateSelect() {
  const selectMovie = document.getElementById("movieSelector");
  selectMovie.innerHTML = "";
  movies.forEach((movie, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = movie.name;
    selectMovie.appendChild(option);
  });
}


function displayMovies() {
  const list = document.getElementById("movies");
  list.innerHTML = "";
  movies.forEach(movie => {
    const li = document.createElement("li");
    li.textContent = `${movie.name} - Rating: ${movie.rating}/100`;
    list.appendChild(li);
  });
}

let selectedMovieIndex = 0;
function selectMovie() {
  selectedMovieIndex = document.getElementById("movieSelector").value;
  displaySelectedMovie();
}

function increaseRating() {
  let movie = movies[selectedMovieIndex];
  movie.rating++;
  if (movie.rating > 100) movie.rating = 100;
  displayMovies();
}

function decreaseRating() {
  let movie = movies[selectedMovieIndex];
  movie.rating--;
  if (movie.rating < 1) movie.rating = 1;
  displayMovies();
}


function addMovie(event) {
  event.preventDefault();
  const nameInput = document.getElementById("movie-name");
  const ratingInput = document.getElementById("movie-rating");
  const newMovie = {
    name: nameInput.value.trim(),
    rating: parseInt(ratingInput.value, 10),
  };
  movies.push(newMovie);
  nameInput.value = "";
  ratingInput.value = "";
  displayMovies();
}

function displaySelectedMovie() {
  const list = document.getElementById("movies");
  list.innerHTML = "";
  const movie = movies[selectedMovieIndex];
  const li = document.createElement("li");
  li.textContent = `${movie.name} - Rating: ${movie.rating}/100`;
  list.appendChild(li);
}


document.addEventListener("DOMContentLoaded", () => {
  populateSelect();
  displayMovies();
  const movieform = document.getElementById("movie-form");
  movieform.addEventListener("submit", addMovie);
});


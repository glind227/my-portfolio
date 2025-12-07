function getTopTenMovies(movies) {
  return movies
    .slice()
    .sort((a, b) => b.rating - a.rating) 
    .slice(0, 10); //top 10
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


document.addEventListener("DOMContentLoaded", () => {
  movies = getTopTenMovies(movies);
  displayMovies();
});

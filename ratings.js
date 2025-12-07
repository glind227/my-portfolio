
const imdbLinks = {
  "Inception": "https://www.imdb.com/title/tt1375666/",
  "The Matrix": "https://www.imdb.com/title/tt0133093/",
  "The Godfather": "https://www.imdb.com/title/tt0068646/",
  "The Shawshank Redemption": "https://www.imdb.com/title/tt0111161/",
  "The Dark Knight": "https://www.imdb.com/title/tt0468569/",
  "Pulp Fiction": "https://www.imdb.com/title/tt0110912/",
  "The Lord of the Rings: The Return of the King": "https://www.imdb.com/title/tt0167260/",
  "Fight Club": "https://www.imdb.com/title/tt0137523/",
  "Forrest Gump": "https://www.imdb.com/title/tt0109830/",
  "The Empire Strikes Back": "https://www.imdb.com/title/tt0080684/",
  "Interstellar": "https://www.imdb.com/title/tt0816692/",
  "Gladiator": "https://www.imdb.com/title/tt0172495/",
  "Saving Private Ryan": "https://www.imdb.com/title/tt0120815/",
  "The Silence of the Lambs": "https://www.imdb.com/title/tt0102926/"
};

function displayMoviesWithIMDb() {
  const container = document.getElementById("movies-with-imdb");
  container.innerHTML = "";
  const ul = document.createElement("ul");

  movies.forEach(movie => {
    const li = document.createElement("li");
    const imdbUrl = imdbLinks[movie.name];
    li.innerHTML = `
      ${movie.name} - Rating: ${movie.rating}/100 
      ${imdbUrl ? `<a href="${imdbUrl}" target="_blank">IMDb Review</a>` : ""}
    `;
    ul.appendChild(li);
  });

  container.appendChild(ul);
}

document.addEventListener("DOMContentLoaded", displayMoviesWithIMDb);
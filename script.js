
let movies = [
  { name: "Inception", rating: 5 },
  { name: "The Matrix", rating: 4 },
  { name: "The Godfather", rating: 5 },
  { name: "The Shawshank Redemption", rating: 5 },
  { name: "The Dark Knight", rating: 4 },
  { name: "Pulp Fiction", rating: 4 },
  { name: "The Lord of the Rings: The Return of the King", rating: 5 },
];


function displayMovies() {
  const list = document.getElementById("movie-list");
  list.innerHTML = ""; 

  movies.forEach(movie => {
    const li = document.createElement("li");
    li.textContent = `${movie.name} - Rating: ${movie.rating}/5`;
    list.appendChild(li);
  });
}


document.getElementById("movie-form").addEventListener("submit", function(event) {
  event.preventDefault(); 

  const name = document.getElementById("movie-name").value;
  const rating = document.getElementById("movie-rating").value;

  
  movies.push({ name: name, rating: parseInt(rating) });

 
  displayMovies();

  
  document.getElementById("movie-form").reset();
});


displayMovies();

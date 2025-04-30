const movies = [
    { title: "The Matrix", image: "the matrix.jfif" },
    { title: "Avengers", image: "Avengers.jfif" },
    { title: "Jaat 2", image: "jaat 2.jfif" },
    { title: "kesari 2", image: "kesari2.jfif" },
    { title: "The Dark Knight", image: "The  Dark knight.jfif" },
    { title: "Chhaava", image: "Chhaava.jfif" },
  ];
  
  const movieList = document.getElementById("movieList");
  
  function displayMovies(filteredMovies) {
    movieList.innerHTML = '';
    filteredMovies.forEach(movie => {
      const movieCard = document.createElement("div");
      movieCard.className = "movie-card";
      movieCard.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <div class="movie-title">${movie.title}</div>
      `;
      movieList.appendChild(movieCard);
    });
  }
  
  displayMovies(movies);
  
  document.getElementById("search").addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = movies.filter(movie => movie.title.toLowerCase().includes(value));
    displayMovies(filtered);
  });
  
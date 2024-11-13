// MovieView.js
export default class MovieView {
  constructor() {
    this.movieListContainer = document.getElementById('movieList');
    this.addMovieForm = document.getElementById('addMovieForm');
    this.movieTitleInput = document.getElementById('movieTitle');
  }

  displayMovies(movies) {
    this.movieListContainer.innerHTML = movies.map(movie => `
      <li class="movie-item">
        <span class="movie-title">${movie.title}</span>
        <button class="delete-btn" data-id="${movie.id}">Удалить</button>
      </li>
    `).join('');
  }

  bindAddMovie(handler) {
    this.addMovieForm.addEventListener('submit', event => {
      event.preventDefault();

      const movie = {
        id: Date.now(),
        title: this.movieTitleInput.value.trim()
      };

      if (movie.title) {
        handler(movie);
        this.movieTitleInput.value = '';
      }
    });
  }

  bindDeleteMovie(handler) {
    this.movieListContainer.addEventListener('click', event => {
      if (event.target.classList.contains('delete-btn')) {
        const movieId = parseInt(event.target.getAttribute('data-id'));
        handler(movieId);
      }
    });
  }
}

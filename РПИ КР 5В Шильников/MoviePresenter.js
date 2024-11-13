// MoviePresenter.js
import MovieModel from './MovieModel.js';
import MovieView from './MovieView.js';

export default class MoviePresenter {
  constructor() {
    this.model = new MovieModel();
    this.view = new MovieView();

    // Отображаем начальный список фильмов
    this.view.displayMovies(this.model.getMovies());

    // Привязываем обработчики
    this.view.bindAddMovie(this.handleAddMovie.bind(this));
    this.view.bindDeleteMovie(this.handleDeleteMovie.bind(this));
  }

  handleAddMovie(movie) {
    this.model.addMovie(movie);
    this.view.displayMovies(this.model.getMovies());
  }

  handleDeleteMovie(id) {
    this.model.removeMovie(id);
    this.view.displayMovies(this.model.getMovies());
  }
}

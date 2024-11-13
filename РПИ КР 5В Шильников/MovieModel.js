// MovieModel.js
export default class MovieModel {
  constructor() {
    this.movies = [
      { id: 1, title: 'Брат' },
      { id: 2, title: 'Иван Васильевич меняет профессию' },
      { id: 3, title: 'Служебный роман' }
    ];
  }

  addMovie(movie) {
    this.movies.push(movie);
  }

  removeMovie(id) {
    this.movies = this.movies.filter(movie => movie.id !== id);
  }

  getMovies() {
    return this.movies;
  }
}

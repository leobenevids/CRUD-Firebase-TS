class Movie {
  id;
  title;
  rating;
  description;
  director;
  poster;

  constructor(
    id: string,
    title: string,
    rating: number,
    description: string,
    director: string,
    poster: string
  ) {
    this.id = id;
    this.title = title;
    this.rating = rating;
    this.description = description;
    this.director = director;
    this.poster = poster;
  }
}

export default Movie;

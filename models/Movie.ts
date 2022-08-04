import { runInThisContext } from "vm";

class Movie {
  id;
  title;
  rating;
  description;
  genre;
  release;
  casting;
  director;
  poster;

  constructor(
    id: string,
    title: string,
    rating: number,
    description: string,
    genre: string[],
    casting: string[],
    release: number,
    director: string,
    poster: string
  ) {
    this.id = id;
    this.title = title;
    this.rating = rating;
    this.description = description;
    this.genre = genre;
    this.release = release;
    this.casting = casting;
    this.director = director;
    this.poster = poster;
  }
}

export default Movie;

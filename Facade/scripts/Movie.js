class Movie {
  constructor(name = '', minutes = 0, director = '', actors = [], description = '') {
    this.name = name;
    this.minutes = minutes;
    this.director = director;
    this.actors = actors;
    this.description = description;
  }

  setName(name) {
    this.name = name;
  }

  setMinutes(minutes) {
    this.minutes = minutes;
  }

  setDirector(director) {
    this.director = director;
  }

  setActors(actors) {
    this.actors = actors;
  }

  setDescription(description) {
    this.description = description;
  }
}

export default Movie;

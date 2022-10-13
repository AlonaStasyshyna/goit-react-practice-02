import { Component } from "react";
import movies from '../data/movies.json';
import { MoviesGallary } from "./MoviesGallary/MoviesGallary";

export class App extends Component {
  state = {

  }

  render() {
    return
    <>
      <MoviesGallary movies={movies} />
    </>
  }
}

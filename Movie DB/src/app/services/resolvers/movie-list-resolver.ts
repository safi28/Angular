import { Injectable } from "@angular/core";
import MovieDetails from "src/app/models/Movie-details";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { MovieService } from "../movie.service";
import Movie from "../../models/Movie";
import { merge, forkJoin } from "rxjs";


@Injectable()
export class MovieListResolver implements Resolve<Movie[]> {
  constructor(private movieService: MovieService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params["id"];

    return forkJoin(
      this.movieService.getInTheatersMovies(),
      this.movieService.getBestDramaMovies(),
      this.movieService.getPopularKidsMovies(),
      this.movieService.getPopularMovies(),
    );
  }
}

import { Injectable } from "@angular/core";
import MovieDetails from "src/app/models/Movie-details";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { MovieService } from "../movie.service";

@Injectable()
export class SingleMovieResolver implements Resolve<MovieDetails> {
  constructor(private movieService: MovieService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params["id"];

    return this.movieService.getMovieById(id);
  }
}

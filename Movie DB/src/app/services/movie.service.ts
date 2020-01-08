import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import Movie from "src/app/models/Movie";
import { Observable } from "rxjs/internal/Observable";
import { tap, map } from "rxjs/operators";

const BASE_URL = "https://api.themoviedb.org/3/";
const IN_THEATRES =
  "discover/movie?primary_release_date.gte=2019-03-01&primary_release_date.lte=2019-04-30";
const POPULAR = "discover/movie?sort_by=popularity.desc";
const KIDS ="discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc";
const DRAMA = "discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10";
const API_KEY = "&api_key=44b7f5fe7ef512937b25aeb752852c59";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<Array<Movie>> {
    return this.http
      .get<Movie[]>(BASE_URL + POPULAR + API_KEY)
      .pipe(map(data => data["results"].slice(0, 6)));
  }

  getInTheatersMovies(): Observable<Array<Movie>> {
    return this.http
      .get<Movie[]>(BASE_URL + IN_THEATRES + API_KEY)
      .pipe(map(data => data["results"].slice(0, 6)));
  }

  getPopularKidsMovies() {
    return this.http
      .get<Movie[]>(BASE_URL + KIDS + API_KEY)
      .pipe(map(data => data["results"].slice(0, 6)));
  }

  getBestDramaMovies() {
    return this.http
      .get<Movie[]>(BASE_URL + DRAMA + API_KEY)
      .pipe(map(data => data["results"].slice(0, 6)));
  }
}

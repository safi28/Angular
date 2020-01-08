import { Component, OnInit } from "@angular/core";
import { MovieService } from "../services/movie.service";
import Movie from "../models/Movie";
import { Subscription } from "rxjs";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"]
})
export class MoviesComponent implements OnInit {
  popularMovies: Movie[];
  inTheaterMovies: Movie[];
  popularKidsMovies: Movie[];
  bestDramaMovies: Movie[];
  popularMoviesSub: Subscription;
  singleMovie: Movie;

  constructor(private moviesService: MovieService) {}

  ngOnInit() {
    this.popularMoviesSub = this.moviesService
      .getPopularMovies()
      .subscribe(data => {
        this.popularMovies = data;
      });
    this.moviesService.getInTheatersMovies().subscribe(data => {
      this.inTheaterMovies = data;
    });
    this.moviesService.getPopularKidsMovies().subscribe(data => {
      this.popularKidsMovies = data;
    });
    this.moviesService.getBestDramaMovies().subscribe(data => {
      this.bestDramaMovies = data;
    });
  }

  ngOnDestroy() {
    this.popularMoviesSub.unsubscribe();
  }
}

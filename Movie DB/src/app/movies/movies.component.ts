import { Component, OnInit } from "@angular/core";
import { MovieService } from "../services/movie.service";
import Movie from "../models/Movie";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const [drama, kids, popular, theaters] = this.route.snapshot.data["movies"];

    this.bestDramaMovies = drama;
    this.popularKidsMovies = kids;
    this.popularMovies = popular;
    this.inTheaterMovies = theaters;
  }
}

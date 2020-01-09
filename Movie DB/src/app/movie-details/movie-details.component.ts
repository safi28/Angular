import { Component, OnInit } from "@angular/core";
import { MovieService } from "../services/movie.service";
import { ActivatedRoute, Params } from "@angular/router";
import MovieDetails from "../models/Movie-details";

@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.css"]
})
export class MovieDetailsComponent implements OnInit {
  movie: MovieDetails;
  movieGenres: string;

  constructor(
    private moviesService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.movie = this.route.snapshot.data["singleMovie"];
    this.movieGenres = this.movie.genres.map(el => el["name"]).join("/");
 
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './movie/movie.component';
import { FooterComponent } from './footer/footer.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SingleMovieResolver } from './services/resolvers/single-movie.resolver';
import { MovieListResolver } from './services/resolvers/movie-list-resolver';
import { MovieSearchComponent } from './movie-search/movie-search.component';
 
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavbarComponent,
    LandingComponent,
    MoviesComponent,
    FooterComponent,
    MovieDetailsComponent,
    MovieComponent,
    MovieSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SingleMovieResolver, MovieListResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { HeadBarComponent } from "../head-bar/head-bar.component";
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, HeadBarComponent,RouterLink],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movies: Movie[] = [];

  constructor(private movieService: MovieService, private router: Router) {}

  fn(title: string) {
    if (title === "") {
      this.movieService.getMovieList().subscribe(data => {
        this.movies = data;
      });
    } else {
      this.movieService.getMovieByTitle(title).subscribe(movies => {
        this.movies = movies;
      });
    }
  }
  ngOnInit(): void {
    this.movieService.getMovieList().subscribe(data => {
      this.movies = data;
    });
  }
  gotodetails(movieId: number): void {
    this.router.navigate(['/movie-details', movieId]);
  }
}

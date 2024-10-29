import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesUrl = 'assets/movies.json';

  constructor(private http: HttpClient) {}

  getMovieList(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl);
  }

  getMovieById(id: number): Observable<Movie | undefined> {
    return this.http.get<Movie[]>(this.moviesUrl).pipe(
      map(movies => movies.find(movie => movie.id === id))
    );
  }

  getMovieByTitle(title: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl).pipe(
      map(movies => movies.filter(movie => movie.title.toLowerCase().startsWith(title.toLowerCase())))
    );
  }
}

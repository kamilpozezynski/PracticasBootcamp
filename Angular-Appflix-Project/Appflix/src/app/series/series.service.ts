import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SeriesService {

  urlMovieDb = 'https://api.themoviedb.org/3';
  apiKey = '0e90da3d1d5b2554b95ae8e121183b3a';
  //url = 'http://localhost:4200/assets/peliculas.json';
  constructor(private http: HttpClient) { }

  getMovies() {
    // any[] devuelve un array de cualquier tipo
    const moviedbUrl =  `${this.urlMovieDb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}`;
    return this.http.get<any[]>(moviedbUrl);
  }

  getMovieById(movie_id) {
    const moviedbUrl =  `${this.urlMovieDb}/movie/${movie_id}?api_key=${this.apiKey}`;
    return this.http.get<any[]>(moviedbUrl);
  }

}
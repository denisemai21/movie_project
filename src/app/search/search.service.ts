import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  constructor(private http: HttpClient) { }

fetchMovies(subName) {
    console.log(subName);
    return this.http.get(
      `https://api.themoviedb.org/3/search/movie?api_key=5394f92e39a6854b67989823fc0fd73a&include_adult=false&query=${subName}`
      );
    }
  fetchGenre(subGenre) {
        console.log(subGenre);
        return this.http.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=5394f92e39a6854b67989823fc0fd73a&query=${subGenre}`
          );
}

fetchYear(subYear) {
  console.log(subYear);
  return this.http.get(
    `https://api.themoviedb.org/3/search/movie?api_key=5394f92e39a6854b67989823fc0fd73a&include_adult=false&query=${subYear}`
    );
}
}

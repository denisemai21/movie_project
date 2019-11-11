import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class SearchService {

  // searchOptions: SearchOptions;
  // searchResults: any[] = [];

  constructor(private http: HttpClient) { }

fetchPopular() {
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5394f92e39a6854b67989823fc0fd73a`);
  }

fetchMoviesByName(subName: string) {
    console.log(subName);
    return this.http.get(
      `https://api.themoviedb.org/3/search/movie?api_key=5394f92e39a6854b67989823fc0fd73a&include_adult=false&query=${subName}`
      );
  }

fetchByYear(subYear: number) {
  console.log(subYear);
  return this.http.get(`https://api.themoviedb.org/3//discover/movie?&api_key=5394f92e39a6854b67989823fc0fd73a&primary_release_year=${subYear}`);
}

  

  //2nd API Call
  // searchMovies(options: SearchOptions) {
  //   if (options.searchCriteria === "name") {
  //     return this.http.get(
  //       `https://api.themoviedb.org/3/search/movie?api_key=5394f92e39a6854b67989823fc0fd73a&include_adult=false&query=${options.searchText}`
  //       );
  //   }

  //   if (options.searchCriteria === "year") {
  //     return this.http.get(
  //       `
  //     `);
  //   }

  //   if (options.searchCriteria === "person") {
  //     return this.http.get(
  //       `https://api.themoviedb.org/3/search/person?api_key=5394f92e39a6854b67989823fc0fd73a&language=en-US&page=1&include_adult=false&query=${options.searchText}`);
  //   }    
  // }
}
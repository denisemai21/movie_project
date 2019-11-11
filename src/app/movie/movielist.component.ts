import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'movie',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  popularList: any[] = [];
  movieResults: any[] = [];

  constructor(private searchService: SearchService) {
    this.searchService
    .fetchPopular()
    .subscribe((res: any) =>{
    this.popularList = res.results;
  });
}

addToWatchlist(movieTitle) {
  console.log(`The movie ${movieTitle} was added to the watchlist` );
  return movieTitle;
}

// searchByName() {

// }

// searchByYear(){
//     console.log(subYear);
//     this.searchService
//     .fetchByYear(subYear)
//     .subscribe((response: any) => { 
//       console.log(response);
//       this.movieResults = response.results;
//       console.log(this.movieResults)
//     }, error => {
//     console.log(`oh no. ${error}`);
//     });
// }


search(subName: string): void { 
  console.log(subName);
  this.searchService
  .fetchMoviesByName(subName)
  .subscribe((response: any) => { 
    console.log(response);
    this.movieResults = response.results;
    console.log(this.movieResults)
  }, error => {
    console.log(`oh no. ${error}`);
  });
  
  
}
  
  ngOnInit() {
  }

}
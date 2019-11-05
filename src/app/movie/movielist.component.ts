import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'movie',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  movieResults: any[] = [];
  
  constructor(private searchService: SearchService) { }

  search(subName: string): void { 
    console.log(subName);
    this.searchService
    .fetchMovies(subName)
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
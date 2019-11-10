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
  newFave: string;
  faves: any[] =[];
  
  constructor(private searchService: SearchService) {this.searchService.fetchPopular().subscribe((res: any) =>{
    this.popularList = res.results;
});}
  
  // took from to do list
  addFave() {
    const newItem = {
      faves: this.newFave,
      completed: false
    }
    this.faves.push(newItem);
    this.newFave = null;
  }

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
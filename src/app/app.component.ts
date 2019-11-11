import { Component } from '@angular/core';
import { SearchService } from './search/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'movie-project';

  popularList: any[] = [];
  movieResults: any[] = [];
  // newFave: string;
  // faves: any[] =[];
  // genres: Array<Object>;

  constructor(private searchService: SearchService) {this.searchService.fetchPopular().subscribe((res: any) =>{
    this.popularList = res.results;
});}
  
  // took from to do list
  // addFave() {
  //   const newItem = {
  //     faves: this.newFave,
  //     completed: false
  //   }
  //   this.faves.push(newItem);
  //   this.newFave = null;
  // }



    // searchByYear(subYear: number): void { 
    //   console.log(subYear);
    //   this.searchService
    //   .fetchByYear(subYear)
    //   .subscribe((response: any) => { 
    //     console.log(response);
    //     this.movieResults = response.results;
    //     console.log(this.movieResults)
    //   }, error => {
    //     console.log(`oh no. ${error}`);
    //   });

    
  }

  

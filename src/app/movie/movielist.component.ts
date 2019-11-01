import { Component, OnInit } from '@angular/core';
//Step 7 - import our service into the component that will use the method
import { SearchService } from '../search/search.service';

@Component({
  selector: 'movie',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  // name: string ="Denise";

  redditPosts: any[] = [];
  
  //Step 8 - set up the constructor
  constructor(private searchService: SearchService) { }

  search(subName: string): void { // this is a method, type string, returns nothing
    //Step 9 - call the service's method that makes the request
    console.log(subName);
    this.searchService
    .fetchData(subName) //calling a method that lives in a service. Going to start off the request.
    
    //Step 10 - subscribe to the observable to get the response (data from request)
    .subscribe(response => { //data we're getting back from the request
      console.log(response);
      // this.redditPosts = response.data.children;
    }, error => {
      console.log(`oh no. ${error}`);
    }); 
  }
  //start running all the code with ngOnInit the first thing its going to do is call a method called search service that will return the observable. The observable will hold the response data. 
  ngOnInit() {
  }

}


//how do you show data in angular? What do you do? 

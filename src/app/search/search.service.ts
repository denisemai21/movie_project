//Step 3 - create the service, once it's created go to step 4
import { Injectable } from '@angular/core';
//Step 4 - Import HttpClient
import { HttpClient } from '@angular/common/http';

//http requests are always done in the service ts.

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  //Step 5 - set up this constructor
  constructor(private http: HttpClient) { }

  //Step 6 - make the request (this is how your request will always look, no matter how complex your requests look. Not necessary to make 500 lines of request)
  fetchData (subName) {
  //this returns an observable
    return this.http.get(`https://www.reddit.com/r/${subName}.json`); //more dynamtic search when you add ${subName}
  }
}


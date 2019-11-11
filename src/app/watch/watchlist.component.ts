import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search/search.service';
​
​
@Component({
  selector: 'app-watch-list-pageWat',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
​
  
})
export class WatchlistComponent implements OnInit{
​
  // @Input() displayFavorites: string;
​
​
  movies: Array<any> = [];
​
​
​
  constructor(private searchService: SearchService) {
​
    this.movies = [
      {
        title: 'Episode I - The Phantom Menace'
        // poster: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg'
      },
    ];
  }
​
  deleteWatchListItem(i: any) {
    this.movies.splice(i,1);
    
  }
​
  ngOnInit() {
  }
}
import { Component, OnInit, Input } from '@angular/core';
// import { SearchService } from '../search/search.service';
// import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input()
  movie: object;
  // movie: any;

  // constructor(private router: RouterModule, private searchService: SearchService) { }

  ngOnInit() {
  }

}
